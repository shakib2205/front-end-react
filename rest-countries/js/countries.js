const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map( country => getCountyHtml(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

//original
// const getCountyHtml = country =>{
//     return `
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}"/>
//     `
// }


//option 1 destructuring method
// const getCountyHtml = country =>{
//     const {name, flags} = country; // destructuring line
//     return `
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}"/>
//     `
// }

//option 2 
// const getCountyHtml = ({name, flags}) => {
//         return `
//             <h2>${name.common}</h2>
//             <img src="${flags.png}"/>
//         `
// }


loadCountries();