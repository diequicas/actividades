let numeros = [1,2,3,4,5,6,7,8,9,0];

function modo1(){
    let media;
    let indice;
    for(indice in numeros){
        media += numeros[indice];   
    }
    media = media / indice;
}
function modo2(){
    let media;
    for(let i = 0;i < numeros.length;i++){
        media += numeros[i];   
    }
    media = media / indice;
}
function modo3(){
    let media;
    let i;
    for(i of numeros){
        media += i;   
    }
    media = media / i;
}
modo1(numeros);
modo2(numeros);
modo3(numeros);