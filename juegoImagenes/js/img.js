var fotos = ['americano.jpeg', 
    'cenital.jpeg', 
    'contrapicado.jpeg', 
    'gran_plano_general.jpeg', 
    'nadir.jpeg', 
    'panoramico.jpeg', 
    'picado.jpeg', 
    'plano_detalle.jpeg', 
    'plano_general.jpeg', 
    'plano_medio.jpeg', 
    'primer_plano.jpeg'];

var numero;
    
    function imagenAleatoria(){    
        numero = Math.floor(Math.random()*fotos.length);
        document.getElementById("muestra").innerHTML = '<img src="img/'+fotos[numero]+'" />';
        document.getElementById('muestra').style.filter = 'sepia(100%)';
        document.getElementById('muestra').style.transform = 'scale(1)';
        document.getElementById('muestra').style.transition = '0.1s';
    }
    
    

var puntos = 0;
var turnos = 0;

function comprobar(){
    var seleccionado=document.getElementById("opcion").value;
    if (seleccionado == numero) {
        document.getElementById('resultado').innerHTML = "Enhorabuena, has acertado";
        document.getElementById('resultado').style.color = 'green';
        document.getElementById('muestra').style.filter = 'sepia(0%)';
        document.getElementById('muestra').style.transform = 'scale(1.3)';
        document.getElementById('muestra').style.transition = '3s';
        puntos++;  
    }
    
    else {
        document.getElementById('resultado').innerHTML = "Has fallado";
        document.getElementById('resultado').style.color = 'red';
    }
    
    document.getElementById('aciertos').innerHTML = puntos + " puntos de " +turnos+" turnos.";
}




 /* cuenta intentos 
var botonElement = document.getElementById("comprobar");
var pElement = document.getElementById("areaContador");
var contador = 0;
function contar() {
    contador++;
    pElement.textContent = contador;
}
*/

// Resetea intentos 

//var resetElement = document.getElementById("siguiente");
function resetear() {
    //contador = 0;
    //pElement.textContent = contador;
    document.getElementById('resultado').innerHTML = "";
    turnos++;
}

/* var aciertos = 0;
function  contarAciertos() {
    if (acierto == true) {
        aciertos++;
        document.getElementById('aciertos').innerHTML = aciertos;
    }
} */


imagenAleatoria();