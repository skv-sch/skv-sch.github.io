document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.footer a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    const footerElements = document.querySelectorAll('.footer-section');
    footerElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    const schoolLogo = document.querySelector('.school-logo');
    if (schoolLogo) {
        schoolLogo.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.05) rotate(5deg)';
        });
        schoolLogo.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    }
});