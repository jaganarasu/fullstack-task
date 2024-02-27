//Print the total population of countries using reduce function


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Use reduce function to calculate total population
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    
    // Log the total population
    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => console.log('Error fetching data:', error));


// output
// Total Population: 7777721563