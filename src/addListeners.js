import cacheDom from './dom';
import showWeather from './showWeather';

export default function addListeners() {
  const dom = cacheDom();

  dom.locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = dom.locationInput.value;
    const temperatureUnit = dom.temperatureUnit.value;
    showWeather(userInput, temperatureUnit);
    dom.locationInput.value = '';
  });
}
