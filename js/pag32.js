"use strict";
import {barraBusqueda} from "./barra-menu.js";
import {cartabatalla} from "./componentepvp.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda);
componenteBusqueda.categoria = "batalla";
let componentepvp = document.querySelector('div-pvp');
customElements.define('div-pvp',cartabatalla);
componentepvp.modo = "pvp"
const sonidoClick = new Audio('storage/audios/sonidoataque.wav');
sonidoClick.play();