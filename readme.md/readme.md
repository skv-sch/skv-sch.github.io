
---

🎓 Font Awesome Icon List for School Website

🧭 Navbar Icon Suggestions

Section	Icon Class	Description

Home	fa-solid fa-house	Link to homepage
About Us	fa-solid fa-circle-info	About the school
Admissions	fa-solid fa-user-plus	Admission details
Academics	fa-solid fa-book-open	Academic programs
Announcements	fa-solid fa-bullhorn	News or important notices
Events	fa-solid fa-calendar-days	Calendar of events
Gallery	fa-solid fa-image	School photo/video gallery
Contact	fa-solid fa-phone	Contact page
Login / Portal	fa-solid fa-right-to-bracket	Login/portal access



---

📎 Footer Icon Suggestions

Section	Icon Class	Description

Location	fa-solid fa-location-dot	School address
Phone Number	fa-solid fa-phone	Contact number
Email	fa-solid fa-envelope	School email
Facebook	fa-brands fa-facebook	Link to Facebook page
Instagram	fa-brands fa-instagram	Link to Instagram profile
YouTube	fa-brands fa-youtube	YouTube channel link
Privacy Policy	fa-solid fa-shield-halved	Privacy/Terms & Conditions
Developer Credit	fa-solid fa-code	Designed and developed by...
Scroll to Top	fa-solid fa-arrow-up	Button to scroll to top



---

✅ Usage Example

Include Font Awesome in your HTML:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

Example usage in HTML:

<a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
<a href="#contact"><i class="fa-solid fa-phone"></i> Contact</a>


---

---

🎨 How to Change Font Awesome Icon Colors

✅ Method 1: Inline CSS (Quick method)

<i class="fa-solid fa-house" style="color: #28a745;"></i> Home

> Replace #28a745 with your desired color (hex, rgb, or name).




---

✅ Method 2: CSS Classes (Best practice)

Create custom CSS classes:

/* In your style.css */
.icon-green {
  color: #28a745;
}
.icon-yellow {
  color: #ffc107;
}
.icon-white {
  color: #ffffff;
}

Use in HTML like:

<i class="fa-solid fa-house icon-green"></i> Home
<i class="fa-solid fa-envelope icon-yellow"></i> Email
<i class="fa-brands fa-facebook icon-white"></i> Facebook


---

🎓 Example for Navbar

<nav>
  <a href="index.html"><i class="fa-solid fa-house icon-green"></i> Home</a>
  <a href="about.html"><i class="fa-solid fa-circle-info icon-yellow"></i> About</a>
  <a href="contact.html"><i class="fa-solid fa-phone icon-white"></i> Contact</a>
</nav>


---

📎 Example for Footer

<footer>
  <a href="#"><i class="fa-brands fa-facebook icon-white"></i></a>
  <a href="#"><i class="fa-brands fa-instagram icon-yellow"></i></a>
  <a href="#"><i class="fa-solid fa-envelope icon-green"></i></a>
</footer>


---

