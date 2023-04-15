export function showCurrentData(weatherData, astronomyData) {
    //current day section
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
            const feelsLike = document.querySelector('.feels-like');
            feelsLike.textContent = weatherData.current.feelslike_f + '°';
            for (let hour = 0; hour < 24; hour++) {
                temperatureHour[hour].textContent = weatherData.forecast.forecastday[0].hour[hour].temp_f + '°';
            }
            const weekTemperature = document.querySelectorAll('.week-temperature')
            for (let day = 0; day < 3; day++) {
                weekTemperature[day].textContent = weatherData.forecast.forecastday[day].day.avgtemp_f + '°';
            }
            showCel = false;
        } else {
            temperature.textContent = weatherData.current.temp_c + '°';
            const feelsLike = document.querySelector('.feels-like');
            feelsLike.textContent = weatherData.current.feelslike_c + '°';
            for (let hour = 0; hour < 24; hour++) {
                temperatureHour[hour].textContent = weatherData.forecast.forecastday[0].hour[hour].temp_c + '°';
            }
            const weekTemperature = document.querySelectorAll('.week-temperature')
            for (let day = 0; day < 3; day++) {
                weekTemperature[day].textContent = weatherData.forecast.forecastday[day].day.avgtemp_c + '°';
            }
            showCel = true;
        }
    })

    // information section
    const sunrise = document.querySelector('.sunrise');
    sunrise.textContent = astronomyData.astronomy.astro.sunrise;

    const sunset = document.querySelector('.sunset');
    sunset.textContent = astronomyData.astronomy.astro.sunset;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = weatherData.current.feelslike_c + '°';

    const humidityInfo = document.querySelector('.humidity-info');
    humidityInfo.textContent = weatherData.current.humidity + '%';

    const windDirection = document.querySelector('.wind-direction');
    windDirection.textContent = weatherData.current.wind_dir;

    const pressure = document.querySelector('.pressure');
    pressure.textContent = weatherData.current.pressure_mb + ' hPa';

    const visibility = document.querySelector('.visibility');
    visibility.textContent = weatherData.current.vis_km + ' km';

    const uvIndex = document.querySelector('.uv-index');
    uvIndex.textContent = weatherData.current.uv;

    // 1 week forecast section

    const weekTemp = document.querySelector('.week-temp');

    weekTemp.replaceChildren();
    weekTemp.innerHTML += `<div class="indicator">
        <div class="week-day">DAY</div>
        <div class="week-condition"></div>
        <div class="week-rain">CHANCE OF RAIN</div>
        <div class="week-humidity">HUMIDITY</div>
        <div class="week-temperature-indi">TEMPERATURE</div>
        </div>`
    for (let day = 0; day < 7; day++) {
        const d = new Date(weatherData.forecast.forecastday[day].date);

        let dateDay = d.toString();

        weekTemp.innerHTML += `
        <div class='day'>
        <div class='week-day'>${dateDay.substr(0, 10)}</div>
        <div class='week-condition'><img src='${weatherData.forecast.forecastday[day].day.condition.icon}'></div>
        <div class='week-rain'>${weatherData.forecast.forecastday[day].day.daily_chance_of_rain}%</div>
        <div class='week-humidity'>${weatherData.forecast.forecastday[day].day.avghumidity}%</div>
        <div class='week-temperature'>${weatherData.forecast.forecastday[day].day.avgtemp_c}°</div>
        </div>
        `
    }
}