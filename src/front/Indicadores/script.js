function changeData(period, chartType) {
    const charts = {
        usuarios: usuariosChart,
        obras: obrasChart,
        feedbacks: feedbacksChart
    };

    const dataMensal = {
        usuarios: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        obras: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
        feedbacks: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
    };

    const dataSemanal = {
        usuarios: [5, 10, 15, 20],
        obras: [2, 4, 6, 8],
        feedbacks: [1, 2, 3, 4]
    };

    const data = period === 'mensal' ? dataMensal[chartType] : dataSemanal[chartType];

    const chart = charts[chartType];
    if (chart) {
        chart.data.datasets[0].data = data;
        chart.data.labels = period === 'mensal'
            ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            : ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
        chart.update();
    }

    const buttons = document.querySelectorAll(`.chart-container:nth-child(${getChartIndex(chartType)}) .data-button`);
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.textContent.includes(period.toUpperCase()));
    if (activeButton) activeButton.classList.add('active');
}

function getChartIndex(chartType) {
    switch (chartType) {
        case 'usuarios': return 1;
        case 'obras': return 2;
        case 'feedbacks': return 3;
        default: return 1;
    }
}

let usuariosChart, obrasChart, feedbacksChart;

function initCharts() {
    usuariosChart = new Chart(document.getElementById('usuariosChart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Crescimento de Usuários',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    obrasChart = new Chart(document.getElementById('obrasChart'), {
        type: 'doughnut',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Obras Cadastradas',
                data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E91E63', '#3F51B5', '#009688', '#FFC107', '#8BC34A', '#9C27B0'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    feedbacksChart = new Chart(document.getElementById('feedbacksChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Feedbacks Recebidos',
                data: [2, 4, 3, 8, 10, 5, 14, 8, 18, 10, 22, 12],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initCharts);
