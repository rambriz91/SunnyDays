# 06 Server-Side APIs: Weather Dashboard

## Description

This assignment required me to fetch server-side APIs to fetch city coordinate and weather data to display the weather forecast of my chosen city. The assignment also required that I store the user's search history in local data which then generates a button on the pages next visit. The user's searches are also stored in dynamically created buttons that they can then click on to view that forecast. 

## Tasks 

- Used GeoCode API to grab coordinates based on the city that the user input.
- Used OpenWeather API to display a five day forecast based on the coordinates grabbed by the GeoCode API
- created a function to store user inputs into the local storage, local storage inputs are then recovered and used to create dynamic buttons with previous user input data
- created an event listener that prompts user for their location and displays their local weather.
- used unsplash to display dynamic backgrounds.

## Usage

![Alt text](Assets/WeatherApp%20screenshot.png)

## Links
Deployed Webpage: https://rambriz91.github.io/SunnyDays/
GitHub Repo Page: https://github.com/rambriz91/SunnyDays

## Credits

- https://openweathermap.org/forecast5
- https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
- https://stackoverflow.com/questions/22150006/align-two-divs-horizontally-side-by-side-center-to-the-page-using-bootstrap-css
- https://www.google.com/search?q=how+to+place+div+side+by+side+in+bootstrap&rlz=1C1VDKB_enUS1034US1035&oq=how+to+display+divs+side+by+&aqs=chrome.3.0i512j69i57j0i22i30l2j0i10i22i30j0i22i30l5.11231j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:f016b12a,vid:mbhCwnr5Btc
- https://nordicapis.com/how-to-build-an-api-driven-weather-app/#:~:text=First%2C%20go%20to%20OpenWeatherApp%20and,section%20and%20select%20'Subscribe'
- https://stackoverflow.com/questions/59740779/dynamically-creating-buttons-from-localstorage-array

## License

MIT License

Copyright (c) [2023] [Robert Ambriz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.