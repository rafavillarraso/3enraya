fin=false;

function tirada(id){
    if (!fin){ 
        var contenido;
        contenido=getContenido(id);
        if ((contenido != "X") && (contenido != "O")) {
            document.getElementById(id).innerHTML="X";
        }
        comprobarGanador("X");
        if (!fin) {    
            tiradaMaquina();
            comprobarGanador("O");
        }
    }
   
}

function getContenido(id){
    return document.getElementById(id).textContent;
}

function tresEnRaya(num1,num2,num3,letra){
    var contenido1;
    contenido1=getContenido(num1);
    var contenido2;
    contenido2=getContenido(num2);
    var contenido3;
    contenido3=getContenido(num3);

    if (contenido1==contenido2 && contenido1==contenido3 && contenido1==letra) return true;
    else return false;
}


function comprobarGanador(letra){
    var texto;
    if (letra=="X") texto="GANADO"
    else texto="PERDIDO";

    var array = [1,2,3,4,5,6,7,8,9,1,4,7,2,5,8,7,6,9,1,5,9,3,5,7];
    
    for (i=0; i<array.length ; i=i+3 ) {
        if (tresEnRaya(array[i],array[i+1],array[i+2],letra))  {alert("HAS "+texto); fin=true; break;}
    }

/*
    if (tresEnRaya(1,2,3,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(4,5,6,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(7,8,9,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(1,4,7,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(2,5,8,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(7,6,9,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(1,5,9,letra)==1) {alert("HAS "+texto); fin=true;}
    else if (tresEnRaya(3,5,7,letra)==1) {alert("HAS "+texto); fin=true;}
*/
}

function tiradaMaquina(){
    var maquina, contenido;
    max=9;  min=1;   
    
    do {

        maquina = Math.floor(Math.random() * (max - min)) + min;
        contenido=getContenido(maquina);

        }while((contenido == "X") || (contenido == "O"))
    
        document.getElementById(maquina).innerHTML="O";
}


function limpiar(){
    for (i=1; i<=9; i++) {
        console.log(i);
        borrar (i);
    }
    function borrar (id){
        return document.getElementById(id).innerHTML="";
    }
}
