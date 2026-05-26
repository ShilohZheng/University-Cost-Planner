// SAVINGS CALCULATOR

function calculateSavings() {

    // INPUT VALUES

    const goal =
        Number(document.getElementById('goal').value) || 0;

    const current =
        Number(document.getElementById('current').value) || 0;

    const months =
        Number(document.getElementById('months').value) || 1;

    // CALCULATIONS

    const remaining =
        goal - current;

    const monthly =
        remaining / months;

    const progress =
        (current / goal) * 100;

    // DISPLAY RESULTS

    document.getElementById('remainingAmount').innerText =
        '$' + remaining.toLocaleString();

    document.getElementById('monthlySavings').innerText =
        '$' + monthly.toFixed(0).toLocaleString();

    document.getElementById('progressPercent').innerText =
        progress.toFixed(1) + '%';

    // PROGRESS BAR

    document.getElementById('progressFill').style.width =
        progress + '%';

}


// ANIMATIONS

const cards = document.querySelectorAll(
    '.result-card, .tip-card'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

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

cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(40px)';

    card.style.transition =
        '0.6s ease';

});
