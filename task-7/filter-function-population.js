//Get all the countries with a population of less than 2 lakhs using Filter function

// Fetch the data with a population
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and print name, capital, and flag
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital[0];
      const flag = country.flags.svg;

      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => console.log('Error fetching data:', error));


// output
// Countries with a population of less than 2 lakhs:
// Bermuda
// Vatican City
// Cook Islands
// American Samoa
// Saint Martin
// Guam
// Jersey
// Grenada
// Christmas Island
// Niue
// Svalbard and Jan Mayen
// Saint Barthélemy
// Greenland
// Saint Pierre and Miquelon
// Tokelau
// British Virgin Islands
// Cayman Islands
// Saint Lucia
// British Indian Ocean Territory
// Norfolk Island
// Montserrat
// Tuvalu
// Saint Kitts and Nevis
// French Southern and Antarctic Lands
// Isle of Man
// Antigua and Barbuda
// Dominica
// Liechtenstein
// Tonga
// United States Virgin Islands
// Marshall Islands
// Seychelles
// Saint Helena, Ascension and Tristan da Cunha
// Andorra
// Samoa
// Bouvet Island
// Anguilla
// Åland Islands
// Wallis and Futuna
// Monaco
// United States Minor Outlying Islands
// Northern Mariana Islands
// South Georgia
// Micronesia
// Turks and Caicos Islands
// Faroe Islands
// Antarctica
// Kiribati
// Gibraltar
// Palau
// Pitcairn Islands
// Caribbean Netherlands
// Aruba
// Cocos (Keeling) Islands
// Heard Island and McDonald Islands
// San Marino
// Sint Maarten
// Falkland Islands
// Curaçao
// Guernsey
// Nauru
// Saint Vincent and the Grenadines