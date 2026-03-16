"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type CylindricalViewerProps = {
  src: string;
  title?: string;
};

export function CylindricalViewer({ src, title = "Panorama" }: CylindricalViewerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const state = useRef({
    yaw: 0,
    pitch: 0,
    hfov: Math.PI / 2.2,
    dragging: false,
    lastX: 0,
    lastY: 0,
    autoRotate: true,
    rafId: 0,
  });
  const [loaded, setLoaded] = useState(false);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = state.current;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const fl = (cw / 2) / Math.tan(s.hfov / 2);
    const step = 2;

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, cw, ch);

    for (let x = 0; x < cw; x += step) {
      const cx = x + step / 2;
      const relAngle = Math.atan((cx - cw / 2) / fl);
      const absAngle = s.yaw + relAngle;

      // Map angle to source x, wrapping around
      let u = absAngle / (2 * Math.PI);
      u = ((u % 1) + 1) % 1;
      const srcX = u * iw;

      // Angular width of this strip → source width
      const aLeft = Math.atan((x - cw / 2) / fl);
      const aRight = Math.atan((x + step - cw / 2) / fl);
      const srcW = Math.max(1, ((aRight - aLeft) / (2 * Math.PI)) * iw);

      // Perspective vertical scale
      const cosA = Math.cos(relAngle);
      const dstH = ch / cosA;
      const dstY = (ch - dstH) / 2 + s.pitch / cosA;

      ctx.drawImage(img, srcX, 0, srcW, ih, x, dstY, step, dstH);

      // Handle wrap-around seam: if source strip crosses image boundary
      if (srcX + srcW > iw) {
        const overflowW = srcX + srcW - iw;
        const overflowRatio = overflowW / srcW;
        const dstOverflowW = step * overflowRatio;
        ctx.drawImage(img, 0, 0, overflowW, ih, x + step - dstOverflowW, dstY, dstOverflowW, dstH);
      }
    }
  }, []);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  // Resize canvas to match container
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = wrap.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    return () => ro.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    if (!loaded) return;

    let last = performance.now();
    const loop = (now: number) => {
      const dt = now - last;
      last = now;

      if (state.current.autoRotate && !state.current.dragging) {
        state.current.yaw -= 0.0003 * dt;
      }

      render();
      state.current.rafId = requestAnimationFrame(loop);
    };

    state.current.rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(state.current.rafId);
  }, [loaded, render]);

  // Pointer & wheel events
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onDown = (e: PointerEvent) => {
      state.current.dragging = true;
      state.current.autoRotate = false;
      state.current.lastX = e.clientX;
      state.current.lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onMove = (e: PointerEvent) => {
      if (!state.current.dragging) return;
      const dx = e.clientX - state.current.lastX;
      const dy = e.clientY - state.current.lastY;
      state.current.lastX = e.clientX;
      state.current.lastY = e.clientY;

      const sens = state.current.hfov / canvas.width * (window.devicePixelRatio || 1);
      state.current.yaw -= dx * sens;
      state.current.pitch += dy * 0.8;

      const maxP = canvas.height * 0.25;
      state.current.pitch = Math.max(-maxP, Math.min(maxP, state.current.pitch));
    };

    const onUp = () => {
      state.current.dragging = false;
      canvas.style.cursor = "grab";
      // Resume auto-rotate after 3s of inactivity
      setTimeout(() => {
        if (!state.current.dragging) state.current.autoRotate = true;
      }, 3000);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      state.current.hfov += e.deltaY * 0.001;
      state.current.hfov = Math.max(Math.PI / 6, Math.min(Math.PI * 0.85, state.current.hfov));
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div ref={wrapRef} id="viewerWrap">
      <canvas
        ref={canvasRef}
        id="pano"
        style={{ width: "100%", height: "100%", cursor: "grab", display: "block" }}
      />
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#94a3b8", fontSize: 14,
        }}>
          Loading panorama…
        </div>
      )}
      <div className="viewer-overlay">
        <div className="scene-name">{title}</div>
      </div>
    </div>
  );
}
