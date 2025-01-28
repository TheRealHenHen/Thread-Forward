import { toggleDarkMode, initializeDarkMode } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    // Make toggleDarkMode available globally
    window.toggleDarkMode = toggleDarkMode;

    // Only redirect if we're on intro.html
    if (window.location.pathname.endsWith('intro.html')) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000); // 3 seconds
    }
});
