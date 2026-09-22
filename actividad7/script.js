let numero = prompt("Ponme un numero","0");

function factorial(numero){
    for(let i= numero - 1;i > 0;i--){
        numero = numero * i;
    }
    console.log(numero);
}
factorial(numero);