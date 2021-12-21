let tarjetas = document.querySelector(".tarjetas")
let personajes = [];




class personaje{
    constructor(image,name,status,especie,location){
        this.image=image;
        this.name=name;
        this.status=status;
        this.species=especie;
        this.location=location;
    };


mostrarPersonajes(){
        tarjetas.innerHTML +=
       `<div class="info">
        <img src="${this.image}" alt="">
        <p id="nombre">${this.name}</p>
        <p id="estado">${this.status}</p>
        <p id="especie">${this.species}</p>
        <p id="location">${this.location}</p>
        </div>`
};
}

const mostrarTarjetas =(personajes) => personajes.map(personaje => personaje.mostrarPersonajes());

const rickmorty = async() =>{
    const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9");
    const users = await response.json();

    users.forEach(user => {
        const obj = new personaje(user.image, user.name, user.status, user.species, user.location.name);
        personajes.push(obj)
    });
    mostrarTarjetas(personajes)
}
rickmorty()
