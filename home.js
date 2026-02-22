(() => {
  const menuBtn = document.getElementById("menuBtn");
  const siteNav = document.getElementById("siteNav");
  const counters = document.querySelectorAll("[data-count]");
  const reveals = document.querySelectorAll(".reveal");

  function toggleMenu() {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  }

  function bindMenu() {
    if (!menuBtn || !siteNav) return;
    menuBtn.addEventListener("click", toggleMenu);

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

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

  function startCounters() {
    counters.forEach((node) => animateCounter(node));
  }

  function bindReveals() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("on");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    reveals.forEach((node) => observer.observe(node));
  }

  function init() {
    bindMenu();
    bindReveals();
    startCounters();
  }

  init();
})();
