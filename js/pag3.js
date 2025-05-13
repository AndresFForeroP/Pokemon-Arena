"use strict";
import {barraBusqueda} from "./barra-menu.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "batalla";

const player = document.getElementById("2players");
const pcplayer = document.getElementById("pc_player");
const pc = document.getElementById("2pc");
player.addEventListener("click",function(e) {
    e.preventDefault();
    alert('click 2player');
    const pp = 'playerxplayer';
});
pcplayer.addEventListener("click",function(e) {
    e.preventDefault();
    alert('click player and pc');
    const pp = 'playerxnpc';
});
pc.addEventListener("click",function(e) {
    e.preventDefault();
    alert('click 2pc');
    const pp = 'npcxnpc';
});

