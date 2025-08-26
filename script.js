document.addEventListener('DOMContentLoaded', function () {

    // --- Experience Tabs ---
    const tabs = document.querySelectorAll('.job-tab');
    const panels = document.querySelectorAll('.job-panel');
    const highlight = document.querySelector('.highlight');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Activate the clicked tab and corresponding panel
            tab.classList.add('active');
            const correspondingPanel = document.querySelector(`.job-panel[data-job="${index}"]`);
            if (correspondingPanel) {
                correspondingPanel.classList.add('active');
            }

            // Move the highlight
            if (window.innerWidth > 768) { // Desktop view (vertical slide)
                const tabHeight = tab.offsetHeight;
                highlight.style.transform = `translateY(${index * tabHeight}px)`;
                highlight.style.height = `${tabHeight}px`;
                highlight.style.width = '2px';
            } else { // Mobile view (horizontal slide)
                const tabWidth = tab.offsetWidth;
                const tabLeft = tab.offsetLeft;
                highlight.style.width = `${tabWidth}px`;
                highlight.style.transform = `translateX(${tabLeft}px)`;
                highlight.style.height = '2px';
            }
        });
    });


    // --- Scroll Reveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay: 200,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false
    });

    // --- Project Card Scroll Reset ---
    const projectCards = document.querySelectorAll('.project-card-new');

    projectCards.forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.scrollTop = 0;
        });
    });

    // Animate sections
    sr.reveal('section', { interval: 100 });

});

// --- Mobile Menu ---
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links li a');

hamburgerMenu.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});