//Print the country that uses US dollars as currency.


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Find the first country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      return country.currencies && Object.values(country.currencies).includes('USD');
    });
    
    // Check if a country using USD was found
    if (countryWithUSD) {
      console.log(`Country that uses US dollars as currency: ${countryWithUSD.name.common}`);
    } else {
      console.log('No country found that uses US dollars as currency');
    }
  })
  .catch(error => console.log('Error fetching data:', error));



// output
// No country found that uses US dollars as currency