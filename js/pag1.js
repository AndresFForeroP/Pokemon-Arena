//importaciones de los modulos para la funcionalidad del del codigo!!
"use strict";
import {barraBusqueda} from "./barra-menu.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "home";