//importaciones de los modulos para la funcionalidad del del codigo!!
"use strict";
import {barraBusqueda} from "./barra-menu.js";
import {cartabatalla} from "./componentepvp.js";
import {GetJson} from "./funcionesJson.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda);
componenteBusqueda.categoria = "batalla";
let componentepvp = document.querySelector('div-pvp');
customElements.define('div-pvp',cartabatalla);
GetJson("Primera").then(datos =>{
    const Primera = datos;
    GetJson("Septima").then(datoss =>{
        Primera.push(...datoss);
        componentepvp.pokemones = Primera;
    })
})
const sonidoClick = new Audio('storage/audios/sonidoataque.wav');