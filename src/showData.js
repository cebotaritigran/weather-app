export function showCurrentData(weatherData) {
    const location = document.querySelector('.location');
    location.textContent = weatherData.location.name;

    const condition = document.querySelector('.condition');
    condition.textContent = weatherData.current.condition.text;

    const temperature = document.querySelector('.temperature');
    temperature.textContent = weatherData.current.temp_c;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = weatherData.current.humidity + '%';

    const wind = document.querySelector('.wind');
    wind.textContent = weatherData.current.wind_kph + ' kph';
}