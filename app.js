(() => {
  const CONFIG = {
    autoPlayMs: 24000,
    autoRotateSpeed: -15,
    sceneRotationDelayMs: 450,
    auctionStartTime: "2026-02-26T23:59:59+05:30",
    uploadFallbackNames: ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Balcony", "Study", "Dining"],
  };

  const DEMO_TOUR = {
    property: { name: "2BHK · Koramangala", meta: "1,150 sq ft · Auction Mar 12" },
    scenes: {
      living: {
        title: "Living Room",
        panorama: "Hall.jpg",
        hotspots: [
          { pitch: -12, yaw: 110, toScene: "kitchen" },
          { pitch: -12, yaw: 260, toScene: "bedroom" }
        ]
      },
      kitchen: {
        title: "Kitchen",
        panorama: "kitchen.jpg",
        hotspots: [
          { pitch: -10, yaw: 20, toScene: "living" },
          { pitch: -10, yaw: 190, toScene: "bedroom" }
        ]
      },
      bedroom: {
        title: "Bedroom",
        panorama: "Myrpom.jpg",
        hotspots: [
          { pitch: -10, yaw: 60, toScene: "kitchen" },
          { pitch: -10, yaw: 240, toScene: "living" }
        ]
      }
    }
  };

  const state = {
    viewer: null,
    tourData: null,
    currentId: null,
    autoPlayTimer: null,
    countdownTimer: null,
    uploadedUrls: [],
  };

  const dom = {
    playBtn: document.getElementById("playBtn"),
    fullScreenBtn: document.getElementById("fullscreenBtn"),
    uploadBtn: document.getElementById("uploadBtn"),
    loadDemoBtn: document.getElementById("loadDemoBtn"),
    prevSceneBtn: document.getElementById("prevSceneBtn"),
    nextSceneBtn: document.getElementById("nextSceneBtn"),
    fileInput: document.getElementById("fileIn"),
    sceneName: document.getElementById("sceneName"),
    sceneCounter: document.getElementById("sceneCounter"),
    roomMap: document.getElementById("roommap"),
    countdown: document.getElementById("auctionCountdown"),
  };

  function sceneIds() {
    return state.tourData ? Object.keys(state.tourData.scenes) : [];
  }

  function hasMultipleScenes() {
    return sceneIds().length > 1;
  }

  function setPlayButton(isPlaying) {
    dom.playBtn.textContent = isPlaying ? "Pause" : "Play";
  }

  function clearUploadedUrls() {
    state.uploadedUrls.forEach((url) => URL.revokeObjectURL(url));
    state.uploadedUrls = [];
  }

  function buildPannellumScenes(tour) {
    const out = {};
    Object.entries(tour.scenes).forEach(([id, scene]) => {
      out[id] = {
        type: "equirectangular",
        panorama: scene.panorama,
        hotSpots: (scene.hotspots || []).map((hotspot) => ({
          pitch: hotspot.pitch,
          yaw: hotspot.yaw,
          type: "scene",
          sceneId: hotspot.toScene,
        })),
      };
    });
    return out;
  }

  function syncUi() {
    if (!state.tourData || !state.currentId) return;
    const ids = sceneIds();
    const scene = state.tourData.scenes[state.currentId];
    const index = ids.indexOf(state.currentId);

    dom.sceneName.textContent = scene?.title || "Room";
    dom.sceneCounter.textContent = `${index + 1} / ${ids.length}`;

    document.querySelectorAll(".rm-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.id === state.currentId);
    });
  }

  function startSceneRotation() {
    if (!state.viewer || !state.viewer.startAutoRotate) return;
    state.viewer.stopAutoRotate?.();
    setTimeout(() => {
      if (!state.autoPlayTimer || !state.viewer) return;
      state.viewer.startAutoRotate(CONFIG.autoRotateSpeed);
    }, CONFIG.sceneRotationDelayMs);
  }

  function stopAutoPlay() {
    if (state.autoPlayTimer) {
      clearInterval(state.autoPlayTimer);
      state.autoPlayTimer = null;
    }
    state.viewer?.stopAutoRotate?.();
    setPlayButton(false);
  }

  function startAutoPlay() {
    if (!state.tourData) return;
    stopAutoPlay();

    state.autoPlayTimer = setInterval(() => {
      if (hasMultipleScenes()) {
        nextScene();
      }
    }, CONFIG.autoPlayMs);

    setPlayButton(true);
    startSceneRotation();
  }

  function toggleAutoPlay() {
    if (state.autoPlayTimer) {
      stopAutoPlay();
      return;
    }
    startAutoPlay();
  }

  function goToScene(id) {
    if (!state.viewer || !state.tourData || !state.tourData.scenes[id] || id === state.currentId) return;
    state.viewer.loadScene(id);
  }

  function nextScene() {
    if (!state.tourData || !state.currentId) return;
    const ids = sceneIds();
    const index = ids.indexOf(state.currentId);
    goToScene(ids[(index + 1) % ids.length]);
  }

  function prevScene() {
    if (!state.tourData || !state.currentId) return;
    const ids = sceneIds();
    const index = ids.indexOf(state.currentId);
    goToScene(ids[(index - 1 + ids.length) % ids.length]);
  }

  function buildRoomMap() {
    if (!state.tourData) return;
    dom.roomMap.innerHTML = "";

    Object.entries(state.tourData.scenes).forEach(([id, scene]) => {
      const chip = document.createElement("button");
      chip.className = "rm-chip" + (id === state.currentId ? " active" : "");
      chip.dataset.id = id;
      chip.type = "button";
      chip.textContent = scene.title;
      chip.onclick = () => goToScene(id);
      dom.roomMap.appendChild(chip);
    });
  }

  function destroyViewer() {
    if (!state.viewer) return;
    state.viewer.destroy();
    state.viewer = null;
  }

  function launch(tour) {
    stopAutoPlay();
    state.tourData = tour;
    state.currentId = Object.keys(tour.scenes)[0];

    destroyViewer();
    state.viewer = pannellum.viewer("pano", {
      default: {
        firstScene: state.currentId,
        autoLoad: true,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        keyboardZoom: false,
        mouseZoom: true,
        hfov: 95,
        friction: 0.5,
        autoRotate: 0,
        sceneFadeDuration: 700,
      },
      scenes: buildPannellumScenes(tour),
    });

    state.viewer.on("scenechange", (id) => {
      state.currentId = id;
      syncUi();
      if (state.autoPlayTimer) startSceneRotation();
    });

    state.viewer.on("load", () => {
      syncUi();
      buildRoomMap();
    });

    syncUi();
  }

  function buildUploadedTour(files) {
    const ids = files.map((_, index) => `room_${index}`);
    const tour = {
      property: { name: "Uploaded Property", meta: "" },
      scenes: {},
    };

    files.forEach((file, index) => {
      const raw = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
      const title = raw.length > 3 ? raw : (CONFIG.uploadFallbackNames[index] || `Room ${index + 1}`);
      const url = URL.createObjectURL(file);
      state.uploadedUrls.push(url);

      const hotspots = [];
      if (index < files.length - 1) hotspots.push({ pitch: -14, yaw: 0, toScene: ids[index + 1] });
      if (index > 0) hotspots.push({ pitch: -14, yaw: 180, toScene: ids[index - 1] });

      tour.scenes[ids[index]] = { title, panorama: url, hotspots };
    });

    return tour;
  }

  function onFiles(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    clearUploadedUrls();
    launch(buildUploadedTour(files));
    event.target.value = "";
  }

  function loadDemo() {
    clearUploadedUrls();
    launch(DEMO_TOUR);
  }

  function updateAuctionCountdown() {
    if (!dom.countdown) return;

    const end = new Date(CONFIG.auctionStartTime).getTime();
    const now = Date.now();
    const diff = end - now;

    if (diff <= 0) {
      dom.countdown.textContent = "Auction started";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    dom.countdown.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }

  function bindEvents() {
    dom.playBtn.addEventListener("click", toggleAutoPlay);
    dom.fullScreenBtn.addEventListener("click", () => {
      if (!state.viewer) return;
      state.viewer.toggleFullscreen();
    });
    dom.uploadBtn.addEventListener("click", () => dom.fileInput.click());
    dom.loadDemoBtn.addEventListener("click", loadDemo);
    dom.prevSceneBtn.addEventListener("click", prevScene);
    dom.nextSceneBtn.addEventListener("click", nextScene);
    dom.fileInput.addEventListener("change", onFiles);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") nextScene();
      if (event.key === "ArrowLeft") prevScene();
    });

    window.addEventListener("beforeunload", () => {
      stopAutoPlay();
      if (state.countdownTimer) clearInterval(state.countdownTimer);
      clearUploadedUrls();
      destroyViewer();
    });
  }

  function init() {
    bindEvents();
    state.countdownTimer = setInterval(updateAuctionCountdown, 1000);
    updateAuctionCountdown();
    loadDemo();
  }

  init();
})();
