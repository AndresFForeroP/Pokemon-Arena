let jugador1 = "";
let jugador2 = "";
// Define un nuevo componente personalizado <cartabatalla>
export class cartabatalla extends HTMLElement{
    /**
     * Constructor del componente. Inicializa el Shadow DOM, recupera los pokemones seleccionados del localStorage
     * y define el turno inicial.
     */
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this._pokemones =[];
        this.pokElegido1 = localStorage.getItem("pokemon1");
        this.pokElegido2 = localStorage.getItem("pokemon2");
        this.turno = 1;
    }
    /**
     * Setter que recibe la lista de pokemones disponibles y llama al método render() para mostrar la batalla.
     */
    set pokemones(value){
        this._pokemones = value;
        this.render();
    }
    /**
     * Renderiza toda la interfaz de batalla, crea elementos visuales, aplica estilos,
     * y configura botones de ataque y modo de juego (manual o automático).
     */
    render(){
        this._pokemones.forEach(pok => {
            if (pok.nombre == this.pokElegido1) {
                jugador1 = {
                    nombre: pok.nombre,
                    tipo: pok.tipo,
                    vida: pok.vida,
                    hp:pok.vida,
                    ataque: pok.ataque,
                    defensa: pok.defensa,
                    gif: pok.gif,
                    imagen: pok.imagen,
                    habilidades: pok.habilidades,
                    debilidad: pok.debilidad
                }
            }
        });
        this._pokemones.forEach(pok => {
            if (pok.nombre == this.pokElegido2) {
                jugador2 = {
                    nombre: pok.nombre,
                    tipo: pok.tipo,
                    vida: pok.vida,
                    hp:pok.vida,
                    ataque: pok.ataque,
                    defensa: pok.defensa,
                    gif: pok.gif,
                    imagen: pok.imagen,
                    habilidades: pok.habilidades,
                    debilidad: pok.debilidad
                }
            }
        });
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
        .image1{
              background-image: url(${jugador1.imagen});
              background-size: cover;
              background-position: center;
              border-radius: 25px;
              border: 5px solid #457B9D;
              height: 25vh;
              width: 17vw;
              margin: 1vw;
        }
        .image2{
            background-image: url(${jugador2.imagen});
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
            
        .atacando-izquierda {
          animation: golpei 0.5s ease;
        }
        .atacando-derecha {
          animation: golped 0.5s ease;
        }
        .golpeado-izquierda {
            animation: golpeadoi 0.5s ease;
            background: rgba(255, 0, 0, 0.5);
        }
        .golpeado-derecha {
            animation: golpeadod 0.5s ease;
            background: rgba(255, 0, 0, 0.5);
        }
        @keyframes golpei {
          0% { transform: translateX(0); }
          25% { transform: rotateX(45deg); }
          50% { transform: translateX(500px); }
          75% { transform: rotateZ(25deg); }
          100% { transform: translateX(0); }
        }
        @keyframes golped {
          0% { transform: translateX(0); }
          25% { transform: rotateX(45deg); }
          50% { transform: translateX(-500px); }
          75% { transform: rotateZ(-25deg); }
          100% { transform: translateX(0); }
        }
        @keyframes golpeadoi {
          0% { transform: translateX(0); }
          25% { transform: rotateZ(-25deg); }
          50% { transform: translateX(-100px); }
          75% { transform: rotateX(25deg); }
          100% { transform: translateX(0); }
        }
        @keyframes golpeadod {
          0% { transform: translateX(0); }
          25% { transform: rotateZ(25deg); }
          50% { transform: translateX(100px); }
          75% { transform: rotateX(25deg); }
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
                    <div class="image1"></div>
                    <div class="texto">
                        <p class="nombre">${jugador1.nombre}</p>
                        <p class="fuerza">Vida:</p>
                        <p class="info" id="vidaTextoP1">${jugador1.vida}</p>
                        <p class="fuerza">Ataque:</p>
                        <p class="info" id="ataqueP1">${jugador1.ataque}</p>
                        <p class="fuerza">Defensa:</p>
                        <p class="info">${jugador1.defensa}</p>
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
                    <div class="image2"></div>
                    <div class="texto">
                        <p class="nombre">${jugador2.nombre}</p>
                        <p class="fuerza">Vida:</p>
                        <p class="info" id="vidaTextoP2">${jugador2.vida}</p>
                        <p class="fuerza">Ataque:</p>
                        <p class="info" id="ataqueP2">${jugador2.ataque}</p>
                        <p class="fuerza">Defensa:</p>
                        <p class="info">${jugador2.defensa}</p>
                    </div>
                    <div class="container-btn">
                        <button class="btn-attack" id="btnP2">Ataque</button>
                    </div>
                </div>
            </div>
        </div>`
        this.shadowRoot.appendChild(this.pagina);
        this.shadowRoot.getElementById("btnP1").addEventListener("click", () => {
            this.atacar(1);
        });
        this.shadowRoot.getElementById("btnP2").addEventListener("click", () =>{
            this.atacar(2)
        } );
        this.shadowRoot.getElementById("vidaP1").style.width = "100%";
        this.shadowRoot.getElementById("vidaP2").style.width = "100%";
        this.actualizarBotones();
        if (localStorage.getItem("modo") == "npcxnpc") {
            this.iniciarBatallaAutomatica()
            this.shadowRoot.getElementById("btnP1").style.display = "none"
            this.shadowRoot.getElementById("btnP2").style.display = "none"
        }else if (localStorage.getItem("modo") == "playerxnpc") {
            this.shadowRoot.getElementById("btnP2").style.display = "none"
        }
    }
    /**
     * Ejecuta el ataque de un jugador, reduce la vida del oponente, muestra animaciones,
     * verifica si alguien ganó y controla el flujo de turnos según el modo de juego.
     */
    atacar(playerNum) {
        this.animarAtaque(playerNum);
        const atacante = playerNum === 1 ? jugador1 : jugador2;
        const defensor = playerNum === 1 ? jugador2 : jugador1;
        const vidaBarra = playerNum === 1 ? "vidaP2" : "vidaP1";
        const vidaTexto = playerNum === 1 ? "vidaTextoP2" : "vidaTextoP1";
        const daño = atacante.ataque;
        defensor.hp = Math.max(0, defensor.hp - daño);//muere
        const barra = this.shadowRoot.getElementById(vidaBarra);
        const texto = this.shadowRoot.getElementById(vidaTexto);
        const porcentaje = (defensor.hp / defensor.vida) * 100;
        barra.style.width = `${porcentaje}%`;
        texto.innerText = defensor.hp;
        if (defensor.hp <= 0) {
            Swal.fire({
                text: `${atacante.nombre} Gano el combate`,
                imageUrl: atacante.gif,
                confirmButtonText: "Salir",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "index.html";
                }
            });
            this.shadowRoot.getElementById("btnP1").disabled = true;
            this.shadowRoot.getElementById("btnP2").disabled = true;

        }
        this.shadowRoot.getElementById("btnP1").disabled = this.turno !== 1;
        this.turno = this.turno === 1 ? 2 : 1;
        if (localStorage.getItem("modo") == "playerxplayer") {
            this.actualizarBotones();
        }else if (localStorage.getItem("modo") == "playerxnpc" && this.turno == 2) {
            this.shadowRoot.getElementById("btnP1").disabled = this.turno !== 1;
            setTimeout(() => this.turnoAutomatico(), 1000);
        }else if (localStorage.getItem("modo") == "playerxnpc" && this.turno == 1){
            this.shadowRoot.getElementById("btnP1").disabled = this.turno !== 1;
        }
    }
    /**
     * Activa o desactiva los botones de ataque según a quién le toque el turno actual.
     */
    actualizarBotones() {
        this.shadowRoot.getElementById("btnP1").disabled = this.turno !== 1;
        this.shadowRoot.getElementById("btnP2").disabled = this.turno !== 2;
    }
    /**
     * Aplica animaciones CSS a la carta del jugador atacante y del defensor
     * para simular el ataque visualmente.
     */
    animarAtaque(playerNum) {
        const carta = this.shadowRoot.getElementById(`cardP${playerNum}`);
        if (!carta) return;
        if (playerNum == 1) {
            carta.classList.add("atacando-izquierda");
            setTimeout(() => carta.classList.remove("atacando-izquierda"), 500);
            const cartarival = this.shadowRoot.getElementById(`cardP2`);
            cartarival.classList.add("golpeado-derecha");
            setTimeout(() => cartarival.classList.remove("golpeado-derecha"), 500);
        }
        else{
            carta.classList.add("atacando-derecha");
            setTimeout(() => carta.classList.remove("atacando-derecha"), 500);
            const cartarival = this.shadowRoot.getElementById(`cardP1`);
            cartarival.classList.add("golpeado-izquierda");
            setTimeout(() => cartarival.classList.remove("golpeado-izquierda"), 500);
        }        
    }
    /**
     * Simula un turno automático para un NPC, ejecutando el ataque y programando el siguiente si aplica.
     */
    turnoAutomatico = () => {
        if (jugador1.hp <= 0 || jugador2.hp <= 0) return;
        this.atacar(this.turno);
        if (localStorage.getItem("modo") == "npcxnpc") {
            setTimeout(() => this.turnoAutomatico(), 1000);
        }
    }
    /**
     * Inicia una secuencia automática de turnos entre dos NPCs.
     */
    iniciarBatallaAutomatica = () => {
        setTimeout(() => this.turnoAutomatico(), 1000);
    }
}