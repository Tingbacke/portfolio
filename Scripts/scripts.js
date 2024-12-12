
/* --- --- Menu and scroll behaviour --- --- */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu-panel ul li a');

    const updateActiveLink = () => {
        let index = sections.length;

        while (--index >= 0 && window.scrollY + 100 < sections[index].offsetTop) {}

        menuLinks.forEach((link) => link.parentElement.classList.remove('active'));
        if (index >= 0) {
            menuLinks[index].parentElement.classList.add('active');
        }
    };

    // Run on scroll and page load
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});


/* --- --- Emoji hover effect on cases. --- --- */
document.addEventListener('DOMContentLoaded', function () {
    const workHoverItems = [
        { className: 'work-item-smart-home', emoji: '💡' },
        { className: 'work-item-shower', emoji: '🚿' },
        { className: 'work-item-headset', emoji: '🎧' },
        { className: 'work-item-idem', emoji: '🔨' },
        { className: 'work-item-magneto', emoji: '🧲' },
        { className: 'work-item-keypad', emoji: '🔓' },
        { className: 'work-item-tacup', emoji: '🛹' },
    ];

    workHoverItems.forEach(({ className, emoji }) => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .${className}:hover {
                cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><text y="96" font-size="96">${emoji}</text></svg>') 64 64, auto;
            }
        `;
        document.head.appendChild(styleElement);
    });
});

/* --- --- Emojis --> SVGs --- --- */
document.addEventListener('DOMContentLoaded', function () {
    const aboutEmojis = [
        { className: 'about-music-emoji', emoji: '🎸' },
        { className: 'about-people-emoji', emoji: '🫶🏼' },
        { className: 'about-languages-emoji', emoji: 'ف' },
        { className: 'about-designing-emoji', emoji: '👨🏼‍🎨' },
        { className: 'about-research-emoji', emoji: '🧐' },
        { className: 'about-reading-emoji', emoji: '📚' },
        { className: 'about-tiffany-emoji', emoji: '💡' },
        { className: 'about-cycling-emoji', emoji: '🚴🏼‍♂️' },
        { className: 'about-coding-emoji', emoji: '👨🏼‍💻' },
        { className: 'about-prototyping-emoji', emoji: '👷🏽‍♀️' },
    ];

    aboutEmojis.forEach(({ className, emoji }) => {
        const container = document.querySelector(`.${className} .about-emoji`);
        if (container) {
            container.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128">
                    <text x="50%" y="50%" font-size="96" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
                </svg>
            `;
        }
    });
});


/* --- Contact-panel -> Footer on smartphones --- */
document.addEventListener('DOMContentLoaded', () => {
    const contactPanel = document.querySelector('.contact-panel');
    const footer = document.querySelector('.footer');
    const originalParent = contactPanel.parentElement;

    const moveContactPanel = () => {
        if (window.innerWidth <= 768) {
            if (!footer.contains(contactPanel)) {
                footer.prepend(contactPanel); // Move contact-panel into footer
            }
        } else {
            if (originalParent && !originalParent.contains(contactPanel)) {
                originalParent.appendChild(contactPanel); // Restore contact-panel
            }
        }
    };

    // Initial check
    moveContactPanel();

    // Re-check on window resize
    window.addEventListener('resize', moveContactPanel);
});











