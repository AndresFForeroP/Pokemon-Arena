//
import { estilocarta } from "./estilocartas.js";
export class cartaspokemon extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this._pokemones = [];
    }
    set pokemones(value){
        this._pokemones = value;
        this.render();
    }
    render(){
        this._pokemones.forEach(pokemon => {
            this.estilo = document.createElement('style');
            this.estilo.innerHTML = estilocarta;
            this.shadowRoot.appendChild(this.estilo);
            const carta = document.createElement('div');
            carta.classList.add(`card-${pokemon.nombre}`)
            carta.innerHTML = `
            <div class="fond-card-${pokemon.nombre}">
        <div class="card-header">
            <div class="card-type"></div>
            <div class="card-name">${pokemon.nombre}</div>
            <div class="card-hp"> ${pokemon.vida}<div class="energy-icon"></div></div>
        </div>
        <div class="card-image-${pokemon.nombre}">
            <div class="pokemon-image-${pokemon.nombre}"></div>
        </div>
            <div class="detail-card-info">
                <div class="card-info">
                ${pokemon.descripcion}
                </div>
            </div>
        <div class="card-attacks">
            <div class="attack">
                <div class="attack-cost">
                    <div class="energy-icon-apl"></div>
                </div>
                <div class="attack-details">
                    <div class="attack-name-1">Placaje</div>
                </div>
            </div>
            <div class="attack-description">  
            </div>
            <div class="attack" style="margin-top: 15px;">
                <div class="attack-cost">
                    <div class="energy-icon-apl"></div>
                    <div class="background-logo"></div>
                    <div class="logo-icon-planta-${pokemon.nombre}"></div>
                </div>
                <div class="attack-details">
                    <div class="attack-name">${pokemon.movimiento}</div>
                    <div class="attack-damage">${pokemon.potencia}</div>
                </div>
            </div>
            <div class="attack-description"> 
            </div>
        </div>
        <div class="card-footer">
            <div class="weakness">
                <div class="weakness-icon-${pokemon.nombre}"></div>
                <p></p>
                <p class="debilidad-${pokemon.nombre}">Debilidad</p>
            </div> 
        </div>
        <div class="card-number">
            <div>Ilus. Eri Yamaki</div>
            <div>095/192 ★</div>
        </div>
        <div class="card-copyright">
            ©2020 Pokémon/Nintendo/Creatures/GAME FREAK
        </div>
    </div>`
    this.shadowRoot.appendChild(carta);
    carta.addEventListener("click", (e) => {
        carta.style.transition = "2s"
        carta.style.transform = "rotatey(180deg)"
        setTimeout(() => {
            carta.innerHTML = `
            <div class="carta-volteada">
                <h1>${pokemon.nombre}</h1>
                <h2>Ataque</h2>
                <p>${pokemon.ataque}</p>
                <h2>Defensa</h2>
                <p>${pokemon.defensa}</p>
                <h2>Vida</h2>
                <p>${pokemon.vida}</p>
                <h2>Debilidad</h2>
                <div class="debilidad-icon-${pokemon.nombre}"></div>
            </div>`
        }, 600);
        carta.addEventListener("click", (e) => {
            carta.style.transition = "1s"
            carta.style.transform = "rotatey(0deg)"
            setTimeout(() => {
                this.shadowRoot.innerHTML = "";
                this.render();
            }, 350);  
        })
    })
    });
    }
}