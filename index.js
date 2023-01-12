// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
//ok
const countriesContainer = document.querySelector('.countries-container');
const btnSort = document.querySelectorAll('.btnSort')

let countriesData = [];
let sortMethod = "maxToMin";

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountry() {
    await fetch('https://restcountries.com/v3.1/all')
        .then((resp) => resp.json())
        .then(
            (data) =>
                // 3 - Passer les données à une variable
                (countriesData = data)
        );
    countryDisplay();
}

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countryDisplay() {
    countriesContainer.innerHTML = countriesData
        // .filter((country) =>
        //     country.translations.fra.common.includes(inputSearch.value)
        // )
        .filter((country) => country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))
        .sort((a , b) => {
            if (sortMethod === "maxToMin"){ 
            return b.population - a.population;
            } else if (sortMethod === "minToMax"){
                return a.population - b.population;
            }else if (sortMethod === "alpha") {
                return a.translations.fra.common.localeCompare(b.translations.fra.common)
            } 
        })
        .slice(0, inputRange.value)        
        .map(
            (country) =>
                `
                <div class="card">
                <img src="${country.flags.png}" alt="drapeau de ${country.capital}"> 
                <h2>${country.translations.fra.common}</h2>
                <h3>${country.capital}</h3>
                <p>Population : ${country.population.toLocaleString()}</p>
                </div>
                `
        )
        .join('');
}
countryDisplay();

window.addEventListener('load', () => {
    fetchCountry();    
});
inputSearch.addEventListener('input', () => {
    countryDisplay();
})

btnSort.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
      sortMethod =  e.target.id;
      countryDisplay();
    })
})


// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// country.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
