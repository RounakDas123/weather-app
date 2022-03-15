let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementId("climate");

let iconfile;
const searchInput = document.getElementById("serach-input");
const searchButton = document.getElementById("search-button");

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={API key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];

          loc.textContent = name;
          climate.textContent = main;
          tempvalue.textContent = Math.round(feels_like - 273);
        });
    });
  }
});
