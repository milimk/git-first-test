// Local Time

function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
}

let localTime = document.querySelector(".local-time");
let localDate = new Date();
localTime.innerHTML = formatDate(localDate);

// Search and Display Weather

function displayWeather(response) {
  console.log(response);

  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperatureDisplay = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperatureDisplay}`;

  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = response.data.city;
}

function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector(".search-input").value;

  let myApi = "0af4f7ebo6ce11605e35ecb7eatc1716";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${myApi}`;
  axios.get(apiUrl).then(displayWeather);
}
let cityInput = document.querySelector("#search-city-form");
cityInput.addEventListener("submit", searchCity);
