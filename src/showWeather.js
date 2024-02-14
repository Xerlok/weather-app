import getWeather from './getWeather';
import cacheDom from './dom';

export default async function showWeather(location, temperatureUnit) {
  try {
    const dom = cacheDom();
    const weatherData = await getWeather(location);
    console.log(weatherData);
    console.log(`The weather in ${weatherData.location.name} is ${weatherData.forecast.forecastday[0].day.avgtemp_c} celcius`);
    dom.locationText.innerText = weatherData.location.name;
    dom.temperatureText.innerText = `${weatherData.forecast.forecastday[0].day.avgtemp_c}${temperatureUnit}`;
  } catch (error) {
    console.error('Failed to show weather data: ', error);
  }
}
