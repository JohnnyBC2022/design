/* Lugar para saber en qué miniatura estoy */
let miniatura = 1;

/* Mi array que ye pa arreai, que es muy largo */
let animacion = [
  [
    "Principio 1",
    "Estirar y encoger",
    "Esta acción crea ilusión de peso y volumen a un personaje mientras se mueve",
    "img/img01.jpg",
  ],
  [
    "Principio 2",
    "Anticipacion",
    "Prepara a la audiencia para una acción principal que el personaje va a realizar. Cada acción principal viene precedida por movimientos específicos que anticipa a la audiencia qué es lo que va a ocurrir",
    "img/img02.jpg",
  ],
  [
    "Principio 3",
    "Puesta en escena",
    "Es la presentación de una idea de tal manera que quede clara",
    "img/img03.jpg",
  ],
  [
    "Principio 4",
    "Hacia adelante y pose a pose",
    "La animación pose a pose se consigue con dibujos claves hechos a intervalos a lo largo de la escena. En la animación hacia adelante se comienza con el primer dibujo y se sigue dibujando cada imagen hasta el final de la escena",
    "img/img04.jpg",
  ],
  [
    "Principio 5",
    "Seguimiento y superposición",
    "Cuando el cuerpo principal del personaje se para, el resto de partes continúan animadas para alcanzarla. Nada se detiene a la vez",
    "img/img05.jpg",
  ],
  [
    "Principio 6",
    "Desaceleración y aceleración",
    "Cuando empieza la acción tenemos más dibujos cerca del punto de comienzo, uno o dos en el centro y más dibujos cerca de la siguiente pose. Menos dibujos hacen que la accion sea más rápida y más dibujos hacen que la acción sea más lenta.",
    "img/img06.jpg",
  ],
  [
    "Principio 7",
    "Arcos",
    "Todas las acciones, con algunas excepciones, siguen una traectoria en arco o con forma circular. Los arcos le dan a la animación un estilo más natural y un mejor flujo",
    "img/img07.jpg",
  ],
  [
    "Principio 8",
    "Acciones secundarias",
    "Es una acción adicional en la escena utilizada como suplemento de la principal para reforzarla y darle más dimensión.",
    "img/img08.jpg",
  ],
  [
    "Principio 9",
    "Tiempos",
    "Más dibujos entre las poses hace que la acción sea más lenta y suave. Menos dibujos hacen que la acción sea más rápida y nítida. Los tiempos mantienen la sensación de que un objeto se mueve por las leyes de la física",
    "img/img09.jpg",
  ],
  [
    "Principio 10",
    "Exageración",
    "Mantente cercano a la realidad. Simplemente preséntala de una manera más salvaje y extrema.",
    "img/img10.jpg",
  ],
  [
    "Principio 11",
    "Dibujos sólidos",
    "Significa tener en cuenta las formas en un espacio en tres dimensiones, dándoles volúmen y peso.",
    "img/img11.jpg",
  ],
  [
    "Principio 12",
    "Atracción",
    "Es la cualidad del encanto capaz de captar la atención de los espectadores. Es el carisma de la acción",
    "img/img12.jpg",
  ],
];

// Crea un listado de miniaturas
function cargar() {
  let html = "";
  
  for (let i = 0; i < animacion.length; i++) {
    html += '<li id="anim' + (i + 1) + '">';
    html += '<a onclick="mostrarImg(' + (i + 1) + ')">';
    html += '<img src="' + animacion[i][3] + '" alt="' + animacion[i][1] + '">';
    html += "</a>";
    html += "</li>";
  }

  document.getElementById("capturas").innerHTML = html;
}

cargar();


function mostrarImg(mini) {
  // igualo el valor del mini solicitado a dondetoy
  miniatura = mini;

  //convertir a formato array
  mini = mini - 1;

  //mostramos la info sacada del array y la colocamos donde estén los ids
  document.getElementById("imagen").src = animacion[mini][3];
  document.getElementById("titulo").innerHTML = animacion[mini][0];
  document.getElementById("subtitulo").innerHTML = animacion[mini][1];
  document.getElementById("descripcion").innerHTML = animacion[mini][2];
  

  
}

// nada más cargar la web
mostrarImg(miniatura);




/* funcion para hacer que la galeria pase a la imagen siguiente */



function siguiente() {
    let valor;
    if (miniatura < animacion.length) {
        valor = miniatura + 1;
        mostrarImg(valor);
        document.getElementById("sig").style.display = "block";
    }
   
    
}
/* funcion para hacer que la galeria pase a la imagen anterior */

function anterior() {
    let valor;
    if (miniatura > 1) {
        valor = miniatura - 1;
        mostrarImg(valor);
        document.getElementById("ant").style.display = "block";
        
  }
  
  
}
/* función para ocultar el botón siguiente cuando llegue a la última imagen */

function ocultarsig(){
    if (miniatura == 12){
        document.getElementById("sig").style.visibility = "hidden";
    }
    
}
/* función para ocultar el botón anterior cuando llegue a la primera imagen */

function ocultarant(){
    if (miniatura == 1){
        document.getElementById("ant").style.visibility = "hidden";
    }
    
}

ocultarant();

/* función para mostrar los botones */
function mostrar(){

    if(miniatura >= 2 && miniatura <=11 ) {
        document.getElementById("sig").style.visibility = "visible";
        document.getElementById("ant").style.visibility = "visible";
    }
    
}