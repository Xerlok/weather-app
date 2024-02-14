export default async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=29061576e8ad448eaef193306241202&q=${location}&days=3`,
      { mode: 'cors' },
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    return null;
  }
}
