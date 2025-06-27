document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarNav");

  if (!navbarToggler || !navbarCollapse) return;

  // 1. Toggle open/close on toggle button click
  navbarToggler.addEventListener("click", function () {
    const isOpen = navbarCollapse.classList.contains("show");
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    isOpen ? bsCollapse.hide() : bsCollapse.show();
  });

  // 2. Close navbar when clicking outside of it
  document.addEventListener("click", function (event) {
    const clickedInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    if (!clickedInside && navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });

  // 3. Close navbar when clicking a nav link
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

  // 4. Add 'scrolled' class to navbar on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
});