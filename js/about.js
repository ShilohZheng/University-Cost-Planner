// ABOUT PAGE ANIMATION

const cards = document.querySelectorAll('.about-card, .mission-box');

// INITIAL STATE
cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform = 'translateY(40px)';

    card.style.transition = '0.6s ease';

});

// SCROLL ANIMATION
window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 80) {

            card.style.opacity = '1';

            card.style.transform = 'translateY(0)';

        }

    });

});

// RUN ON LOAD (so first section shows immediately)
window.addEventListener('load', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight) {

            card.style.opacity = '1';

            card.style.transform = 'translateY(0)';

        }

    });

});
