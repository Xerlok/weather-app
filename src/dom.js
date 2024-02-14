export default function cacheDom() {
  const locationForm = document.querySelector('.location-input');
  const locationInput = document.querySelector('#location');
  const locationText = document.querySelector('.location');
  const temperatureText = document.querySelector('.temperature');
  const temperatureUnit = document.querySelector('#temperature-unit');

  return {
    locationForm,
    locationInput,
    locationText,
    temperatureText,
    temperatureUnit,
  };
}
