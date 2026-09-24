let misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function modo1(arr) {
    let media = 0; 
    for(let indice in arr) {
        media += arr[indice];   
    }
    
    return media / arr.length; 
}


function modo2(arr) {
    let media = 0; 
    for(let i = 0; i < arr.length; i++) {
        media += arr[i];   
    }
    return media / arr.length;
}

function modo3(arr) {
    let media = 0; // Inicializar a 0
    for(let valor of arr) {
        media += valor;   
    }
    return media / arr.length;
}

console.log("Modo 1:", modo1(misNumeros)); 
console.log("Modo 2:", modo2(misNumeros)); 
console.log("Modo 3:", modo3(misNumeros)); 