//importaciones de los modulos para la funcionalidad del del codigo!!
"use strict";
import {barraBusqueda} from "./barra-menu.js";
import {GetJson} from "./funcionesJson.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "batalla";
//crea el apartado de la  tarjeta aplicando el style y la base de este 
class tarjet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._data = [];//almacenar
        this._index = 0;
    }

    set data(value){
        this._data = value;
        this._index=0;
        this.render();
    }
    get data(){
        return this._data;
    }
    connectedCallback(){
        this.render();
    }
    render() {
        if (!this._data.length) return;
        const personaje = this._data[this._index];
        localStorage.setItem("pokemon1",personaje.nombre)
        this.shadowRoot.innerHTML=/* html */`
        <style>
            .carta1 {
                display: flex;
                border: 10px solid rgb(29, 53, 87);
                border-radius: 25px;
                background-color: white;
                width: 31vw;
                justify-items: center;
                justify-content: center;
                align-items: center;
            }
            .flecha{
                background-color: #fff;
                border: none;
                font-size: 5rem;
            }
            .flecha:hover{
                text-shadow: 0px 0px 10px #91afda;
                color: #91afda;
            }
            .container-image{
                justify-content: center;
                align-items: center;
            }
            .image {
                background-image: url(${personaje.imagen});
                background-size: cover;
                background-position: center;
                border-radius: 25px;
                border: 5px solid #457B9D;
                height: 25vh;
                width: 17vw;
                margin: 1vw;
            }
            .texto{
                justify-self: center;
                width: 20vw;
            }
            .nombre {
                font-size: 1rem;
                text-align: center;
                margin-top: 1vh;
            }
            .fuerza {
                padding: 1.5vh;
                font-size: 0.8rem;
                margin-left: 15px;
            }
            ul{
                font-size: 0.8rem;
            }
            .info{
                justify-self: center;
                text-align: center;
                font-size: 0.8rem;
                width: 15vw;
            }
            .container-btn{
                justify-content: center;
                display: flex;
                margin: 1vw;
            }
            .btn-random {
                width: 18vw;
                height: 5vh;
                background-color:rgb(241, 238, 55);
                border-radius: 10px;
                border: 3px solid #457B9D;
                font-size: 1rem;
                font-family: 'Press Start 2P';
                cursor: pointer;
            }
            @media (max-width: 1440px) and (min-width: 1000px){
                .carta1 {
                    width: 30vw;  
                    height: auto;
                }
                .container-image {
                    width: 20vw;
                }
                .image{
                    height: 25vh;
                    border: 6px solid #457B9D;
                }
                .texto{

                    margin: 0;
                    padding: 0;
                    width: 20vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 1rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 1rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 1rem;
                    text-align: justify;
                }
                .btn-random{
                    width: 20vw;
                    height: 5vh;
                    font-size: 1.5rem;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 1rem;
                }
            }
            @media (max-width: 1000px) and (min-width: 500px){
                .container-main-cards {
                    width: 100vw;
                    gap:2vh;
                    display: flex;
                    flex-direction: column; 
                }
                .carta1 {
                    width: 90vw;  
                    height: auto;
                }
                .container-image {
                    width: 70vw; 
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                .flecha{
                    width: 10vw;
                }
                .image{
                    width: 35vw;
                    height: 20vh;
                    margin: 0vw;
                }
                .texto{
                    margin: 0;
                    padding: 0;
                    width: 30vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 1.3rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 1.5rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 1.3rem;
                    text-align: justify;
                }
                .btn-random{
                    font-size: 1.3rem;
                    width: 40vw;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 1.3rem;
                }
            }
            @media (max-width: 500px){
                .container-main-cards {
                    width: 100vw;
                    gap:2vh;
                    display: flex;
                    flex-direction: column; 
                }
                .versus{
                    font-size: 3rem;
                }
                .carta1 {
                    width: 90vw;  
                    height: auto;
                }
                .flecha{
                    margin: 0 1vw 0 1vw;
                    width: 5vw;
                    font-size: 1.5rem;
                }
                .container-image {
                    width: 80vw; 
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                .image{
                    width: 30vw;
                    height: 8vh;
                    margin: 1vw;
                }
                .texto{
                    margin: 0;
                    padding: 0;
                    width: 30vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 0.6rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 0.6rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 0.5rem;
                    text-align: justify;
                }
                .btn-random{
                    font-size: 1rem;
                    width: 40vw;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 0.6rem;
                }
            }
        </style>
        <div class="carta1">
            <button class="flecha" id="atras"><</button>
            <div class="container-image">
                <div class="image"></div>
                <div class="texto">
                    <!-- cambiar el nombre por el del pokemon -->
                    <p class="nombre" >${personaje.nombre}</p>
                    <p class="fuerza">Vida:</p>
                    <p class="info">${personaje.vida}</p>
                    <p class="fuerza">Ataque:</p>
                    <p class="info">${personaje.ataque}</p>
                    <p class="fuerza">Defensa:</p>
                    <p class="info">${personaje.defensa}</p>
                    <ul>
                        ${Object.entries(personaje.habilidades).map(([key, value]) => `<li>${key} (x${value})</li>`).join('')}
                    </ul>
                </div>
                <div class="container-btn">
                    <button id="botonrandom" class="btn-random">RANDOM</button>
                </div>
            </div>
            <button class="flecha" id="adelante">></button>
        </div>
        `;
    this.shadowRoot.getElementById("atras").onclick = () => {
        this._index = (this._index - 1 + this._data.length) % this._data.length;
        this.render();
    };
    this.shadowRoot.getElementById("adelante").onclick = () => {
        this._index = (this._index + 1) % this._data.length;
        this.render();
    };
    this.shadowRoot.getElementById("botonrandom").onclick = () => {
        this._index = Math.floor(Math.random() * 8);
        this.render();
    };
  };
};
 export class tarjets extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._data = [];//almacenar
        this._index = 0;
    }

    set data(value){
        this._data = value;
        this._index=0;
        this.render();
    }
    get data(){
        return this._data;
    }
    connectedCallback(){
        this.render();
    }
    render() {
        if (!this._data.length) return;
        const personaje = this._data[this._index];
        localStorage.setItem("pokemon2",personaje.nombre)
        this.shadowRoot.innerHTML=/* html */`
        <style>
            .carta1 {
                display: flex;
                border: 10px solid rgb(29, 53, 87);
                border-radius: 25px;
                background-color: white;
                width: 31vw;
                justify-items: center;
                justify-content: center;
                align-items: center;
            }
            .flecha{
                background-color: #fff;
                border: none;
                font-size: 5rem;
            }
            .flecha:hover{
                text-shadow: 0px 0px 10px #91afda;
                color: #91afda;
            }
            .container-image{
                justify-content: center;
                align-items: center;
            }
            .image {
                background-image: url(${personaje.imagen});
                background-size: cover;
                background-position: center;
                border-radius: 25px;
                border: 5px solid #457B9D;
                height: 25vh;
                width: 17vw;
                margin: 1vw;
            }
            .texto{
                justify-self: center;
                width: 20vw;
            }
            .nombre {
                font-size: 1rem;
                text-align: center;
                margin-top: 1vh;
            }
            .fuerza {
                padding: 1.5vh;
                font-size: 0.8rem;
                margin-left: 15px;
            }
            ul{
                font-size: 0.8rem;
            }
            .info{
                justify-self: center;
                text-align: center;
                font-size: 0.8rem;
                width: 15vw;
            }
            .container-btn{
                justify-content: center;
                display: flex;
                margin: 1vw;
            }
            .btn-random {
                width: 18vw;
                height: 5vh;
                background-color:rgb(241, 238, 55);
                border-radius: 10px;
                border: 3px solid #457B9D;
                font-size: 1rem;
                font-family: 'Press Start 2P';
                cursor: pointer;
            }
            @media (max-width: 1440px) and (min-width: 1000px){
                .carta1 {
                    width: 30vw;  
                    height: auto;
                }
                .container-image {
                    width: 20vw;
                }
                .image{
                    height: 25vh;
                    border: 6px solid #457B9D;
                }
                .texto{

                    margin: 0;
                    padding: 0;
                    width: 20vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 1rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 1rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 1rem;
                    text-align: justify;
                }
                .btn-random{
                    width: 20vw;
                    height: 5vh;
                    font-size: 1.5rem;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 1rem;
                }
            }
            @media (max-width: 1000px) and (min-width: 500px){
                .container-main-cards {
                    width: 100vw;
                    gap:2vh;
                    display: flex;
                    flex-direction: column; 
                }
                .carta1 {
                    width: 90vw;  
                    height: auto;
                }
                .container-image {
                    width: 70vw; 
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                .flecha{
                    width: 10vw;
                }
                .image{
                    width: 35vw;
                    height: 20vh;
                    margin: 0vw;
                }
                .texto{
                    margin: 0;
                    padding: 0;
                    width: 30vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 1.3rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 1.5rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 1.3rem;
                    text-align: justify;
                }
                .btn-random{
                    font-size: 1.3rem;
                    width: 40vw;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 1.3rem;
                }
            }
            @media (max-width: 500px){
                .container-main-cards {
                    width: 100vw;
                    gap:2vh;
                    display: flex;
                    flex-direction: column; 
                }
                .versus{
                    font-size: 3rem;
                }
                .carta1 {
                    width: 90vw;  
                    height: auto;
                }
                .flecha{
                    margin: 0 1vw 0 1vw;
                    width: 5vw;
                    font-size: 1.5rem;
                }
                .container-image {
                    width: 80vw; 
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                .image{
                    width: 30vw;
                    height: 8vh;
                    margin: 1vw;
                }
                .texto{
                    margin: 0;
                    padding: 0;
                    width: 30vw;
                    text-align: justify;
                }
                .nombre{
                    font-size: 0.6rem;
                    width: 10vw;
                    justify-self: center;
                }
                .fuerza{
                    font-size: 0.6rem;
                    margin: 1vh 0 1vh 0;
                    padding: 0;
                }
                .info{
                    font-size: 0.5rem;
                    text-align: justify;
                }
                .btn-random{
                    font-size: 1rem;
                    width: 40vw;
                }
                .container-btn{
                    grid-column: span 2 / span 2;
                }
                ul{
                    font-size: 0.6rem;
                }
            }
        </style>
        <div class="carta1">
            <button class="flecha" id="atras"><</button>
            <div class="container-image">
                <div class="image"></div>
                
                <div class="texto">
                    <!-- cambiar el nombre por el del pokemon -->
                    <p class="nombre" >${personaje.nombre}</p>
                    <p class="fuerza">Vida:</p>
                    <p class="info">${personaje.vida}</p>
                    <p class="fuerza">Ataque:</p>
                    <p class="info">${personaje.ataque}</p>
                    <p class="fuerza">Defensa:</p>
                    <p class="info">${personaje.defensa}</p>
                    <ul>
                        ${Object.entries(personaje.habilidades).map(([key, value]) => `<li>${key} (x${value})</li>`).join('')}
                    </ul>
                </div>
                <div class="container-btn">
                    <button id="botonrandom" class="btn-random">RANDOM</button>
                </div>
            </div>
            <button class="flecha" id="adelante">></button>
        </div>
        `;
    //se le ingresa funcionalidad al apartado de la tarjeta 
    this.shadowRoot.getElementById("atras").onclick = () => {
        this._index = (this._index - 1 + this._data.length) % this._data.length;
        this.render();
    };
    this.shadowRoot.getElementById("adelante").onclick = () => {
        this._index = (this._index + 1) % this._data.length;
        this.render();
    };
    this.shadowRoot.getElementById("botonrandom").onclick = () => {
        this._index = Math.floor(Math.random() * 8);
        this.render();
    };
  };
};
//se define la tarjeta del personaje 
const tarjeta = document.querySelector('tarjet-personaje');
const tarjetas = document.querySelector('tarjet-personajes');
customElements.define('tarjet-personaje', tarjet);
customElements.define('tarjet-personajes', tarjets);

let player1 = "";
let player2 = "";
//se toma del json y se exporta a lo seleccionado en la tarjeta
document.getElementById("iniciarbatalla").onclick = () => {
    player1 = tarjeta.data[tarjeta._index];
     player2 = tarjetas.data[tarjetas._index];
     document.getElementById("iniciarbatalla").style.display = "none";
};
GetJson("Primera").then(datos =>{
    const Primera = datos;
    console.log(Primera)
    GetJson("Septima").then(datoss =>{
        Primera.push(...datoss);
        tarjeta.data = Primera;
        tarjetas.data = Primera;
    })
})

export {
    player1,
    player2
};