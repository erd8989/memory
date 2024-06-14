document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('rankChart').getContext('2d');

    const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'];

    const rankings = {
        'Team A': [1, 2, 2, 3, 1, 2, 1, 1, 1, 1],
        'Team B': [2, 1, 1, 1, 2, 1, 2, 2, 2, 2],
        'Team C': [3, 3, 3, 2, 3, 3, 3, 3, 3, 3],
        'Team D': [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        'Team E': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    };

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

    const datasets = teams.map((team, index) => ({
        label: team,
        data: rankings[team],
        borderColor: colors[index],
        fill: false,
        tension: 0.1
    }));

    const config = {
        type: 'line',
        data: {
            labels: weeks,
            datasets: datasets
        },
        options: {
            scales: {
                y: {
                    reverse: true,
                    title: {
                        display: true,
                        text: '순위'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '주차'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '2024 KBO 리그 팀 순위 변화'
                }
            }
        }
    };

    const rankChart = new Chart(ctx, config);
});
