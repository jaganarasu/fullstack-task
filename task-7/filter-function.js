//Get all the countries from Asia continent /region using Filter function
// Fetch the data
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia continent/region
    const countriesInAsia = data.filter(country => country.region === 'Asia');
    
    // Log the names of countries in Asia
    countriesInAsia.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.log('Error fetching data:', error));


// output
// Countries in Asia:
// Turkmenistan
// Timor-Leste
// Azerbaijan
// Vietnam
// Afghanistan
// Kuwait
// Kyrgyzstan
// Armenia
// Tajikistan
// Brunei
// Pakistan
// Bangladesh
// China
// Maldives
// Malaysia
// Lebanon
// Mongolia
// Nepal
// Taiwan
// Bhutan
// Cambodia
// Georgia
// Israel
// Singapore
// United Arab Emirates
// Uzbekistan
// Saudi Arabia
// Japan
// Syria
// Iran
// South Korea
// Philippines
// Macau
// North Korea
// Iraq
// Palestine
// Turkey
// Kazakhstan
// Qatar
// Jordan
// Myanmar
// Thailand
// Bahrain
// Laos
// India
// Yemen
// Oman
// Indonesia
// Sri Lanka
// Hong Kong