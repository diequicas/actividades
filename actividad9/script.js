let numeros = [20, 100, 50];

function modo2() {
    let media = 0; 

    for (let i = 0; i < numeros.length; i++) {
        media += numeros[i];   
    }
    media = media / numeros.length;
    
    if (media < 0 || media > 10) { 
        throw "Nota media erronea";
    }
    return media; 
}

try {

    let resultad = modo2(); 
    console.log("La media es: " + resultadoMedia); 
} catch(err) {
    alert(err); 
}