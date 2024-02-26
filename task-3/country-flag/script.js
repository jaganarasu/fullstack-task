const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");  
req.send();

req.onload = function () {
    const countries = JSON.parse(this.response);
    
    // Assuming each country object has a 'flags' property containing an array of flag URLs
    countries.forEach(country => {
        const flagUrl = country.flags.png; // Assuming flag URLs are stored in 'flags.png' property
        console.log(flagUrl);
        // Now you can use this flag URL to load and display the flag image in your application
    });}


    
 
