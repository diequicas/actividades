let numero = '12345678w';

dni(numero);

function dni(numero) {
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    
    let resul = parseInt(numero) % 23;

    let letraIntroducida = numero.charAt(numero.length - 1).toUpperCase();
    
    let letraCorrecta = letras.charAt(resul);

    if (letraIntroducida === letraCorrecta) {
        console.log('Está bien');
    } else {
        console.log('El DNI es incorrecto. La letra esperada era: ' + letraCorrecta);
    }
}