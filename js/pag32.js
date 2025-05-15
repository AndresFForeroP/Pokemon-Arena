
import {cartaspokemon} from "./mostrar-poks.js";
import { GetJson } from "./funcionesJson.js";
import {barraBusqueda} from "./barra-menu.js";
import { player1 as p1,player2 as p2} from "./pag31.js";

alert (p1,p2);
async function obtenerPokemon(nombre) {
  const url = `"http://localhost:3000/"}`;
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return {
      nombre: datos.name,
      vida: datos.stats.find(stat => stat.stat.name === "vida").base_stat,
      ataque: datos.stats.find(stat => stat.stat.name === "ataque").base_stat,
      img: datos.sprites.front_default
    };
  } catch (error) {
    console.error(`Error al obtener a ${nombre}:`, error);
  }
}

function updateUI() {
    document.getElementById('p1Bar').style.width = `${player1.ataque} / ${player2.ataque}` * 100 + '%';
    document.getElementById('p2Bar').style.width = (player2.hp / player2.vida * 100) + '%';
    document.getElementById('p1HP').innerText = `${player1.hp} / ${player1.vida} HP`;
    document.getElementById('p2HP').innerText = `${player2.hp} / ${player2.vida} HP`;
    document.getElementById('btnP1').disabled = turno !== 1;
    document.getElementById('btnP2').disabled = turno !== 2;
  }
  
  function attack(playerNum) {
    const attacker = playerNum === 1 ? player1 : player2;
    const defender = playerNum === 1 ? player2 : player1;
  
    const dmg = parseInt(attacker.ataque) + Math.floor(Math.random() * 6);
    defender.hp = Math.max(0, defender.hp - dmg);
  
    log(`${attacker.nombre} hace ${dmg} de daño a ${defender.nombre}`);
  
    if (defender.hp === 0) {
      log(`🎉 ${attacker.nombre} gana la batalla!`);
      document.getElementById('btnP1').disabled = true;
      document.getElementById('btnP2').disabled = true;
      return;
    }
  
    turno = turno === 1 ? 2 : 1;
    updateUI();
  }
  
  function log(msg) {
    const logBox = document.getElementById('battleLog');
    logBox.innerHTML += `<div>${msg}</div>`;
    logBox.scrollTop = logBox.scrollHeight;
  }
  
  document.getElementById('startBattleBtn').addEventListener('click', startBattle);
  document.getElementById('btnP1').addEventListener('click', () => attack(1));
  document.getElementById('btnP2').addEventListener('click', () => attack(2));
  
  window.addEventListener('DOMContentLoaded', loadData);

  // Cargar datos
GetJson("Primera").then(datos => {
  const Primera = datos;

  GetJson("Septima").then(datoss => {
      Primera.push(...datoss);

      // Elegir los jugadores
      seleccionarJugadores(Primera);

      // Iniciar la batalla
      updateUI();
  });
});

