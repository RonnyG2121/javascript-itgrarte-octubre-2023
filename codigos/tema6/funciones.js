// Declarando una función
function saludo() {
    return "Hola";
    console.log("Esto no se ejecutará");
}

// Llamando la función
saludo();
console.log(saludo());

// Declarando una función expresada y flecha

const flecha = () => {
    return "Esto es una función expresada y flecha (arrow function)"
}


// Funciones con parámetros
function saludaConNombre (nombre) {
    return `Hola ${nombre}`
}
console.log(saludaConNombre("Nadia"));

const cuadrado = (lado) => {
    return lado* lado;
}

console.log(cuadrado(4));

