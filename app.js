let puntosUsuario = 0;
let puntosComputadora = 0;
const puntosUsuario_span = document.getElementById("puntos-usuario");
const puntosComputadora_span = document.getElementById("puntos-computadora");
const marcador_div = document.querySelector(".marcador");
const resultado_div = document.querySelector(".resultado > h2");
const pieda_div = document.getElementById("r");
const tijeras_div= document.getElementById("s");
const papel_div = document.getElementById("p");



function computadoraEleccion(){
  let opciones = ['r','s','p'];
  return opciones[Math.floor(Math.random()*3)];
}
function getPalabra(letra){
  return(letra === 's') ?  "tijeras" :  (letra === 'p') ? "papel" : "piedra" ;
}
function victoria(usuarioEleccion, eleccionComputadora){
  puntosUsuario++;
  let usuarioEleccion_div= document.getElementById(usuarioEleccion);
  puntosUsuario_span.innerHTML=puntosUsuario;
   usuarioPalabra= "usuario".fontsize(3).sup();
   computadoraPalabra= "comp".fontsize(3).sup();
  resultado_div.innerHTML= `${getPalabra(usuarioEleccion)}${usuarioPalabra}  vence a   ${getPalabra(eleccionComputadora)}${computadoraPalabra} . Tú ganas."`;
  usuarioEleccion_div.classList.add('brillo-verde');
  setTimeout(function(){usuarioEleccion_div.classList.remove('brillo-verde')},500);
}
function derrota(usuarioEleccion, eleccionComputadora){
  puntosComputadora++;
  let usuarioEleccion_div= document.getElementById(usuarioEleccion);
  puntosComputadora_span.innerHTML=puntosUsuario;
  resultado_div.innerHTML= `${getPalabra(usuarioEleccion)}${usuarioPalabra}  Es derrotado por   ${getPalabra(eleccionComputadora)}${computadoraPalabra} . Tú pierdes."`
  usuarioEleccion_div.classList.add('brillo-rojo');
  setTimeout(function(){usuarioEleccion_div.classList.remove('brillo-rojo')},500);
}
function empate(usuarioEleccion, eleccionComputadora){
  let usuarioEleccion_div= document.getElementById(usuarioEleccion);
  resultado_div.innerHTML= `${getPalabra(usuarioEleccion)}${usuarioPalabra}  Es igual a    ${getPalabra(eleccionComputadora)}${computadoraPalabra} . Es un empate."`
  usuarioEleccion_div.classList.add('brillo-gris');
  setTimeout(function(){usuarioEleccion_div.classList.remove('brillo-gris')},500);

}
function game(usuarioEleccion){
  let computadora = computadoraEleccion();
  switch(usuarioEleccion + computadora){
    case "pr":
    case "rs":
    case "sp":
        victoria(usuarioEleccion, computadora);
      break;
      case "rp":
      case "sr":
      case "ps":
          derrota(usuarioEleccion, computadora);
        break;
      default:
          empate(usuarioEleccion, computadora);
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
