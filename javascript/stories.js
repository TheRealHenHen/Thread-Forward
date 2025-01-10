import { toggleDarkMode, initializeDarkMode } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    // Make toggleDarkMode available globally
    window.toggleDarkMode = toggleDarkMode;
});
