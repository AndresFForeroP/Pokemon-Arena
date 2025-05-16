  //Definicion de los turnos de jugador1 y jugador 2//
let turno = 1;
const jugador1 = {
  nombre: "Pikachu",
  vida: 100,
  hp: 100,
  ataque: 20
};
const jugador2 = {
  nombre: "Charmander",
  vida: 100,
  hp: 100,
  ataque: 18
};
// Animacion de ataque y funcionalidad 
function animarAtaque(playerNum) {
  const carta = document.getElementById(`cardP${playerNum}`);
  if (!carta) return;

  carta.classList.add("atacando");
  setTimeout(() => carta.classList.remove("atacando"), 300);
}
//funcion que permite desarrollar el ataque y habilita la barrra de vida 
function atacar(playerNum) {
  animarAtaque(playerNum);

  const atacante = playerNum === 1 ? jugador1 : jugador2;
  const defensor = playerNum === 1 ? jugador2 : jugador1;

  const vidaBarra = playerNum === 1 ? "vidaP2" : "vidaP1";
  const vidaTexto = playerNum === 1 ? "vidaTextoP2" : "vidaTextoP1";

  
  const daño = atacante.ataque + Math.floor(Math.random() * 5);
  defensor.hp = Math.max(0, defensor.hp - daño);

 
  const barra = document.getElementById(vidaBarra);
  const texto = document.getElementById(vidaTexto);

  const porcentaje = (defensor.hp / defensor.vida) * 100;
  barra.style.width = `${porcentaje}%`;
  texto.innerText = defensor.hp;

 
  if (defensor.hp <= 0) {
    alert(`${atacante.nombre} gana la batalla!`);
    document.getElementById("btnP1").disabled = true;
    document.getElementById("btnP2").disabled = true;
  }

  turno = turno === 1 ? 2 : 1;
  actualizarBotones();
}

// esto es para controlar turnos
function actualizarBotones() {
  document.getElementById("btnP1").disabled = turno !== 1;
  document.getElementById("btnP2").disabled = turno !== 2;
}

// Iniciar
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnP1").addEventListener("click", () => {
    atacar(1);
  });
  document.getElementById("btnP2").addEventListener("click", () =>{
    atacar(2)
  } );
  document.getElementById("vidaP1").style.width = "100%";
  document.getElementById("vidaP2").style.width = "100%";
  document.getElementById("vidaTextoP1").innerText = jugador1.hp;
  document.getElementById("vidaTextoP2").innerText = jugador2.hp;
  document.getElementById("ataqueP1").innerText = jugador1.ataque;
  document.getElementById("ataqueP2").innerText = jugador2.ataque;
  actualizarBotones();
});