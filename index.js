let tarjetas = document.querySelector(".tarjetas")
let foto = document.querySelector("#foto")
let nombre = document.querySelector("#nombre")
let estado = document.querySelector("#estado")
let especie = document.querySelector("#especie")
let locationn = document.querySelector("#location")


const rickmorty = async() =>{
    const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9");
    const users = await response.json();

    users.forEach(i => {
        tarjetas.innerHTML += `
        <div class="info">
        <img src="${i.image}" alt="">
        <p id="nombre">${i.name}</p>
        <p id="estado">${i.status}</p>
        <p id="especie">${i.species}</p>
        <p id="location">${i.location.name}</p>
        </div>`
    });
}
rickmorty()

