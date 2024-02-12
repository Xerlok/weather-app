import './styles.css';

async function getWeather() {
  const response = await fetch(
    'https://api.weatherapi.com/v1/forecast.json?key=29061576e8ad448eaef193306241202&q=Paris&days=3',
    { mode: 'cors' },
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather().catch((err) => { console.log(err); });
