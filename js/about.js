// ABOUT PAGE SIMPLE ANIMATION FIX

const cards = document.querySelectorAll('.about-card, .mission-box');

function reveal() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';

        }

    });

}

// INITIAL STATE
cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = '0.6s ease';

});

// EVENTS
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
