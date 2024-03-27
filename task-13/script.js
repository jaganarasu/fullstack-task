async function fetchDataForAllCountries() {
    const countriesResponse = await fetch("https://restcountries.com/v3/all");
    const countries = await countriesResponse.json();

    const countryInfoDiv = document.getElementById("countryInfo");

    countries.forEach(async (country) => {
        const countryCode = country.cca3;
        const latLonResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const latLonData = await latLonResponse.json();
        const latLon = latLonData[0].latlng;

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=023ebae887ed84fa2a533fab44680d6e`);
        const weatherData = await weatherResponse.json();

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Latitude:</strong> ${latLon[0]}</p>
            <p><strong>Longitude:</strong> ${latLon[1]}</p>
            <p class="weather"><strong>Weather:</strong> ${weatherData.weather[0].description}</p>
            <p class="weather"><strong>Temperature:</strong> ${weatherData.main.temp}</p>
        `;

        countryInfoDiv.appendChild(card);
    });
}

fetchDataForAllCountries();
