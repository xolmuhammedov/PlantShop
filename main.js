// Update main.js
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Only create menu toggle if it doesn't exist
    if (!nav.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '☰';
        nav.prepend(menuToggle);
    }

    const menuToggle = nav.querySelector('.menu-toggle');
    const menuList = nav.querySelector('ul');

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            menuList.classList.remove('show');
        }
    });

    // Toggle menu
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuList.classList.toggle('show');
    });
});