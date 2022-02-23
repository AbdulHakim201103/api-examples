const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML =`
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick = "loadCountryByName('${country.name.common}')">Details</button>
    `;
    countriesDiv.appendChild(div);

    // const h3 = document.createElement('h3');
    // h3.innerText = country.name.common;
    // div.appendChild(h3);
    // const p = document.createElement('picture');
    // p.innerText = country.capital;
    // div.appendChild(p);
    // console.log(country);
    });
}
const loadCountryByName = name => {
    const url =`https://restcountries.com/v3.1/name/${name}`
    fetch (url)
    .then (res => res.json())
    .then(data => displayCountryDetail(data[0]))  
}

const displayCountryDetail = country =>{
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML =`
        <h5>${country.name.common}</h5>
        <p>Population: ${country.population}</p>
        <img src="${country.flags.png}">
    `;
    // console.log(displayCountryDetail);
}