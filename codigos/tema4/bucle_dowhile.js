//Declarando el bucle dowhile

let numero = 11;

do {
    if (numero < 1) {
        break;
    }
    console.log("Estamos dentro del do while");
    numero--;
} while (numero < 11);
/*while (numero > 11) {
    console.log("Estamos dentro del while");
}
*/
console.log("Salimos del bucle while");