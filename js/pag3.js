"use strict";
import {barraBusqueda} from "./barra-menu.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "batalla";

const player = document.getElementById("2players");
const pcplayer = document.getElementById("pc_player");
const pc = document.getElementById("2pc");
const sonidoClick = new Audio('../storage/audios/sonido-de-boton.wav');

player.addEventListener("click",function(e) {
    e.preventDefault();
    const pp = 'playerxplayer';
    sonidoClick.currentTime = 0; 

    sonidoClick.play().then(() => {
        
        setTimeout(() => {
            localStorage.setItem("modo", pp);
            window.location.href = "pag31.html";
        }, 300);
    }).catch(err => {
        console.warn("No se pudo reproducir el sonido:", err);
       
        localStorage.setItem("modo", pp);
        window.location.href = "pag31.html";
    });
});


pcplayer.addEventListener("click", function(e) {
    e.preventDefault();
    const pp = 'playerxnpc';
    sonidoClick.currentTime = 0;
    sonidoClick.play().then(() => {
        setTimeout(() => {
            localStorage.setItem("modo", pp);
            
        }, 300);
    }).catch(err => {
        console.warn("Error al reproducir sonido:", err);
        localStorage.setItem("modo", pp);
        window.location.href = "pag31.html";
        
    });
});


pc.addEventListener("click", function(e) {
    e.preventDefault();
    const pp = 'npcxnpc';
    sonidoClick.currentTime = 0;
    sonidoClick.play().then(() => {
        setTimeout(() => {
            localStorage.setItem("modo", pp);
            
        
        }, 300);
    }).catch(err => {
        console.warn("Error al reproducir sonido:", err);
        localStorage.setItem("modo", pp);
        window.location.href = "pag31.html";
        alert('click 2pc');
    });
});