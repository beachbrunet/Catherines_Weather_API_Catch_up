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

// Calls API --- gets 5 day forcast then shows it
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
  $("main").append($("<H2 id='forcast-header'>").text("Your 5 day Forcast"));
  let containerEL = $("<div class='rows' id='5-day'>");
}

// Calls API -- gets current weather
function getCurrentWeather(city) {
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
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
  $("main").append(
    $("<H2 id='forcast-header'>").text(
      "Your Current Weather, or look out your window"
    )
  );
  let containerEL = $("<div class='rows'>");
}

// Event listener --to show stored search history
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var cityName = $("#inputCity").val();
  getCurrentWeather(cityName);
});

function display() {}

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
  console.info(cityWeatherData);
  let currentDate = moment().format("MM/DD/YYYY");
  let dataEL = $("<div class='jumbotron' id='jumbotron'>");
  dataEL.append(
    $("<h1 class='header'>").text(cityWatherData + " " + currentDate)
  );
  dataEL.append($("<p>").text("Temperature" + cityWeatherData.current.temp));
  dataEL.append($("<p>").text("Humidity" + cityWeatherData.current.humidity));
  dataEL.append(
    $("<p>").text("Wind Speed" + cityWeatherData.current.wind_speed)
  );
  dataEL.append($("<p>").text("UV index" + cityWeatherData.current.uvi));
}

// Reset button - Works
$("#reset").on("click", function () {
  window.localStorage.clear();
  window.location.reload();
});
