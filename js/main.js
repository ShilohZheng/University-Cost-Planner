// CHART.JS

const ctx = document.getElementById('expenseChart');

new Chart(ctx, {
    type: 'doughnut',

    data: {
        labels: [
            'Tuition',
            'Housing',
            'Food',
            'Transportation',
            'Books'
        ],

        datasets: [{
            label: 'Student Expenses',

            data: [8000, 12000, 4000, 1500, 2000],

            backgroundColor: [
                '#1e3a5f',
                '#4f7cac',
                '#7fb069',
                '#d9a441',
                '#c97b63'
            ],

            borderWidth: 1
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                position: 'bottom'
            }

        }

    }

});


// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll('.stat-card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 50) {

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }

    });

});


// INITIAL CARD STYLE

cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s';

});
