let numero = 5;
let usu = prompt('Pon un numero','0');
let aux = 0;
let intentos = 0;

do{
if(usu == 5){
    aux = 1;
    intento++;
    alert('Has adivinado el numero en' + intentos +', felicidades');
    
}
else if(usu > numero){
    alert('Tu numero es mayor que el mio');
    intento++;
}
else if(usu < numero){
    alert('Tu numero es menor que el mio');
    intento++;
}
}while(aux == 0);