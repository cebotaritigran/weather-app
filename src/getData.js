export async function getWeather(place) {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=829d734e92bc4a00882163051232803&q=' + place)
        const weatherData = await response.json()
        console.log(weatherData)
        console.log(weatherData.current.temp_c);
        console.log('feels like: ' + weatherData.current.feelslike_c + ' C');
        console.log(weatherData.current.condition.text)
    } catch (error) {
        console.log(error);
    }

}