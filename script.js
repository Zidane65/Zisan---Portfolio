document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE MENU TOGGLE ---
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            // The 'hidden' class is a utility from Tailwind CSS
            menu.classList.toggle('hidden'); 
        });
    }

    // --- FADE-IN ON SCROLL ---
    // This function handles the fade-in for all pages
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-section');
    
    if (fadeInElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- PARALLAX BACKGROUND ---
    // This effect is added for complexity and visual appeal
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            parallaxBg.style.backgroundPositionY = offset * 0.7 + 'px';
        });
    }
});