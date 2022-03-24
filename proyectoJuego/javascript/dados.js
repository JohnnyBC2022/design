// Declaramos las variables que vamos a necesitar

var cube = document.querySelector('.cubo');
var rollBtn = document.querySelector('.tiradaBtn');
var currentClass = '';
var texto1 = "Carlson se levanta rapida, pero torpemente hacia la puerta tropezandose con varios de los muebles, cuando consigue abrir la puerta, el misterioso mensajero ha desparecido. Fin del juego";
var texto2 = "Carlson se levanta agilmente, únicamente entorpecido por el pomo de la puerta, lo que hace que se demore al abrir la puerta. Cuando finalmente la abre, observa una fugaz sombra que ya está bajando las escaleras. <br>Vuelve a tirar.";
var texto3 = "Carlson raudo y veloz, abre la puerta rápidamente y ve a un hombre de espaldas llegando a las escaleras del rellano y consigue distinguir claramente que es una corpulenta figura cubierta con un chubasquero negro en cuya mano puede observarse unas largas uñas y una piel verduzca. Comienza la aventura.....";

// Esta función generará un número aleatorio entre 1 y 6 y le asigna un texto en función de su valor
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
if (numeroAleatorio == 1 || numeroAleatorio == 2) {
      
   document.getElementById("puerta").innerHTML = texto1; 
} 
    
else if(numeroAleatorio == 3 || numeroAleatorio == 4){
    document.getElementById("puerta").innerHTML = texto2;
}

else {
    document.getElementById("puerta").innerHTML = texto3;

}
    return numeroAleatorio;
   
}

// Nuestra tirada principal del dado al hacer click

function rollDice() {
    // Genera un número aleatorio entre 1 y 6 con la función getRandomInt
 var randNum =getRandomInt(1,7); 
  console.log(randNum )
//   Genera una clase con el número aleatorio entre 1 y 6 llamada showClass
  var showClass = 'mostrar-' + randNum;
  console.log(showClass)
//   si hay una clase selecionada la borra
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
//   Añade la nueva showclass con el número generado
  cube.classList.add( showClass );
//   establece la clase actual al número generado aleatoriamente
  currentClass = showClass;
 
}
// establece el lado inicial
rollDice();
// click en el evenlistener para el botón
rollBtn.addEventListener("click", rollDice);

// nos muestra la div que está oculta al principio tras hacer click en el botón
function mostrar(){
    var contenedor = document.getElementById("puerta");	
    
    contenedor.style.display = "block";	
		

}