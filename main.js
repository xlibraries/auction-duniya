(() => {
  const app = document.getElementById("app");

  const HOME_TEMPLATE = `
<div class="page-bg" aria-hidden="true"></div>
<header class="site-header">
  <div class="container nav-wrap">
    <a href="#home" class="logo">Auction Dunia</a>
    <button id="menuBtn" class="menu-btn" aria-label="Toggle menu" aria-expanded="false">Menu</button>
    <nav id="siteNav" class="site-nav" aria-label="Main navigation">
      <a href="#properties">Properties</a>
      <a href="#services">Services</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
      <a href="#property" class="nav-cta">See Immersive Demo</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero container">
    <div class="hero-copy">
      <p class="eyebrow">India's Auction Intelligence Platform</p>
      <h1>Stop Guessing. <span>Start Winning</span> Better Property Auctions.</h1>
      <p class="hero-sub">From shortlisting to legal checks to bidding day, we simplify the full SARFAESI auction journey with data-backed confidence.</p>
      <div class="hero-actions">
        <a href="#properties" class="btn btn-solid">Explore Listings</a>
        <a href="#property" class="btn btn-outline">View 360 Property Tour</a>
      </div>
      <div class="hero-metrics">
        <div>
          <strong data-count="1250">0</strong>
          <span>Properties Tracked</span>
        </div>
        <div>
          <strong data-count="94">0</strong>
          <span>Due Diligence Score</span>
        </div>
        <div>
          <strong data-count="18">0</strong>
          <span>Expert Service Modules</span>
        </div>
      </div>
    </div>
    <div class="hero-panel reveal">
      <h2>Next Major Auction Window</h2>
      <p class="hero-date">Thursday, February 26, 2026</p>
      <ul>
        <li><span>Region</span><strong>Bengaluru + Mysuru</strong></li>
        <li><span>Banking Partners</span><strong>28 Active Institutions</strong></li>
        <li><span>Average Ticket Size</span><strong>₹78.4 Lakhs</strong></li>
      </ul>
      <div class="panel-band">Live Watchlist Updates Every 15 Minutes</div>
    </div>
  </section>

  <section id="properties" class="container section reveal">
    <div class="section-head">
      <p class="eyebrow">Featured Properties</p>
      <h2>High-Potential Auctions This Week</h2>
    </div>
    <div class="property-grid">
      <article class="property-card">
        <img src="./Hall.jpg" alt="AD-433 living hall preview"/>
        <div class="card-body">
          <p class="card-id">AD-433 • Basavangudi</p>
          <h3>Independent House</h3>
          <p>Reserve: ₹85.30 Lakhs · Market: ₹1.07 Cr</p>
          <a href="#property">Open Immersive Preview</a>
        </div>
      </article>
      <article class="property-card">
        <img src="./kitchen.jpg" alt="Kitchen property preview"/>
        <div class="card-body">
          <p class="card-id">AD-519 • HSR Layout</p>
          <h3>2BHK Apartment</h3>
          <p>Reserve: ₹61.40 Lakhs · Market: ₹84.00 Lakhs</p>
          <a href="#">View Details</a>
        </div>
      </article>
      <article class="property-card">
        <img src="./Myrpom.jpg" alt="Bedroom property preview"/>
        <div class="card-body">
          <p class="card-id">AD-601 • Whitefield</p>
          <h3>3BHK Builder Floor</h3>
          <p>Reserve: ₹98.00 Lakhs · Market: ₹1.34 Cr</p>
          <a href="#">View Details</a>
        </div>
      </article>
    </div>
  </section>

  <section id="how-it-works" class="container section reveal">
    <div class="section-head">
      <p class="eyebrow">How It Works</p>
      <h2>Your Auction Journey, Designed End-to-End</h2>
    </div>
    <div class="timeline">
      <article>
        <h3>1. Discover</h3>
        <p>Filter by city, bank, reserve price, legal status, and occupancy risk in one dashboard.</p>
      </article>
      <article>
        <h3>2. Verify</h3>
        <p>Get document checks, title verification, and encumbrance scans before committing EMD.</p>
      </article>
      <article>
        <h3>3. Prepare</h3>
        <p>Complete registration, compliance paperwork, and bidding strategy with expert guidance.</p>
      </article>
      <article>
        <h3>4. Win & Secure</h3>
        <p>Support for legal drafting, possession workflow, and post-auction utility transfers.</p>
      </article>
    </div>
  </section>

  <section id="services" class="container section reveal">
    <div class="section-head">
      <p class="eyebrow">Services</p>
      <h2>Built for Serious Auction Buyers</h2>
    </div>
    <div class="service-grid">
      <article>
        <h3>Document Procurement</h3>
        <p>Collect and organize all public notices, title records, and auction files.</p>
      </article>
      <article>
        <h3>Registration & Compliance</h3>
        <p>End-to-end support to avoid procedural rejection on auction day.</p>
      </article>
      <article>
        <h3>Legal Drafting & Review</h3>
        <p>Vet terms, draft notices, and reduce legal ambiguity before and after bidding.</p>
      </article>
      <article>
        <h3>Khata, Utility & Tax Services</h3>
        <p>Smooth transition after winning with municipal and utility compliance support.</p>
      </article>
    </div>
  </section>

  <section id="education" class="container section education reveal">
    <div>
      <p class="eyebrow">Education Hub</p>
      <h2>Understand SARFAESI Before You Risk Capital</h2>
      <p>Structured explainers, checklists, and practical breakdowns of timelines, liabilities, and post-auction processes.</p>
      <a href="#" class="btn btn-solid">Start Learning</a>
    </div>
    <aside>
      <h3>Most Read This Week</h3>
      <ul>
        <li>How to read auction sale notices correctly</li>
        <li>5 hidden costs first-time bidders miss</li>
        <li>Checklist before paying EMD</li>
      </ul>
    </aside>
  </section>
</main>

<footer id="contact" class="site-footer">
  <div class="container footer-grid">
    <div>
      <h3>Auction Dunia</h3>
      <p>Your guide to buying bank-repossessed properties in India with clarity and confidence.</p>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Properties</li>
        <li>Education</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <p>No 26, Prestige Cube, Laskar Hosur Road, Adugodi, Bengaluru - 560030</p>
      <p>7019773792</p>
      <p>info@auctiondunia.com</p>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container foot-meta">
      <span>© 2026 Auction Dunia. All Rights Reserved.</span>
      <span>Terms · Privacy · Disclaimer · Refund Policy</span>
    </div>
  </div>
</footer>
`;

  const PROPERTY_TEMPLATE = `
<div class="page">
  <div class="top-nav">
    <div class="brand">
      <div class="brand-title">Auction Dunia</div>
      <div class="menu-line">
        <a href="#home">Home</a>
        <a href="#property">Properties</a>
        <a href="#home">Services</a>
        <a href="#home">Education</a>
        <a href="#home">Resources</a>
      </div>
      <div class="menu-line">
        <span class="welcome">Welcome, Aman!</span>
        <a href="#home">Dashboard</a>
        <a href="#home">Logout</a>
      </div>
    </div>
  </div>
  <div class="sub-nav">
    <div class="sub-nav-inner">
      <a href="#home" style="color:inherit;text-decoration:none;">Home</a> / <a href="#property" style="color:inherit;text-decoration:none;">Properties</a> / <span>AD-433 Independent House</span>
    </div>
  </div>

  <main class="content">
    <div class="breadcrumb"><a href="#home" style="color:inherit;text-decoration:none;">Back to Properties</a></div>
    <h1 class="title">AD-433 Independent House</h1>
    <div class="header-meta">
      <span class="badge">ACTIVE</span>
      <span class="mini-info">AD-433</span>
      <span class="mini-info">Basavangudi</span>
      <span class="mini-info">Bank: Karnataka Bank Ltd</span>
    </div>
    <div class="meta">Market Price: 1.07 Cr · Reserve Price: 85.30 Lakhs · Auction Ends: 2/26/2026</div>

    <div class="layout">
      <section class="card">
        <div class="media-head">
          <div class="mode-pill">Immersive Tour Enabled</div>
          <div class="head-actions">
            <button class="btn" id="playBtn">Play</button>
            <button class="btn" id="fullscreenBtn">Fullscreen</button>
            <button class="btn" id="uploadBtn">Upload 360</button>
            <button class="btn" id="loadDemoBtn">Load Demo</button>
          </div>
        </div>

        <div id="viewerWrap">
          <div id="pano"></div>
          <div class="viewer-overlay">
            <div class="scene-name" id="sceneName">—</div>
            <div class="counter" id="sceneCounter">0 / 0</div>
          </div>
        </div>

        <div class="viewer-foot">
          <div id="roommap"></div>
          <div class="viewer-tools">
            <button class="btn is-hidden" id="prevSceneBtn">Previous Room</button>
            <button class="btn is-hidden" id="nextSceneBtn">Next Room</button>
            <select id="hotspotTargetSelect" class="btn select-btn is-hidden" aria-label="Select hotspot target room"></select>
            <button class="btn is-hidden" id="hotspotEditBtn">Place Door Link</button>
            <button class="btn is-hidden" id="clearSceneHotspotsBtn">Clear Scene Links</button>
            <button class="btn is-hidden" id="copyHotspotsBtn">Copy Hotspot JSON</button>
            <input type="file" id="fileIn" class="hidden-file-input" accept="image/*" multiple>
          </div>
          <div id="hotspotHint" class="hotspot-hint is-hidden">Hotspot editor: select target room, click "Place Door Link", then click exact doorway in the 360 view.</div>
        </div>
      </section>

      <aside class="card sidebar">
        <div class="price">85.30 Lakhs</div>
        <div class="price-note">Reserve Price</div>

        <div class="kv"><span>Market Price</span><span>1.07 Cr</span></div>
        <div class="kv"><span>Auction Ends</span><span>2/26/2026</span></div>
        <div class="kv"><span>Bank</span><span>Karnataka Bank Ltd</span></div>
        <div class="kv"><span>EMD Amount</span><span>₹8.53 Lakhs</span></div>
        <div class="kv"><span>EMD Date</span><span>25 February 2026</span></div>

        <div class="countdown">Auction Starts In: <span id="auctionCountdown">--</span></div>

        <button class="cta">Save</button>
        <button class="cta secondary">Share</button>

        <section class="section help-section">
          <h2>Need Help?</h2>
          <p class="help-copy">Have questions about this property or the auction process?</p>
          <div class="help">
            <a class="btn" href="tel:7019773792">Call Us (7019773792)</a>
            <a class="btn" href="mailto:info@auctiondunia.com">Email Us (info@auctiondunia.com)</a>
          </div>
        </section>
      </aside>
    </div>

    <section class="card section">
      <h2>About This Property</h2>
      <p>
        Configuration: NA. Facing: East. Water Facility: BWSSB. Legal Clearance: Yes. Possession: Symbolic.
        Encumbrance: Nil. Katha: A Katha.
      </p>
    </section>

    <section class="card section">
      <h2>Property Details</h2>
      <div class="spec-grid">
        <div class="spec-item"><div class="k">Property Type</div><div class="v">Independent House</div></div>
        <div class="spec-item"><div class="k">Possession Status</div><div class="v">Symbolic</div></div>
        <div class="spec-item"><div class="k">Size</div><div class="v">654.00 sq ft</div></div>
        <div class="spec-item"><div class="k">Year Built</div><div class="v">2013</div></div>
      </div>
    </section>

    <section class="card section">
      <h2>Amenities</h2>
      <p>No amenities listed.</p>
    </section>

    <section class="card section">
      <h2>Location & Nearby</h2>
      <div class="map-box">
        <iframe
          title="AD-433 location map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?output=embed&q=12.8974253,77.6528988">
        </iframe>
      </div>
      <div class="map-credit">
        Google Maps preview ·
        <a href="https://www.google.com/maps/place/MS+Nest/@12.8975938,77.6521896,20.14z/data=!4m6!3m5!1s0x3bae14a0a4c3caeb:0xeb9865d3c2a416f6!8m2!3d12.8974253!4d77.6528988!16s%2Fg%2F11cssn83st?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Open exact shared location</a>
      </div>
      <h2 class="nearby-heading">Nearby Facilities</h2>
      <p>No nearby facilities listed.</p>
    </section>

    <section class="card section">
      <h2>Auction Details</h2>
      <div class="auction-grid"><span>Market Price:</span><span>1.07 Cr</span></div>
      <div class="auction-grid"><span>Reserve Price:</span><span>85.30 Lakhs</span></div>
      <div class="auction-grid"><span>EMD Amount:</span><span>₹8.53 Lakhs</span></div>
      <div class="auction-grid"><span>EMD Date:</span><span>25 February 2026</span></div>
      <div class="auction-grid"><span>Auction Start:</span><span>2/26/2026</span></div>
      <div class="auction-grid"><span>Auction End:</span><span>2/26/2026</span></div>
    </section>

    <section class="card section more-box">
      <h2>More Properties</h2>
      <p class="more-note">No other properties found in Basavangudi by Karnataka Bank Ltd.</p>
      <button class="btn">View All Properties</button>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div>
        <h3>Auction Dunia</h3>
        <p>Your guide to buying bank-repossessed properties in India. We provide education and resources to help you navigate the SARFAESI auction process.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Properties</li>
          <li>Education</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Our Services</h3>
        <ul>
          <li>Document Procurement</li>
          <li>Registration & Compliance Support</li>
          <li>Legal Drafting & Review</li>
          <li>Khata, Utility & Tax Services</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>No 26, Prestige Cube, Laskar Hosur Road, Adugodi, Bengaluru - 560030</p>
        <p>7019773792</p>
        <p>info@auctiondunia.com</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <div>© 2026 Auction Dunia. All Rights Reserved. Powered-By Delphin Digital</div>
        <div class="policy-links">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Disclaimer Policy</span>
          <span>Refund Policy</span>
        </div>
      </div>
    </div>
  </footer>
</div>
`;

  function initHome(currentHash) {
    const menuBtn = document.getElementById("menuBtn");
    const siteNav = document.getElementById("siteNav");
    const counters = document.querySelectorAll("[data-count]");
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("on");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    reveals.forEach((node) => observer.observe(node));

    function animateCounter(node) {
      const target = Number(node.dataset.count || 0);
      if (!target) return;
      const duration = 1100;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        node.textContent = `${value}${target === 94 ? "%" : "+"}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    counters.forEach((node) => animateCounter(node));

    if (menuBtn && siteNav) {
      const toggleMenu = () => {
        const isOpen = siteNav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
      };

      menuBtn.addEventListener("click", toggleMenu);
      siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          siteNav.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    const sectionTarget = currentHash && !["home", "property"].includes(currentHash) ? document.getElementById(currentHash) : null;
    if (sectionTarget) {
      requestAnimationFrame(() => {
        sectionTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    return () => {
      observer.disconnect();
    };
  }

  function initProperty() {
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
            { pitch: -9.56, yaw: -178.1, toScene: "kitchen" },
            { pitch: -6.83, yaw: 86.8, toScene: "bedroom" }
          ]
        },
        kitchen: {
          title: "Kitchen",
          panorama: "kitchen.jpg",
          hotspots: [
            { pitch: -15.09, yaw: -50.71, toScene: "living" }
          ]
        },
        bedroom: {
          title: "Bedroom",
          panorama: "Myrpom.jpg",
          hotspots: [
            { pitch: -11.12, yaw: -172.91, toScene: "living" }
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
      hotspotEditMode: false,
    };

    const dom = {
      playBtn: document.getElementById("playBtn"),
      fullScreenBtn: document.getElementById("fullscreenBtn"),
      uploadBtn: document.getElementById("uploadBtn"),
      loadDemoBtn: document.getElementById("loadDemoBtn"),
      prevSceneBtn: document.getElementById("prevSceneBtn"),
      nextSceneBtn: document.getElementById("nextSceneBtn"),
      hotspotTargetSelect: document.getElementById("hotspotTargetSelect"),
      hotspotEditBtn: document.getElementById("hotspotEditBtn"),
      clearSceneHotspotsBtn: document.getElementById("clearSceneHotspotsBtn"),
      copyHotspotsBtn: document.getElementById("copyHotspotsBtn"),
      hotspotHint: document.getElementById("hotspotHint"),
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

    function setHotspotHint(message, isEditing = false) {
      if (!dom.hotspotHint) return;
      dom.hotspotHint.textContent = message;
      dom.hotspotHint.classList.toggle("editing", isEditing);
    }

    function setHotspotEditButton(isEditing) {
      if (!dom.hotspotEditBtn) return;
      dom.hotspotEditBtn.textContent = isEditing ? "Cancel Placement" : "Place Door Link";
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

    function refreshHotspotTargetOptions() {
      if (!dom.hotspotTargetSelect || !state.tourData) return;

      const previous = dom.hotspotTargetSelect.value;
      dom.hotspotTargetSelect.innerHTML = "";

      Object.entries(state.tourData.scenes).forEach(([id, scene]) => {
        if (id === state.currentId) return;
        const option = document.createElement("option");
        option.value = id;
        option.textContent = scene.title;
        dom.hotspotTargetSelect.appendChild(option);
      });

      if (!dom.hotspotTargetSelect.options.length) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "No target room";
        dom.hotspotTargetSelect.appendChild(option);
        dom.hotspotTargetSelect.disabled = true;
        return;
      }

      dom.hotspotTargetSelect.disabled = false;
      dom.hotspotTargetSelect.value = previous && previous !== state.currentId ? previous : dom.hotspotTargetSelect.options[0].value;
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

      refreshHotspotTargetOptions();
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
        if (hasMultipleScenes()) nextScene();
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

    function toggleHotspotPlacementMode(forceValue) {
      const next = typeof forceValue === "boolean" ? forceValue : !state.hotspotEditMode;
      state.hotspotEditMode = next;
      setHotspotEditButton(next);

      if (next) {
        setHotspotHint("Click on the doorway in the panorama to place link to selected room.", true);
        return;
      }

      setHotspotHint("Hotspot editor: select target room, click \"Place Door Link\", then click exact doorway in the 360 view.");
    }

    function goToScene(id) {
      if (!state.viewer || !state.tourData || !state.tourData.scenes[id] || id === state.currentId) return;
      state.viewer.loadScene(id);
    }

    function addDoorHotspotAtPointer(event) {
      if (!state.viewer || !state.tourData || !state.currentId || !state.hotspotEditMode) return;

      const targetId = dom.hotspotTargetSelect?.value || "";
      if (!targetId || targetId === state.currentId) {
        setHotspotHint("Select a valid target room before placing hotspot.");
        return;
      }

      const coords = state.viewer.mouseEventToCoords?.(event);
      if (!coords) return;

      const [pitch, yaw] = coords;
      const hotspot = { pitch, yaw, toScene: targetId };
      state.tourData.scenes[state.currentId].hotspots = state.tourData.scenes[state.currentId].hotspots || [];
      state.tourData.scenes[state.currentId].hotspots.push(hotspot);

      state.viewer.addHotSpot?.({ pitch, yaw, type: "scene", sceneId: targetId }, state.currentId);

      const targetTitle = state.tourData.scenes[targetId]?.title || targetId;
      setHotspotHint(`Placed link to ${targetTitle} at pitch ${pitch.toFixed(1)}, yaw ${yaw.toFixed(1)}.`);
      toggleHotspotPlacementMode(false);
    }

    function clearCurrentSceneHotspots() {
      if (!state.tourData || !state.currentId) return;
      state.tourData.scenes[state.currentId].hotspots = [];
      const sceneId = state.currentId;
      launch(state.tourData, sceneId);
      setHotspotHint("Cleared all links for current room.");
    }

    async function copyHotspotsJson() {
      if (!state.tourData) return;
      const exportData = {};
      Object.entries(state.tourData.scenes).forEach(([id, scene]) => {
        exportData[id] = (scene.hotspots || []).map((hotspot) => ({
          pitch: Number(hotspot.pitch.toFixed(2)),
          yaw: Number(hotspot.yaw.toFixed(2)),
          toScene: hotspot.toScene,
        }));
      });

      const json = JSON.stringify(exportData, null, 2);
      try {
        await navigator.clipboard.writeText(json);
        setHotspotHint("Hotspot JSON copied to clipboard.");
      } catch (_err) {
        setHotspotHint("Clipboard blocked. Hotspot JSON printed in browser console.");
        console.log(json);
      }
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

    function launch(tour, preferredSceneId = "") {
      stopAutoPlay();
      state.tourData = tour;
      const firstId = Object.keys(tour.scenes)[0];
      state.currentId = preferredSceneId && tour.scenes[preferredSceneId] ? preferredSceneId : firstId;
      toggleHotspotPlacementMode(false);

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

      state.viewer.on("mousedown", (event) => addDoorHotspotAtPointer(event));
      state.viewer.on("load", () => {
        syncUi();
        buildRoomMap();
      });

      syncUi();
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

    function buildUploadedTour(files) {
      const ids = files.map((_, index) => `room_${index}`);
      const tour = { property: { name: "Uploaded Property", meta: "" }, scenes: {} };

      files.forEach((file, index) => {
        const raw = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        const title = raw.length > 3 ? raw : (CONFIG.uploadFallbackNames[index] || `Room ${index + 1}`);
        const url = URL.createObjectURL(file);
        state.uploadedUrls.push(url);
        tour.scenes[ids[index]] = { title, panorama: url, hotspots: [] };
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
      const diff = end - Date.now();

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

    dom.playBtn.addEventListener("click", toggleAutoPlay);
    dom.fullScreenBtn.addEventListener("click", () => state.viewer?.toggleFullscreen());
    dom.uploadBtn.addEventListener("click", () => dom.fileInput.click());
    dom.loadDemoBtn.addEventListener("click", loadDemo);
    dom.prevSceneBtn.addEventListener("click", prevScene);
    dom.nextSceneBtn.addEventListener("click", nextScene);
    dom.fileInput.addEventListener("change", onFiles);
    dom.hotspotEditBtn.addEventListener("click", () => toggleHotspotPlacementMode());
    dom.clearSceneHotspotsBtn.addEventListener("click", clearCurrentSceneHotspots);
    dom.copyHotspotsBtn.addEventListener("click", copyHotspotsJson);

    const keyHandler = (event) => {
      if (event.key === "ArrowRight") nextScene();
      if (event.key === "ArrowLeft") prevScene();
      if (event.key === "Escape" && state.hotspotEditMode) toggleHotspotPlacementMode(false);
    };
    document.addEventListener("keydown", keyHandler);

    state.countdownTimer = setInterval(updateAuctionCountdown, 1000);
    updateAuctionCountdown();
    setHotspotHint("Hotspot editor: select target room, click \"Place Door Link\", then click exact doorway in the 360 view.");
    loadDemo();

    return () => {
      document.removeEventListener("keydown", keyHandler);
      stopAutoPlay();
      if (state.countdownTimer) clearInterval(state.countdownTimer);
      clearUploadedUrls();
      destroyViewer();
    };
  }

  let cleanup = null;

  function renderRoute() {
    const raw = window.location.hash.replace(/^#/, "");
    const page = raw === "property" ? "property" : "home";

    if (cleanup) {
      cleanup();
      cleanup = null;
    }

    app.innerHTML = page === "property" ? PROPERTY_TEMPLATE : HOME_TEMPLATE;
    cleanup = page === "property" ? initProperty() : initHome(raw);
  }

  window.addEventListener("hashchange", renderRoute);
  if (!window.location.hash) {
    window.location.hash = "#home";
  } else {
    renderRoute();
  }
})();
