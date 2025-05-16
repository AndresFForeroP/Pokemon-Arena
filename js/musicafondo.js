//funcion necesaria para la musica de fondo dentro la pagina 
function iniciarMusicaFondo() {
    const musicaFondo = document.getElementById('musicaFondo');
    if (musicaFondo) {
      musicaFondo.volume = 0.5;
      musicaFondo.play().catch(err => console.log("Bloqueado por el navegador:", err));
    }
  }
  
  document.addEventListener("click", function onFirstClick() {
    iniciarMusicaFondo();
    document.removeEventListener("click", onFirstClick);  
 });