document.querySelectorAll('.nav-dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = link.closest('.nav-dropdown-menu');
        menu.style.opacity = '0';
        menu.style.pointerEvents = 'none';
        setTimeout(() => {
            menu.style.opacity = '';
            menu.style.pointerEvents = '';
        }, 300);
    });
});

document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            if (menu) menu.style.display = 'none';
        }
    });
});