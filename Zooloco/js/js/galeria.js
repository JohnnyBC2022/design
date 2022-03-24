var cabezas = [
    'Elefante-cabeza.png',
    'Oso-cabeza.png',
    'Perro-cabeza.png',
    'Panda-cabeza.png',
    'Buho-cabeza.png',
    'Tigre-cabeza.png'
];

var cuerpos = [
    'Elefante-cuerpo.png',
    'Oso-cuerpo.png',
    'Perro-cuerpo.png',
    'Panda-cuerpo.png',
    'Buho-cuerpo.png',
    'Tigre-cuerpo.png'
];

var patas = [
    'Elefante-patas.png',
    'Oso-patas.png',
    'Perro-patas.png',
    'Panda-patas.png',
    'Buho-patas.png',
    'Tigre-patas.png'
];

var n_cabeza = 0;
var n_cuerpo = 0;
var n_pata = 0;


function cabeza() {
    if (n_cabeza < cabezas.length - 1) {
        n_cabeza++;
    } else {
        n_cabeza = 0;
    }
    document.getElementById('cabezas').style.backgroundImage = "url('img/" + cabezas[n_cabeza] + "')";
}

function cuerpo() {
    if (n_cuerpo < cuerpos.length - 1) {
        n_cuerpo++;
    } else {
        n_cuerpo = 0;
    }
    document.getElementById('cuerpos').style.backgroundImage = "url('img/" + cuerpos[n_cuerpo] + "')";
}

function pata() {
    if (n_pata < patas.length - 1) {
        n_pata++;
    } else {
        n_pata = 0;
    }
    document.getElementById('patas').style.backgroundImage = "url('img/" + patas[n_pata] + "')";
}

function aleatorio() {
    document.getElementById('cabezas').style.backgroundImage = "url('img/" + cabezas[random(0, cabezas.length - 1)] + "')";
    document.getElementById('cuerpos').style.backgroundImage = "url('img/" + cuerpos[random(0, cuerpos.length - 1)] + "')";
    document.getElementById('patas').style.backgroundImage = "url('img/" + patas[random(0, patas.length - 1)] + "')";
}




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


aleatorio();