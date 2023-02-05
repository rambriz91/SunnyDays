var APIKey = '94f1fc415316d4290d1bcf565d7ea27a';
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +' &lon=' + lon +'&appid=' + APIKey +'&units=imperial';
var geoCode = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchBox + '&limit=1&appid=' + APIKey + '';
var searchBox = document.getElementById('search');
var newCity = document.getElementById('city');
var searchBtn = document.getElementById('search-btn');
var city;
var lat;
var lon;


function getCoord() {
    geoCode = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchBox.value + '&limit=1&appid=' + APIKey + '';
    console.log(searchBox.value)
    fetch(geoCode)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lon = data[0].lon;
            console.log(lon)
            var lat = data[0].lat;
            console.log(lat)
            queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon +'&appid=' + APIKey +'&units=imperial';
            fetch(queryURL)
                .then(function(response) {
                    return response.json();
                })
                    .then(function (data) {
                        console.log(data)
                    })
        });
};

// fetch(queryURL)
// .then((response) => response.json())
// .then((data)=> console.log(data));

searchBtn.addEventListener('click', getCoord)

