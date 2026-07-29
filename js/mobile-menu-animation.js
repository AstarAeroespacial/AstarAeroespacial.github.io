document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', e => {
            if (window.matchMedia('(min-width: 48em)').matches) return;

            const current = document.querySelector('.menu a.active');

            if (current && current !== link) {
                current.classList.remove('active');
                current.classList.add('fade-out');
            }

            e.preventDefault();

            const href = link.getAttribute('href');
            const menuCheckbox = document.getElementById('menu-btn');

            menuCheckbox.checked = true;

            link.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
});
