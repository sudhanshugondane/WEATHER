var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

var sun_icon = document.querySelector("#sun_icon");
var humid_icon = document.querySelector("#humid_icon");
var wind_icon = document.querySelector("#wind_icon");

apik = "63a90ae96d390ec37d6c1252f5a86e1a";
function getIconLink(iconVal) {
  path = `https://openweathermap.org/img/wn/${iconVal}@2x.png`;
  return path;
}
function convertion(val) {
  console.log(val);
  return (parseFloat(val) - 273.15).toFixed(1);
}
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var nameval = data["name"];
      var temperature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];
      var humidPer = data["main"]["humidity"];
      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(temperature)}C</span>`;
      wind.innerHTML = `Wind speed: <span>${wndspeed} km/h<span>`;
      humidity.innerHTML = `Humidity: <span>${humidPer}%</span>`;
      humid_icon.src = getIconLink(data.weather[0].icon);
      sun_icon.src = getIconLink(data.weather[0].icon);
      wind_icon.src = getIconLink(data.weather[0].icon);
    })

    .catch((err) => alert("You Entered wrong city name"));
});
