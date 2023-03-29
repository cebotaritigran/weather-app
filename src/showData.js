export function showCurrentData(weatherData) {
    const location = document.querySelector('.location');
    location.textContent = weatherData.location.name;

    const condition = document.querySelector('.condition');
    condition.textContent = weatherData.current.condition.text;

    const temperature = document.querySelector('.temperature');
    temperature.textContent = weatherData.current.temp_c + '°';

    const humidity = document.querySelector('.humidity');
    humidity.textContent = weatherData.current.humidity + '%';

    const wind = document.querySelector('.wind');
    wind.textContent = weatherData.current.wind_kph + ' kph';

    const throughDay = document.querySelector('.through-day-temp');
    throughDay.replaceChildren();
    for (let i = 0; i < 24; i++) {
        throughDay.innerHTML += `<div class='hourly-temp'>
        <div>${weatherData.forecast.forecastday[0].hour[i].time.substr(11, 5)}</div>
        <div>${weatherData.forecast.forecastday[0].hour[i].chance_of_rain}%</div>
        <div>${weatherData.forecast.forecastday[0].hour[i].condition.text}°</div>
        <div>${weatherData.forecast.forecastday[0].hour[i].temp_c}°</div>
        </div>`
    }
}