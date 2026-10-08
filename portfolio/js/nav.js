export function initNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Guard: if the elements don't exist, bail out cleanly
    if (!hamburger || !navLinks || !navbar) return;

    // --- Mobile menu toggle ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Navbar shadow on scroll + active link spy ---
    const sections = document.querySelectorAll('section[id]');
    const navItems = navLinks.querySelectorAll('a');

    const onScroll = () => {
        // Shadow
        navbar.classList.toggle('scrolled', window.scrollY > 10);

        // Active link
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.style.color = '';
            if (item.getAttribute('href') === `#${current}`) {
                item.style.color = 'var(--primary)';
            }
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
}