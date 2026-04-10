(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelectorAll(".nav a");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (header) header.classList.remove("nav-open");
    });
  });

  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll("[data-reveal]");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var statusEl = document.getElementById("status");
  if (statusEl && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    var msgs = ["ALL SYSTEMS NOMINAL", "LINK STABLE", "READY FOR UPLINK"];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % msgs.length;
      statusEl.style.opacity = "0";
      setTimeout(function () {
        statusEl.textContent = msgs[i];
        statusEl.style.opacity = "1";
      }, 200);
    }, 4500);
    statusEl.style.transition = "opacity 0.2s ease";
  }
})();
