// COMPARISON PAGE ANIMATIONS

const infoCards = document.querySelectorAll('.info-card');

window.addEventListener('scroll', () => {

    infoCards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 50) {

            card.style.opacity = '1';

            card.style.transform =
                'translateY(0)';

        }

    });

});


// INITIAL STYLES

infoCards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(40px)';

    card.style.transition =
        '0.6s ease';

});


// TABLE ROW HOVER EFFECT

const rows = document.querySelectorAll('tbody tr');

rows.forEach(row => {

    row.addEventListener('mouseenter', () => {

        row.style.transition = '0.3s';

    });

});
