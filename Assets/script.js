var APIKey = '94f1fc415316d4290d1bcf565d7ea27a'; 
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=94f1fc415316d4290d1bcf565d7ea27a'

var city;

fetch(queryURL)
.then((response) => response.json())
.then((data)=> console.log(data));