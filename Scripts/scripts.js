
// --- Menu section highlights when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.menu-panel ul li');

    // IntersectionObserver for dynamic menu highlighting
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuItems.forEach((item) => item.classList.remove('active'));
                    const activeItem = document.querySelector(`.menu-panel ul li a[href="#${entry.target.id}"]`).parentNode;
                    activeItem.classList.add('active');
                }
            });
        },
        { threshold: 0.3, rootMargin: '-100px 0px 0px 0px' } // Adjust threshold and offset.
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling for menu links
    document.querySelectorAll('.menu-panel ul li a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});


// --- Emoji hover effect on cases.
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

// Emojis --> SVGs
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










