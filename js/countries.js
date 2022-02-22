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
    countriesDiv.appendChild(div);
    const h3 = document.createElement('h3');
    h3.innerText = country.name.common;
    div.appendChild(h3);
    const p = document.createElement('picture');
    p.innerText = country.capital;
    div.appendChild(p);




        console.log(country);
    });

}