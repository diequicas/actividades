
let arrayNotas = [5,4,5,6,7];
console.log(arrayNotas)

notaMedia(arrayNotas)


function notaMedia(arrayNotas) {
    console.log(arrayNotas)
    let suma = 0;
    let totalNotas = 0;
    for (nota of arrayNotas) {
        suma += nota;
        totalNotas++;
    }
    let media = suma / totalNotas;
    console.log(media.toFixed(1));
    return media.toFixed(1);
    
}
 