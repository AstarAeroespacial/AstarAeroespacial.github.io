document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-btn');

    if (!showMoreBtn) return;

    showMoreBtn.addEventListener('click', () => {
        const hiddenCards = document.querySelectorAll('.hidden-media');

        for (let i = 0; i < Math.min(3, hiddenCards.length); i++) {
            hiddenCards[i].classList.remove('hidden-media');
        }

        if (document.querySelectorAll('.hidden-media').length === 0) {
            showMoreBtn.remove();
        }
    });
});