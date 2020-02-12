var Chart = require('chart.js');
const ctx = document.getElementById("myChart")//.getContext("2d");


const graphic = (days, value) => {
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dias', 'valor'],
        datasets: [{
            label: 'money',
            data: [parseInt(days), parseInt(value)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
};

export default graphic