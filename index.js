// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
//ok
let countries = [];

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountry() {
await fetch('https://restcountries.com/v3.1/all')
.then((resp) =>  resp.json())
.then((data) => (countries = data));

// 3 - Passer les données à une variable
console.log(countries);
}


// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
    const countryDisplay = async() => {
    await fetchCountry();
    result.innerHTML = countries.map(
    (country) =>    
    `
    <li>
    <img src="${country.flags.png}" alt="drapeau de ${country.capital}"> 
    <h2>${country.name.official}</h2>
    <h3>${country.capital}</h3>
    <p>Population : ${country.population}</p>
    </li>
    `
    ).join("")
}

countryDisplay();
// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
