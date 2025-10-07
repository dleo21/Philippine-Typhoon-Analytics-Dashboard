
document.addEventListener('DOMContentLoaded', () => {
  fetchCurrentTyphoonData();
  fetchHistoricalTyphoonData();
  setupChart();
});

function fetchCurrentTyphoonData() {
  // Placeholder example - replace with real API call or scraping method
  const currentTyphoon = {
    name: "Typhoon Velma",
    location: "Eastern Visayas",
    strength: "120 km/h"
  };
  document.getElementById('current-typhoon-name').textContent = currentTyphoon.name;
  document.getElementById('current-typhoon-location').textContent = `Location: ${currentTyphoon.location}`;
  document.getElementById('current-typhoon-strength').textContent = `Strength: ${currentTyphoon.strength}`;
}

function fetchHistoricalTyphoonData() {
  // Placeholder example - replace with real API call or scraping method
  const historicalData = [
    { name: 'Typhoon Rammasun', month: 'July', strength: '140 km/h' },
    { name: 'Typhoon Haiyan', month: 'November', strength: '235 km/h' }
  ];
  const list = document.getElementById('historical-typhoons');
  list.innerHTML = '';
  historicalData.forEach(typhoon => {
    const listItem = document.createElement('li');
    listItem.textContent = `${typhoon.name}: ${typhoon.month} - ${typhoon.strength}`;
    list.appendChild(listItem);
  });
}

function setupChart() {
  const ctx = document.getElementById('typhoonChart').getContext('2d');
  const typhoonChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Number of Typhoons',
        data: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        backgroundColor: 'rgba(0, 240, 255, 0.2)',
        borderColor: '#00f0ff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: '#fff'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#fff'
          }
        }]
      }
    }
  });
}