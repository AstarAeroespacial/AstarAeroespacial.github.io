const track = document.querySelector('.carousel-track');
const originalCards = Array.from(document.querySelectorAll('.event-card'));

function getVisibleCount() {
    return window.innerWidth <= 640 ? 1 : 3;
}

function getCardWidth() {
    const gap = parseFloat(getComputedStyle(track).gap);
    return originalCards[0].offsetWidth + gap;
}

originalCards.forEach(card => {
    track.appendChild(card.cloneNode(true));
    track.prepend(card.cloneNode(true));
});

const allCards = Array.from(track.querySelectorAll('.event-card'));
const total = originalCards.length;

let page = total;

function setPosition(animate) {
    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(-${page * getCardWidth()}px)`;
}

requestAnimationFrame(() => setPosition(false));

document.querySelector('.next').addEventListener('click', () => {
    page++;
    setPosition(true);
});

document.querySelector('.prev').addEventListener('click', () => {
    page--;
    setPosition(true);
});

track.addEventListener('transitionend', () => {
    if (page >= total * 2) {
        page = total;
        setPosition(false);
    }
    if (page < total) {
        page = total * 2 - 1;
        setPosition(false);
    }
});

window.addEventListener('resize', () => {
    page = total;
    setPosition(false);
});