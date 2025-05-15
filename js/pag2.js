"use strict";
import {barraBusqueda} from "./barra-menu.js";
import {cartaspokemon} from "./mostrar-poks.js";
import { GetJson } from "./funcionesJson.js";
const div_pokemones = document.querySelector('div-pokemones');
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda);
componenteBusqueda.categoria = "primera";
customElements.define('div-pokemones',cartaspokemon);
GetJson("Primera").then(datos => {
    const pokemons = datos;
    console.log(pokemons);
    div_pokemones.pokemones = pokemons; 
})