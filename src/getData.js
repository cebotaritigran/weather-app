import { showCurrentData } from "./showData";

export async function getWeather(place) {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=829d734e92bc4a00882163051232803&q=' + place + '&days=7&aqi=no&alerts=no')
        const weatherData = await response.json()
        const responseAstronomy = await fetch('https://api.weatherapi.com/v1/astronomy.json?key=829d734e92bc4a00882163051232803&q=' + place + '&dt=')
        const astronomyData = await responseAstronomy.json()
        showCurrentData(weatherData, astronomyData)
        console.log(weatherData.forecast.forecastday[0].hour[0])
        console.log(weatherData)
        console.log(astronomyData)
        console.log(weatherData.current.temp_c);
        console.log('feels like: ' + weatherData.current.feelslike_c + ' C');
        console.log(weatherData.current.condition.text)
    } catch (error) {
        console.log(error);
    }

}