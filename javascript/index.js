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

document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    // Make toggleDarkMode available globally
    window.toggleDarkMode = toggleDarkMode;

    // Create an Intersection Observer for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add or remove the visible class based on intersection
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Options
        threshold: 0.4 // Trigger when 40% of the element is visible
    });

    // Observe sections
    const donationSection = document.querySelector('.donation-number');
    const sideImage = document.querySelector('.what-we-do-side-image');
    const footer = document.querySelector('footer');

    if (donationSection) {
        observer.observe(donationSection);
    }
    if (sideImage) {
        observer.observe(sideImage);
    }

    // Handle footer visibility
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
            } else {
                footer.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.6
    });

    // Observe the what-we-do section to trigger footer
    const whatWeDoSection = document.querySelector('.what-we-do');
    if (whatWeDoSection) footerObserver.observe(whatWeDoSection);
});
