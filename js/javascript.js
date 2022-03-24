const e1= document.getElementById('ejercicios');
const e2= document.getElementById('btn_cambiar');

function cambiar() {
    if (e1.className == 'lista'){
        e1.className = 'rejilla';
        e2.innerText = "Modo lista"; 
    }else{
        e1.className = 'lista';
        e2.innerText = 'Modo rejilla';
    }
}

cambiar();