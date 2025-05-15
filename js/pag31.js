"use strict";
import {barraBusqueda} from "./barra-menu.js";
let componenteBusqueda = document.querySelector('barra-menu');
customElements.define('barra-menu',barraBusqueda)
componenteBusqueda.categoria = "batalla";
const URL_API = "http://localhost:3000/";
const GetJson = async(categoria) => {
    try {
        const respuesta = await fetch(`${URL_API}${categoria}`)
        if (respuesta.status == 200) {
            const datos = await respuesta.json();
            return datos
        }else if (respuesta.status == 401) {
            console.log("La url no es correcta");
        }else if (respuesta.status == 404) {
            console.log(`${categoria} no existe`);
        }else {
            console.log("Se presento un error en la peticion")
        }
    }catch(error){
        console.log(error);
    }
}
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
                        ${Object.entries(personaje.habilidades).map(([key, value]) => `<li>${key} (${value})</li>`).join('')}
                    </ul>
                </div>
                <div class="container-btn">
                    <button class="btn-random">RANDOM</button>
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
  };
};
class tarjets extends HTMLElement {
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
                        ${Object.entries(personaje.habilidades).map(([key, value]) => `<li>${key} (${value})</li>`).join('')}
                    </ul>
                </div>
                <div class="container-btn">
                    <button class="btn-random">RANDOM</button>
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
  };
};
const tarjeta = document.querySelector('tarjet-personaje');
const tarjetas = document.querySelector('tarjet-personajes');
customElements.define('tarjet-personaje', tarjet);
customElements.define('tarjet-personajes', tarjets);
GetJson("Primera").then(datos =>{
    const Primera = datos;
    console.log(Primera)
    GetJson("Septima").then(datoss =>{
        Primera.push(...datoss);
        tarjeta.data = Primera;
        tarjetas.data = Primera;
    })
})