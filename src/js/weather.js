// https://openweathermap.org/current
import createWeatherCard from '../templates/weather-card.hbs';
import { fetchWeatherByCityName } from './weather-api';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${new String(date.getHours()).padStart(2, '0')}:${new String(
    date.getMinutes()
  ).padStart(2, '0')}`;
};

const onWeatherFormSubmit = event => {
  event.preventDefault();

  const { target: weatherFormEl } = event;

  const cityName = weatherFormEl.elements.user_country.value;

  fetchWeatherByCityName(cityName)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.main.temp = Math.round(data.main.temp);
      data.main.feels_like = Math.round(data.main.feels_like);

      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Такого міста не знайдено!');

        weatherFormEl.reset();
        weatherWrapperEl.innerHTML = '';
      }
    });
};

weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
