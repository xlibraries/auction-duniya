"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ImmersiveViewerProps = {
  images: string[];
};

type PannellumViewer = {
  loadScene: (sceneId: string) => void;
  getScene: () => string;
  on: (event: string, cb: () => void) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    pannellum?: {
      viewer: (containerId: string, config: Record<string, unknown>) => PannellumViewer;
    };
  }
}

const SCENE_NAMES = ["Living Room", "Kitchen", "Bedroom", "Balcony", "Hall"];

function ensurePannellumAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const cssId = "pannellum-css";
  if (!document.getElementById(cssId)) {
    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(link);
  }

  if (window.pannellum) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const scriptId = "pannellum-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load pannellum")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load pannellum"));
    document.body.appendChild(script);
  });
}

export function ImmersiveViewer({ images }: ImmersiveViewerProps) {
  const viewerRef = useRef<PannellumViewer | null>(null);
  const [sceneName, setSceneName] = useState("Living Room");
  const [sceneCounter, setSceneCounter] = useState("1 / 1");

  const scenes = useMemo(() => {
    const safeImages = images.length > 0 ? images : ["/images/Hall.jpg"];

    return safeImages.reduce<Record<string, Record<string, unknown>>>((acc, image, index) => {
      const sceneId = `scene-${index + 1}`;
      const nextSceneId = `scene-${(index + 1) % safeImages.length + 1}`;
      const name = SCENE_NAMES[index] || `Room ${index + 1}`;

      acc[sceneId] = {
        type: "equirectangular",
        panorama: image,
        title: name,
        autoLoad: true,
        hotSpots: safeImages.length > 1
          ? [
              {
                pitch: -8,
                yaw: 120,
                type: "scene",
                text: `Go to ${SCENE_NAMES[(index + 1) % safeImages.length] || `Room ${(index + 1) % safeImages.length + 1}`}`,
                sceneId: nextSceneId,
              },
            ]
          : [],
      };

      return acc;
    }, {});
  }, [images]);

  useEffect(() => {
    let cancelled = false;

    ensurePannellumAssets()
      .then(() => {
        if (cancelled || !window.pannellum) return;

        viewerRef.current?.destroy();

        const firstSceneId = Object.keys(scenes)[0];
        const totalScenes = Object.keys(scenes).length;

        const viewer = window.pannellum.viewer("pano", {
          default: {
            firstScene: firstSceneId,
            sceneFadeDuration: 500,
            autoRotate: -2,
            showControls: false,
          },
          scenes,
        });

        const syncOverlay = () => {
          const currentScene = viewer.getScene();
          const keys = Object.keys(scenes);
          const index = keys.findIndex((key) => key === currentScene);
          const scene = scenes[currentScene];
          const title = typeof scene?.title === "string" ? scene.title : "Room";
          setSceneName(title);
          setSceneCounter(`${index + 1} / ${totalScenes}`);
        };

        viewer.on("scenechange", syncOverlay);
        syncOverlay();
        viewerRef.current = viewer;
      })
      .catch(() => {
        setSceneName("Viewer unavailable");
        setSceneCounter("0 / 0");
      });

    return () => {
      cancelled = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, [scenes]);

  return (
    <div id="viewerWrap">
      <div id="pano" />
      <div className="viewer-overlay">
        <div className="scene-name" id="sceneName">{sceneName}</div>
        <div className="counter" id="sceneCounter">{sceneCounter}</div>
      </div>
    </div>
  );
}
