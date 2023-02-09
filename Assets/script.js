var APIKey = '94f1fc415316d4290d1bcf565d7ea27a';
var searchBox = document.getElementById('search');
var newCity = document.getElementById('city');
var searchBtn = document.getElementById('search-btn');
var searchHistory = [];
var btnHolder = document.getElementById('btn-holder');
var cityName;

//Main Function: 
load()
function getCoord() {
    if(!cityName) {
        geoCode = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchBox.value + '&limit=1&appid=' + APIKey + '';
        var dynBtn = document.createElement('button');
        dynBtn.classList.add('dyn-btn')
        dynBtn.textContent = searchBox.value
        btnHolder.append(dynBtn);
        handleHistory(searchBox.value)
    }else {
            geoCode = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + APIKey + '';
            handleHistory(cityName)
        }
    cityName = ''
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
            queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIKey + '&units=imperial';
            fetch(queryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    newCity.textContent = data.city.name;
                    console.log(newCity)
                    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape?" + newCity + "')"

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('temp-' + i + '').textContent = 'Temp: ' + Number(data.list[i].main.temp).toFixed(0) + '°';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('wind-' + i + '').textContent = 'Wind: ' + Number(data.list[i].wind.speed).toFixed(0) + ' mph';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('hum-' + i + '').textContent = 'Humidity: ' + Number(data.list[i].main.humidity) + '%';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('icon-' + i + '').src = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png';
                    }

                })
        });
    // handleHistory()
};
//Displays days of the week on the forecast

var weekday = [
    moment().format('dddd'),
    moment().add(1, 'd').format('dddd'),
    moment().add(2, 'd').format('dddd'),
    moment().add(3, 'd').format('dddd'),
    moment().add(4, 'd').format('dddd'),
    moment().add(5, 'd').format('dddd'),
    moment().add(6, 'd').format('dddd'),
]

for (i = 0; i < 6; i++) {
    document.getElementById('day-' + i + '').textContent = weekday[i];
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
            queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIKey + '&units=imperial';

            fetch(queryURL)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    newCity.textContent = data.city.name;

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('temp-' + i + '').textContent = 'Temp: ' + Number(data.list[i].main.temp).toFixed(0) + '°';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('wind-' + i + '').textContent = 'Wind: ' + Number(data.list[i].wind.speed).toFixed(0) + ' mph';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('hum-' + i + '').textContent = 'Humidity: ' + Number(data.list[i].main.humidity) + '%';
                    }

                    for (var i = 0; i < 6; i++) {
                        document.getElementById('icon-' + i + '').src = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png';
                    }
                })
        });
    }
})

// Sets user search into local storage.
function handleHistory(event) {
    if (!searchBox.value) {
        return;
    };    
    searchHistory.push(event);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

};

function load() {
    var loadHistory = localStorage.getItem('searchHistory')
    if (loadHistory == null) {
        return;
    };

var cityButtonArr = JSON.parse(loadHistory)
console.log(cityButtonArr)
for (var i = 0; i < cityButtonArr.length; i++) {
    var dynBtn = document.createElement('button');
    dynBtn.classList.add('dyn-btn')
    dynBtn.textContent = cityButtonArr[i]
    btnHolder.append(dynBtn);
}
};

btnHolder.addEventListener('click', (event)=> {
    cityName = event.target.textContent;
    getCoord()
}) 

