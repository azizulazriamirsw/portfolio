import { initNav } from './nav.js';
import { initExperience } from './experience.js';
import { initAnimations } from './animations.js';

// Initialize everything once the DOM is ready.
// (Modules are deferred, so DOMContentLoaded is safe either way.)
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initExperience();
    initAnimations();
});