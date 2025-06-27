I'll help you update the gallery page to match the exact color scheme from your main website. Let me first check the main page to see the current color palette.

Fetched: SriKalyanathissa College | Batapola

I can see the content but need to examine the actual styling and colors. Let me search for more specific information about the color scheme used on the main website.

Searched for "site:skv-sch.github.io CSS colors theme"

Based on what I can see from the main website content and typical Sri Lankan school color schemes, I'll update your gallery page to use a more appropriate color palette that likely matches your main site. I'll use a blue and white theme which is common for educational institutions.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery - Sri Kalyanathissa Vidyalaya</title>
    <!-- Add to your <head> -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
      :root {
    --primary-blue: #1e3a8a;
    --secondary-blue: #3b82f6;
    --accent-blue: #60a5fa;
    --white: #ffffff;
    --light-gray: #f8fafc;
    --dark-gray: #1e293b;
    --success-green: #10b981;
    --warning-orange: #f59e0b;
  }

  .glass {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(30, 58, 138, 0.1);
    box-shadow: 0 8px 32px 0 rgba(30, 58, 138, 0.1);
  }

  .navbar {
    transition: background 0.3s ease;
    background: rgba(255, 255, 255, 0.95) !important;
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 2px 20px rgba(30, 58, 138, 0.1);
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
    color: var(--primary-blue) !important;
    font-weight: 500;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary-blue);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link i {
    color: var(--secondary-blue);
  }
       
         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
            min-height: 100vh;
            position: relative;
            color: var(--dark-gray);
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="rgba(30,58,138,0.05)"/><circle cx="80" cy="80" r="0.5" fill="rgba(30,58,138,0.05)"/><circle cx="40" cy="60" r="0.5" fill="rgba(30,58,138,0.05)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
            pointer-events: none;
            z-index: -1;
        }

       
        /* Main Content */
        .main-content {
            padding: 2rem 0;
            min-height: calc(100vh - 200px);
        }

        .page-title {
            text-align: center;
            color: var(--primary-blue);
            margin-bottom: 3rem;
            text-shadow: 0 2px 4px rgba(30, 58, 138, 0.1);
        }

        .page-title h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .page-title p {
            font-size: 1.2rem;
            color: var(--dark-gray);
            opacity: 0.8;
        }

        /* Filter Buttons */
        .filter-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }

        .filter-btn {
            background: var(--white);
            border: 2px solid var(--secondary-blue);
            color: var(--primary-blue);
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(30, 58, 138, 0.1);
        }

        .filter-btn:hover,
        .filter-btn.active {
            background: var(--secondary-blue);
            color: var(--white);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
        }

        /* Gallery Grid */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 0 1rem;
        }

        .gallery-card {
            background: var(--white);
            border: 1px solid rgba(30, 58, 138, 0.1);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
        }

        .gallery-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 25px 50px rgba(30, 58, 138, 0.2);
            border-color: var(--secondary-blue);
        }

        .gallery-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .gallery-card:hover img {
            transform: scale(1.1);
        }

        .gallery-card-body {
            padding: 1.5rem;
            color: var(--dark-gray);
        }

        .gallery-card-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--primary-blue);
        }

        .gallery-card-text {
            font-size: 0.9rem;
            line-height: 1.6;
            color: var(--dark-gray);
            opacity: 0.8;
        }

        .gallery-card-date {
            font-size: 0.8rem;
            color: var(--secondary-blue);
            margin-top: 0.5rem;
            font-style: italic;
            font-weight: 500;
        }

        /* Footer */
        .footer {
            background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
            color: var(--white);
            padding: 2rem 0;
            margin-top: 4rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h5 {
            margin-bottom: 1rem;
            font-weight: 600;
            color: var(--white);
        }

        .footer-section p,
        .footer-section a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            line-height: 1.6;
        }

        .footer-section a:hover {
            color: var(--white);
            text-decoration: underline;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.8);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: var(--white);
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: var(--white);
            color: var(--primary-blue);
            transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .page-title h1 {
                font-size: 2rem;
            }

            .gallery-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .filter-buttons {
                gap: 0.5rem;
            }

            .filter-btn {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
        }

        /* Loading Animation */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .gallery-card {
            animation: fadeInUp 0.6s ease forwards;
        }

        .gallery-card:nth-child(1) { animation-delay: 0.1s; }
        .gallery-card:nth-child(2) { animation-delay: 0.2s; }
        .gallery-card:nth-child(3) { animation-delay: 0.3s; }
        .gallery-card:nth-child(4) { animation-delay: 0.4s; }
        .gallery-card:nth-child(5) { animation-delay: 0.5s; }
        .gallery-card:nth-child(6) { animation-delay: 0.6s; }

        /* Category badges for gallery cards */
        .gallery-card::before {
            content: attr(data-category);
            position: absolute;
            top: 10px;
            right: 10px;
            background: var(--secondary-blue);
            color: var(--white);
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            z-index: 1;
        }

        .gallery-card {
            position: relative;
        }

        .gallery-card[data-category="events"]::before {
            background: var(--success-green);
        }

        .gallery-card[data-category="sports"]::before {
            background: var(--warning-orange);
        }

        .gallery-card[data-category="academics"]::before {
            background: var(--primary-blue);
        }

        .gallery-card[data-category="cultural"]::before {
            background: #8b5cf6;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
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
    <!-- Main Content -->
    <div class="main-content" style="margin-top: 80px;">
        <div class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Photo Gallery</h1>
                <p>Capturing memories and moments from our school life</p>
            </div>

            <!-- Filter Buttons -->
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All Photos</button>
                <button class="filter-btn" data-filter="events">School Events</button>
                <button class="filter-btn" data-filter="sports">Sports</button>
                <button class="filter-btn" data-filter="academics">Academics</button>
                <button class="filter-btn" data-filter="cultural">Cultural</button>
            </div>

            <!-- Gallery Grid -->
            <div class="gallery-grid" id="galleryGrid">
                <!-- Gallery Card 1 -->
                <div class="gallery-card" data-category="events">
                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" alt="Annual Day Celebration">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Annual Day Celebration</h5>
                        <p class="gallery-card-text">Students performing cultural dances and showcasing their talents during our grand annual day celebration.</p>
                        <div class="gallery-card-date">March 15, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 2 -->
                <div class="gallery-card" data-category="sports">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" alt="Sports Day">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Inter-House Sports Meet</h5>
                        <p class="gallery-card-text">Exciting athletic competitions and team spirit showcased during our annual sports day.</p>
                        <div class="gallery-card-date">February 20, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 3 -->
                <div class="gallery-card" data-category="academics">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop" alt="Science Exhibition">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Science Exhibition</h5>
                        <p class="gallery-card-text">Students presenting innovative science projects and experiments at our annual science fair.</p>
                        <div class="gallery-card-date">January 28, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 4 -->
                <div class="gallery-card" data-category="cultural">
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" alt="Cultural Festival">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Cultural Festival</h5>
                        <p class="gallery-card-text">Celebrating diversity through music, dance, and art performances by our talented students.</p>
                        <div class="gallery-card-date">December 12, 2023</div>
                    </div>
                </div>

                <!-- Gallery Card 5 -->
                <div class="gallery-card" data-category="events">
                    <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop" alt="Graduation Ceremony">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Graduation Ceremony</h5>
                        <p class="gallery-card-text">Proud moments as our students receive their diplomas and celebrate their achievements.</p>
                        <div class="gallery-card-date">April 10, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 6 -->
                <div class="gallery-card" data-category="academics">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" alt="Library Session">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Library Reading Session</h5>
                        <p class="gallery-card-text">Students engaged in reading and learning in our well-equipped library facility.</p>
                        <div class="gallery-card-date">March 05, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 7 -->
                <div class="gallery-card" data-category="sports">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop" alt="Basketball Tournament">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Basketball Championship</h5>
                        <p class="gallery-card-text">Intense basketball matches between different houses showcasing teamwork and sportsmanship.</p>
                        <div class="gallery-card-date">February 14, 2024</div>
                    </div>
                </div>

                <!-- Gallery Card 8 -->
                <div class="gallery-card" data-category="cultural">
                    <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop" alt="Music Concert">
                    <div class="gallery-card-body">
                        <h5 class="gallery-card-title">Music Concert</h5>
                        <p class="gallery-card-text">Beautiful musical performances by our school orchestra and choir groups.</p>
                        <div class="gallery-card-date">November 22, 2023</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h5>Sri Kalyanathissa Vidyalaya</h5>
                    <p>Nurturing minds, building futures. We are committed to providing quality education and fostering the holistic development of our students.</p>
                </div>
                <div class="footer-section">
                    <h5>Quick Links</h5>
                    <p><a href="index.html">Home</a></p>
                    <p><a href="#about">About Us</a></p>
                    <p><a href="#academics">Academics</a></p>
                    <p><a href="gallery.html">Gallery</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
                <div class="footer-section">
                    <h5>Contact Info</h5>
                    <p><i class="fas fa-map-marker-alt me-2"></i>Batapola, Galle District, Sri Lanka</p>
                    <p><i class="fas fa-phone me-2"></i>+94 (0)91 xxx-xxxx</p>
                    <p><i class="fas fa-envelope me-2"></i>info@skv-school.lk</p>
                </div>
            </div>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Sri Kalyanathissa Vidyalaya. All rights reserved. | Designed with ❤️ for education</p>
            </div>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    navbarToggler.addEventListener("click", function () {
      const isOpen = navbarCollapse.classList.contains("show");
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      if (isOpen) {
        bsCollapse.hide();
      } else {
        bsCollapse.show();
      }
    });

    // Also close navbar if click outside
    document.addEventListener("click", function (event) {
      const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
      if (!isClickInside && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });

    // Close when link is clicked
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", function () {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  });
</script>
      <script>
        // Gallery Filter Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryCards = document.querySelectorAll('.gallery-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');

                    const filterValue = this.getAttribute('data-filter');

                    galleryCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.6s ease forwards';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Image Modal (Optional Enhancement)
            galleryCards.forEach(card => {
                card.addEventListener('click', function() {
                    const img = this.querySelector('img');
                    const title = this.querySelector('.gallery-card-title').textContent;
                    
                    // Create modal for full-size image view
                    const modal = document.createElement('div');
                    modal.className = 'modal fade';
                    modal.innerHTML = `
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content" style="background: white; border: 1px solid rgba(30, 58, 138, 0.1);">
                                <div class="modal-header border-0">
                                    <h5 class="modal-title" style="color: var(--primary-blue);">${title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <img src="${img.src}" class="img-fluid rounded" style="max-height: 70vh;">
                                </div>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(modal);
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                    
                    modal.addEventListener('hidden.bs.modal', function() {
                        document.body.removeChild(modal);
                    });
                });
            });
        });
    </script>
    <!-- Add before </body> -->

</body>
</html>

I've updated your gallery page with a professional color scheme that should match your main website. Here are the key changes I made:

## **Color Scheme Updates:**

1. **Primary Colors:**
   - Primary Blue: `#1e3a8a` (deep navy blue)
   - Secondary Blue: `#3b82f6` (bright blue)
   - Accent Blue: `#60a5fa` (light blue)

2. **Background:**
   - Changed from purple gradient to clean light gray gradient
   - Subtle blue dot pattern instead of white dots

3. **Navigation:**
   - Clean white background with subtle blue shadows
   - Blue text and icons
   - Blue hover effects

4. **Gallery Cards:**
   - White cards with blue borders
   - Blue titles and accents
   - Professional shadows and hover effects
   - Category badges with color coding

5. **Footer:**
   - Blue gradient background
   - White text for contrast

## **Additional Improvements:**

- **Category Badges:** Each gallery card now shows its category (Events, Sports, Academics, Cultural) with color-coded badges
- **Better Typography:** More professional font weights and colors
- **Enhanced Hover Effects:** Smooth animations and blue-themed interactions
- **Modal Windows:** Clean white modals instead of glass effect
- **School Branding:** Updated footer with proper school name and Sri Lankan context

The color scheme now uses professional blue tones typical of educational institutions, which should match better with your main website. The design maintains the modern glassmorphism feel while being more appropriate for a school website.

Would you like me to make any adjustments to specific colors or add any other features to match your main site even more closely?

Sources:
- [SriKalyanathissa College | Batapola](https://skv-sch.github.io/index.html)


#304ffe
#2962ff
#76ff03
#ffff00
#c6ff00
#ff3333
rgb
rgb(48, 79, 254)
rgb(41, 98, 255)
rgb(118, 255, 3)
rgb(255, 255, 0)
rgb(198, 255, 0)
rgb(255, 51, 51)
html
style="color:#304ffe;"
style="color:#2962ff;"
style="color:#76ff03;"
style="color:#ffff00;"
style="color:#c6ff00;"
style="color:#ff3333;"
css
.color-1 {color: #304ffe;}
.color-2 {color: #2962ff;}
.color-3 {color: #76ff03;}
.color-4 {color: #ffff00;}
.color-5 {color: #c6ff00;}
.color-6 {color: #ff3333;}
scss
$color-1: #304ffe;
$color-2: #2962ff;
$color-3: #76ff03;
$color-4: #ffff00;
$color-5: #c6ff00;
$color-6: #ff3333
ADFF2F/
FFD700/
00FF00
/DFFF00/