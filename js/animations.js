// js/animations.js
export function initAnimations() {
    const targets = document.querySelectorAll('section > .container');
    if (!targets.length) return;

    // If IntersectionObserver isn't supported, just show everything
    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    targets.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}