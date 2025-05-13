"use strict";
import { GetJson } from "./funcionesJson.js";
import {barraBusqueda} from "./barra-menu.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "home";
GetJson("Primera").then(data => {
    console.log(data);
});