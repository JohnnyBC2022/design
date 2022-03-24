var imagen1="https://images.unsplash.com/photo-1643109542145-18ea2634f665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTgwMTAyNQ&ixlib=rb-1.2.1&q=80&w=400";

var imagen2="https://images.unsplash.com/photo-1643653187273-8825fae154bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTgwMTI0MQ&ixlib=rb-1.2.1&q=80&w=400";

var imagen3="https://images.unsplash.com/photo-1644186194243-ab96433ecf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTgwMjAzMw&ixlib=rb-1.2.1&q=80&w=400";

var imagen4="https://images.unsplash.com/photo-1643861707106-5ed1e3c52a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTgwMjA4OQ&ixlib=rb-1.2.1&q=80&w=400";

var foto;

var diapositiva = 0;

function siguiente(){
  if(diapositiva==0){
    foto = imagen1;
    diapositiva++;
  }
  
  else if(diapositiva==1){
    foto = imagen2;
    diapositiva++;
  }
  
  else if(diapositiva==2){
    foto = imagen3;
    diapositiva++;
  }
  
  else if(diapositiva==3){
    foto = imagen4;
    diapositiva=0;
  }
  
  document.getElementById('mifoto').src = foto;
}

function anterior(){
  if(diapositiva==3){
    foto = imagen4;
    diapositiva--;
  }
  
  else if(diapositiva==2){
    foto = imagen3;
    diapositiva--;
  }
  
  else if(diapositiva==1){
    foto = imagen2;
    diapositiva--;
  }
  
  else if(diapositiva==0){
    foto = imagen1;
    diapositiva=3;
  }
  
  document.getElementById('mifoto').src = foto;
}