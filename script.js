// requirements THEN I am presented with the city name, the date, an icon representation of weather conditions,
// the temperature, the humidity, the wind speed, and the UV index

//Varriables
let city = "";
let searchedCity = [];
const API_KEY = "78e6fa2e20b4c1189daa386837eff4b5";
const queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  API_KEY;

//  API Call is: let weatherURL = "api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apiKey;
// Api Key is: 78e6fa2e20b4c1189daa386837eff4b5
// console.log("cities" + searchedCity);
// localStorage.setItem("storedCities", JSON.stringify(searchedCity));

// Calls API --- gets 5 day forcast
function getForecast(data) {
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?cnt=5&lon=" +
      data.coord.lon +
      "&lat=" +
      data.coord.lat +
      "&units=imperial&exclude=minutely,hourly&appid=" +
      API_KEY,
    method: "GET",
  }).then(showForecast);
}

// Displays API Data -- shows 5 day forecast
function showForecast(data) {
  console.log(data);
  $("main").append($("<H2 id='forcast-header'>").text("Your 5 day Forcast"));
  for (day of data.list) {
    forcastDay(day);
  }
}
// Displays API Data -- shows CURRENT day forecast
function forcastDay(data) {
  let dataEl = $("main");
  dataEl.append($("<h1 class='header'>").text(data.dt_txt));
  dataEl.append($("<p>").text("Temperature " + data.main.temp));
  dataEl.append($("<p>").text("Humidity " + data.main.humidity));
  dataEl.append($("<p>").text("Wind Speed " + data.wind.speed));
}

// Calls API -- gets current weather
function getCurrentWeather(city) {
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      API_KEY,
    method: "GET",
  })
    .then(function (data) {
      // console.log(data);
      if (data.cod == 200) {
        return data;
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
      console.log(data);
      showWeather(data);
    })
    .catch((error) => {
      console.error("FETCH ERROR:", error);
    });
}

// Displays API Data -- shows CURRENT day forecast
function showWeather(data) {
  getForecast(data);
  let dataEl = $("main");
  dataEl.append(
    $("<H2 id='forcast-header'>").text(
      "Your Current Weather, or look out your window"
    )
  );
  let currentDate = moment().format("MM/DD/YYYY");
  dataEl.append($("<h1 class='header'>").text(currentDate));
  dataEl.append($("<p>").text("Temperature " + data.main.temp));
  dataEl.append($("<p>").text("Humidity " + data.main.humidity));
  dataEl.append($("<p>").text("Wind Speed " + data.wind.speed));
}

// Event listener --to show stored search history
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  $("main").html("");
  var cityName = $("#inputCity").val();
  getCurrentWeather(cityName);
});

// Calls API -- gets UV data
// function getUVData () {
//   $.ajax({
//     method: "GET",
//     url: `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`,
//     dataType: "json",
//   }).then(function (response) {
//   const uv = response.value.toFixed(0);
//   // console.log(uv);
//   $("#uv").html(
//     "UV Index: " +
//       '<span class="badge badge-light text-white" id="uvColor">' +
//       uv +
//       "</span>"
//   );
// }

// Create container for weather to populate in

function showWeatherData(cityWeatherData) {
  //   dataEL.append($("<p>").text("UV index" + cityWeatherData.current.uvi));
}

// Reset button - Works
$("#reset").on("click", function () {
  window.localStorage.clear();
  window.location.reload();
});
