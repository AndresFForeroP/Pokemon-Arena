//importaciones de los modulos para la funcionalidad del del codigo!!
"use strict";
import {barraBusqueda} from "./barra-menu.js";
import {cartaspokemon} from "./mostrar-poks.js";
import { GetJson } from "./funcionesJson.js";
const generacion = localStorage.getItem("generacion");
const div_pokemones = document.querySelector('div-pokemones');
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda);
customElements.define('div-pokemones',cartaspokemon);
//llama los datos pedidos para la visibilidad de las cartas 
if (generacion == "primera") {
    componenteBusqueda.categoria = "primera";
    GetJson("Primera").then(datos => {
        const pokemons = datos;
        console.log(pokemons);
        div_pokemones.pokemones = pokemons; 
    })
}
else{
    componenteBusqueda.categoria = "septima";
    GetJson("Septima").then(datos => {
        const pokemons = datos;
        console.log(pokemons);
        div_pokemones.pokemones = pokemons; 
    })
}