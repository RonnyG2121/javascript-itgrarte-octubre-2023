// Creando objetos
const mi_objeto = {
    nombre: "Juan",
    edad: 25,
    identificacion: 1234567,
    canciones: [],
    hablilidades: {},
    caminar: function() {},
}

console.log(mi_objeto.edad);
// Modificando propiedades
mi_objeto.edad = 30;
console.log(mi_objeto.edad);
mi_objeto.caminar = function() {
    return "Soy capaz de caminar";
}

console.log(mi_objeto.caminar());
// llamando un objeto o recorriendo

console.log(mi_objeto);

for (const key in mi_objeto) {
    if (Object.hasOwnProperty.call(mi_objeto, key)) {
        const element = mi_objeto[key];
        
        console.log(element);
    }
}

