Great! Since you want to manually paste the full working navbar (with all HTML, CSS, and JavaScript together) into each of your pages — here it is:


---

✅ ✅ Copy-Paste Ready Full Navbar Code (HTML + CSS + JS, All-in-One)

Paste this just below your <body> tag in every page:

<!-- ✅ START NAVBAR SECTION -->
<style>
  :root {
    --primary-blue: #1a75ff;
  }

  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .navbar {
    transition: background 0.3s ease;
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.95) !important;
  }

  .navbar-brand img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  .nav-link {
    position: relative;
    padding: 5px 0;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-blue);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light fixed-top glass">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="1.png" alt="Logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html#heroCarousel"><i class="fas fa-home me-1"></i> Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html"><i class="fas fa-info-circle me-1"></i> About</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#gallery"><i class="fas fa-image me-1"></i> Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#announcements"><i class="fas fa-bullhorn me-1"></i> Announcements</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#school-profile"><i class="fas fa-school me-1"></i> School Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#staff"><i class="fas fa-users me-1"></i> Staff</a></li>
        <li class="nav-item"><a class="nav-link" href="test.html"><i class="fas fa-envelope me-1"></i> Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");

    document.addEventListener("click", function (event) {
      const isInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
      const isOpen = navbarCollapse.classList.contains("show");
      if (!isInside && isOpen) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });

    window.addEventListener("scroll", function () {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });
</script>
<!-- ✅ END NAVBAR SECTION -->


---

✅ Required Bootstrap + FontAwesome Links (if not already in your <head>):

<!-- Add to your <head> -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />

<!-- Add before </body> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>


---

✅ How to Change Navbar Content

In each page:

Just edit this part inside <ul class="navbar-nav ms-auto">:


<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>

Add or remove pages, or make a nav item active.



---

Let me know if you want a dark version, dropdown menu, or search bar inside the navbar too.

