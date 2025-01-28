import { toggleDarkMode, initializeDarkMode } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    // Make toggleDarkMode available globally
    window.toggleDarkMode = toggleDarkMode;

    const modal = document.getElementById('imageModal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const backgroundImage = item.style.backgroundImage.slice(5, -2);
            const title = item.querySelector('h2').textContent;
            const description = item.querySelector('p').textContent;

            modalImage.style.backgroundImage = `url(${backgroundImage})`;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
                modal.querySelector('.modal-content').classList.add('show');
            }, 10); // Slight delay to trigger CSS transition
        });
    });

    // Close when clicking outside the modal image
    modal.addEventListener('click', (event) => {
        // Check if the click was on the modal background or modal content, but not on the modal image
        if (!event.target.closest('.modal-image')) {
            closeModal();
        }
    });

    // Close on escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        modal.querySelector('.modal-content').classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match the transition duration
    }
});
