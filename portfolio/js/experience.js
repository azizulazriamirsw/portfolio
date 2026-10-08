// js/experience.js
export function initExperience() {
    // --- Company-level accordion ---
    const companies = document.querySelectorAll('.company-group');

    companies.forEach(company => {
        const header = company.querySelector('.company-header');
        if (!header) return;

        header.addEventListener('click', () => {
            const isOpen = company.classList.contains('open');
            company.classList.toggle('open', !isOpen);
            header.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    // --- Role-level accordion (independent per company) ---
    const items = document.querySelectorAll('.experience-item');

    items.forEach(item => {
        const header = item.querySelector('.experience-header');
        if (!header) return;

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close siblings *within the same company* only (accordion within a group)
            const siblings = item.closest('.company-body-inner')
                                 ?.querySelectorAll('.experience-item') || [];

            siblings.forEach(other => {
                if (other !== item && other.classList.contains('open')) {
                    other.classList.remove('open');
                    other.querySelector('.experience-header')
                         ?.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle this one
            item.classList.toggle('open', !isOpen);
            header.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    // --- Open the first company by default ---
    if (companies.length > 0) {
        const first = companies[0];
        first.classList.add('open');
        first.querySelector('.company-header')
             ?.setAttribute('aria-expanded', 'true');
    }
}