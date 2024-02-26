const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");  
req.send();

req.onload = function () {
    const countries = JSON.parse(this.response);
    
    countries.forEach(country => {
        const name = country.name.common;
        const region = country.region;
        const subregion = country.subregion;
        const population = country.population;
        
        console.log(`Name: ${name}, Region: ${region}, Sub-region: ${subregion}, Population: ${population}`);
    });
}