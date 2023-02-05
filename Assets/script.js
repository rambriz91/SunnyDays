var APIKey = '94f1fc415316d4290d1bcf565d7ea27a';
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +' &lon=' + lon +'&appid=' + APIKey +'&units=imperial';
var geoCode = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchBox + '&limit=1&appid=' + APIKey + '';
var searchBox = document.getElementById('search');
var newCity = document.getElementById('city');
var searchBtn = document.getElementById('search-btn');
var city;
var lat;
var lon;

//Main Function: 
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
                        newCity.textContent = data.city.name;

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('temp-'+i+'').textContent ='Temp: ' +Number(data.list[i].main.temp).toFixed(0)+'°';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('wind-'+i+'').textContent ='Wind: ' +Number(data.list[i].wind.speed).toFixed(0)+' mph';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('hum-'+i+'').textContent ='Humidity: ' +Number(data.list[i].main.humidity)+'%';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('icon-'+i+'').src ='http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon+'.png';
                        }
                    })
        });
};
var d =new Date();
var weekday =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// displays days of the week on the forecast.
function displayDay(day) {
    if (day +d.getDay() > 6) {
        return day +d.getDay() -7;
    }
    else {
        return day +d.getDay();
    }
}

for (i=0; i < 6; i++) {
    document.getElementById('day-'+i+'').textContent = weekday[displayDay(i)];
}
//Event Listeners
searchBtn.addEventListener('click', getCoord)

//Logs weather forecast based on current location
window.addEventListener('load', () => {
    var lat;
    var lon;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon=' + lon +'&appid=' + APIKey +'&units=imperial';

            fetch(queryURL)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    newCity.textContent = data.city.name;

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('temp-'+i+'').textContent ='Temp: ' +Number(data.list[i].main.temp).toFixed(0)+'°';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('wind-'+i+'').textContent ='Wind: ' +Number(data.list[i].wind.speed).toFixed(0)+' mph';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('hum-'+i+'').textContent ='Humidity: ' +Number(data.list[i].main.humidity)+'%';
                        }

                        for (var i = 0; i < 6; i++) {
                            document.getElementById('icon-'+i+'').src ='http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon+'.png';
                        }
                })
        });
    }
})