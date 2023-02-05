var APIKey = '94f1fc415316d4290d1bcf565d7ea27a'; 
//var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +' &lon=' + long +'&appid=' + APIKey +'&units=imperial';
var geoCode = 'http://api.openweathermap.org/geo/1.0/direct?q='+ searchBox +'&limit=1&appid=' + APIKey +'';
var searchBox = document.getElementById('search');
var newCity = document.getElementById('city');
var searchBtn =document.getElementById('search-btn');
var city;

function getCoord() {
    searchBox = searchBox.value
    console.log(searchBox)
    fetch(geoCode)
.then((response) => response.json())
.then((data)=> console.log(data));
};

// fetch(queryURL)
// .then((response) => response.json())
// .then((data)=> console.log(data));

searchBtn.addEventListener('click', getCoord)

