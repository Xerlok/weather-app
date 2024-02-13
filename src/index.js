import './styles.css';
import getWeather from './getWeather';

async function showWeather() {
  try {
    const weatherData = await getWeather();
    console.log(weatherData);
    console.log(`The weather in ${weatherData.location.name} is ${weatherData.forecast.forecastday[0].day.avgtemp_c} celcius`);
  } catch (error) {
    console.error('Failed to get weather data: ', error);
  }
}

showWeather();
