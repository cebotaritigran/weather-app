import { getWeather } from "./getData";

export function searchPlace() {
    const searchButton = document.querySelector('.search-button');
    let place;
    searchButton.addEventListener('click', (event) => {
        const searchInput = document.querySelector('#place');
        place = searchInput.value;
        console.log(place);
        getWeather(place);
        event.preventDefault();
    });
}