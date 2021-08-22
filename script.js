//Varriables
let city = "";
let searchedCity = [];
let currentDate = moment().format('MM/DD/YYYY');
const apiKey = "78e6fa2e20b4c1189daa386837eff4b5";
    
//  API Call is: 
// Api Key is: 78e6fa2e20b4c1189daa386837eff4b5


// function to get weather

function getWeather() {
        let weatherURL = "api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apiKey;
        fetch(weatherURL)
        .then(function(response){
        return response.json();
        })
        .then(function (data) {
            console.log(data)
    })
    
};


// Create container for weather to populate in
$("display-data").append($(",H2 id='forcast-header'>").text("Your 5 day Forcast"));
let containerEL =$("<div class='row cards' id='5-day>");




// Event listener
$("searchBtn").on("click, function(event){
    event.preventDefault();
}




// Reset button
resetBtn.addEventListener("click", function() {
    window.localStorage.clear();
    window.location.reload();
})
