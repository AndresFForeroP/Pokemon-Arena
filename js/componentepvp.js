export class cartabatalla extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this_modo =[];
    }
    set modo(value){
        this._modo = value;
        this.render();
    }
    render(){
        this.estilo = document.createElement('style');
        this.estilo.innerHTML = `
        .contenedor{
            padding: 3vw 10vw 0vw 10vw;
            display: flex;
            gap: 10vw;
            justify-items: center;
            align-items: center;
            justify-self: center;
        }
        .carta1 {
              display: flex;
              border: 10px solid rgb(29, 53, 87);
              border-radius: 25px;
              background-color: white;
              width: 25vw;
              justify-items: center;
              justify-content: center;
              align-items: center;
        }
        .container-image{
              justify-content: center;
              justify-items: center;
              align-items: center;
        }
        .barravida_out{
              background-color: var(--rojo);
              outline: 5px solid var(--azul);
              width: 20vw;
              height: 5vh;
              border-radius: 10px;
              margin: 1vw;
              overflow: hidden;
        }
        .barravida_in{
              background-color: #3df137;
              width: 15vw;
              height: 5vh;
        }
        .image {
              background-image: url(../storage/img/bulbasaur.jpeg);
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
            
        .btn-attack {
          color:var(--rojo);
          width: 18vw;
          height: 7vh;
          background-color:rgb(241, 238, 55);
          border-radius: 10px;
        }
            
        .atacando {
          animation: golpe 0.3s ease;
        }
            
        @keyframes golpe {
          0% { transform: translateX(0); }
          25% { transform: translateX(50px); }
          50% { transform: translateX(-50px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }`;
        this.shadowRoot.appendChild(this.estilo);
        this.pagina = document.createElement('div');
        this.pagina.innerHTML = `
        <div class="contenedor">
        <div class="carta1" id="cardP1">
            <div class="container-image">
                <div class="barravida_out">
                    <div class="barravida_in" id="vidaP1"></div>
                </div>
                <div class="image"></div>
                <div class="texto">
                    <p class="nombre">Nombre</p>
                    <p class="fuerza">Vida:</p>
                    <p class="info" id="vidaTextoP1">20</p>
                    <p class="fuerza">Ataque:</p>
                    <p class="info" id="ataqueP1">20</p>
                    <p class="fuerza">Defensa:</p>
                    <p class="info">20</p>
                </div>
                <div class="container-btn">
                    <button class="btn-attack" id="btnP1">Ataque</button>
                </div>
            </div>
        </div>
        <h1 class="versus">vs</h1>
        <div class="carta1" id="cardP2">
            <div class="container-image">
                <div class="barravida_out">
                    <div class="barravida_in" id="vidaP2"></div>
                </div>
                <div class="image"></div>
                <div class="texto">
                    <p class="nombre">Nombre</p>
                    <p class="fuerza">Vida:</p>
                    <p class="info" id="vidaTextoP2">20</p>
                    <p class="fuerza">Ataque:</p>
                    <p class="info" id="ataqueP2">20</p>
                    <p class="fuerza">Defensa:</p>
                    <p class="info">20</p>
                </div>
                <div class="container-btn">
                    <button class="btn-attack" id="btnP2">Ataque</button>
                </div>
            </div>
        </div>
        </div>`
        
        this.shadowRoot.appendChild(this.pagina)
    }
}