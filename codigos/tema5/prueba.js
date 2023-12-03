// número par e impar
let num = 25;

if(num% 2 === 0) {
    console.log(`El número ${num} es par`);
} else {
    console.log(`El número ${num} no es par`);
}


// Programa que invierte una cadena de texto
// Usando el bucle for
let cadena = "hola";
let invertidaFor = "";

for (let letra = cadena.length -1; letra >= 0; letra--) {
    invertidaFor +=  cadena[letra];
}
console.log(invertidaFor);

// Usando una sola línea con  métodos de javascript
let cadena2 = "amor";
invertida2  = cadena2.split("").reverse().join(""); // Esta es la ínea que hace la magia que hacíamos con el for
console.log(invertida2);

// ejercicio que valida  que sea palíndromo
let cadena3 = "salas";
let invertida3 = cadena3.split("").reverse().join("");

if (cadena3 === invertida3) {
    console.log(`La palabra ${invertida3} es un palíndromo`);
} else {
    console.log(`La palabra ${invertida3} no es un palíndromo`);

}


// Tabla de multiplicar del 12
let valor = 5;
let multiplo = 0;
tabla = 1;
while (tabla <= 12) {
    multiplo = tabla * valor;
    console.log(`${valor} por ${tabla}: ${multiplo}`);
    tabla++;
}

// Programa que cuenta hasta un valor dado
let numero = 22;
for(let i = 1; i<= numero; i++) {
    if (numero <= 0 || numero > 10) {
        console.error("Escriba un número entre 1 y 10");
        break;
    } else {
        console.log(i)
    }
}

// función que muestra la fórmula para calcular el área de un rectángulo
function rectangulo () {
    return "La fórmula para calcular el área de un rectángulo es base por altura entre 2";
}

console.log(rectangulo());