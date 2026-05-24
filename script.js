let city = document.querySelector("#cityInput");
let searchButton = document.querySelector("#searchButton");
let cityName = document.querySelector("#cityName");
let temperature = document.querySelector("#temperature");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#Humidity");
let windSpeed = document.querySelector("#windSpeed");
let weatherCondition = document.querySelector("#WeatherCondition");
let data;
 let commands = document.querySelector("#commands");
 let card = document.querySelector(".card");
 let weatherIcon = document.querySelector("#weatherIcon");
searchButton.addEventListener("click", fetchWeather);
async function  fetchWeather() {
    let cityValue = city.value;
    let response = await fetch();
     data = await response.json();
    try {
        if (response.status>=200 && response.status<300) {
            updateUI(data);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        commands.innerText=error.message;
         commands.hidden=false;
         card.hidden=true;
    }   
}

function updateUI(data) {
    console.log(data);
    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    }
        else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain3.png";
        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "snow.png";
        }
         else if (data.weather[0].main === "Thunderstorm") {
            weatherIcon.src = "thunderstorm3.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Haze") {
            weatherIcon.src = "mist.png";
        }
         else {
            weatherIcon.src = "default.png";
        }
    commands.hidden = true;
    card.hidden = false;
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherCondition.textContent = `Weather Condition: ${data.weather[0].main}`;
}