//Varriables
let city = "";
let searchedCity = [];
const API_KEY = "78e6fa2e20b4c1189daa386837eff4b5";
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY;
    
//  API Call is: let weatherURL = "api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apiKey;
// Api Key is: 78e6fa2e20b4c1189daa386837eff4b5
console.log("sec"+searchedCity);
localStorage.setItem("storedCities", JSON.stringify(searchedCity));


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY,
    method: "GET"
}).then(function(data){
    if (data.ok) {
              return data.json();
            } else {
              throw new Error("NETWORK RESPONSE NOT OK");
            }
          })
          .then(function (data) {   
            console.log(data); 
            displayWeather(data);
          })
          .catch((error) => {
            console.error("FETCH ERROR:", error);
          });













// Create container for weather to populate in
$("display-data").append($(",H2 id='forcast-header'>").text("Your 5 day Forcast"));
let containerEL =$("<div class='row cards' id='5-day>");


// Event listener
$("searchBtn").on("click", function(event){
    event.preventDefault();
    });


//     // requirements THEN I am presented with the city name, the date, an icon representation of weather conditions,
//     // the temperature, the humidity, the wind speed, and the UV index
    let cityWeatherData = response;
    let currentDate = moment().format('MM/DD/YYYY');
    let dataEL = $("<div class='jumbotron' id='jumbotron'>");
    dataEL.append($("<h1 class='header>").text(cityWatherData + " "+currentDate));
    dataEL.append($("<p>").text("Tempurature" +cityWatherData.current.temp));
    dataEL.append($("<p>").text("Humidity" +cityWatherData.current.humidity));
    dataEL.append($("<p>").text("Wind Speed" +cityWatherData.current.wind_speed));
    dataEL.append($("<p>").text("UV index" +cityWatherData.current.uvi));




// // Reset button
resetBtn.addEventListener("click", function() {
    window.localStorage.clear();
    window.location.reload();
})
