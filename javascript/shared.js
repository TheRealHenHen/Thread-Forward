// Dark mode toggle functionality
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙';
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️';
    }
}

// Initialize dark mode
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙';
    }

    // Add transitions after initial load
    setTimeout(() => {
        document.body.classList.add('transitions-enabled');
    }, 100);
}

// Header scroll functionality
let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 500; // Minimum scroll difference to trigger header visibility change

function handleScroll() {
    const header = document.querySelector('header');
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);
    
    // Show/hide header based on scroll direction if threshold is met
    if (scrollDifference >= SCROLL_THRESHOLD) {
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

export { toggleDarkMode, initializeDarkMode };
