export function showCurrentData(weatherData) {
    const location = document.querySelector('.location');
    location.textContent = weatherData.location.name;

    const condition = document.querySelector('.condition');
    condition.textContent = weatherData.current.condition.text;

    const temperature = document.querySelector('.temperature');
    temperature.textContent = weatherData.current.temp_c + '°';

    const humidity = document.querySelector('.humidity');
    humidity.textContent = 'Humidity: ' + weatherData.current.humidity + '%';

    const wind = document.querySelector('.wind');
    wind.textContent = 'Wind: ' + weatherData.current.wind_kph + ' kph';

    const throughDay = document.querySelector('.through-day-temp');
    throughDay.replaceChildren();
    for (let i = 0; i < 24; i++) {
        throughDay.innerHTML += `<div class='hourly-temp'>
        <div>${weatherData.forecast.forecastday[0].hour[i].time.substr(11, 5)}</div>
        <div>${weatherData.forecast.forecastday[0].hour[i].chance_of_rain}%</div>
        <div><img src='${weatherData.forecast.forecastday[0].hour[i].condition.icon}'></div>
        <div class='temperatureHour'>${weatherData.forecast.forecastday[0].hour[i].temp_c}°</div>
        </div>`
    }

    // change temperature parameter on click
    let showCel = true;
    const changeCF = document.querySelector('.change-cel-fah');
    const temperatureHour = document.querySelectorAll('.temperatureHour');
    changeCF.addEventListener('click', () => {
        if (showCel) {
            temperature.textContent = weatherData.current.temp_f + '°';
            for (let i = 0; i < 24; i++) {
                temperatureHour[i].textContent = weatherData.forecast.forecastday[0].hour[i].temp_f + '°';
            }
            showCel = false;
        } else {
            temperature.textContent = weatherData.current.temp_c + '°';
            for (let i = 0; i < 24; i++) {
                temperatureHour[i].textContent = weatherData.forecast.forecastday[0].hour[i].temp_c + '°';
            }
            showCel = true;
        }

    })

}