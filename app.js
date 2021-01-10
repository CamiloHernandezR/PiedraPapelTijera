const puntosUsuario = 0;
const puntosComputadora = 0;
const puntosUsuario_span = document.getElementById("puntos-usuario");
const puntosComputadora_span = document.getElementById("puntos-computadora");
const marcador_div = document.querySelector(".marcador");
const resultado_div = document.querySelector(".resultado");
const pieda_div = document.getElementById("r");
const tijeras_div= document.getElementById("s");
const papel_div = document.getElementById("p");

function computadoraEleccion(){
  let opciones = ['r','s','p'];
  return opciones[Math.floor(Math.random()*3)];
}
function game(usuarioEleccion){
  let computadora = computadoraEleccion();
  switch(usuarioEleccion + computadora){
    case "pr":
    case "rs":
    case "sp":
        console.log("El usuario gana");
      break;
      case "rp":
      case "sr":
      case "ps":
          console.log("El usuario pierde");
        break;
      default:
        console.log("Empate");
        break;
  }
}
function main(){
  pieda_div.addEventListener("click", function(){
      game("r");
  });

  tijeras_div.addEventListener("click", function(){
      game("s");
  });
  papel_div.addEventListener("click", function(){
    game("p");
  });
}

main();
