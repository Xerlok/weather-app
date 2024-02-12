import './styles.css';
import getWeather from './getWeather';

const weatherData = await getWeather().catch((err) => { console.log(err); });
console.log(weatherData);
console.log(`The weather in ${weatherData.location.name} is ${weatherData.forecast.forecastday[0].day.avgtemp_c} celcius`);
