//Este es un comentario de una sola línea.

/*
Este es un comentario multilínea. Válido cuando quieres extenderte en aplicaciones o encerrar grandes bloques de código que no necesitas usar.
Javascript es el rey de la web.
*/

//Creando mi primera variable
let miVariable1 = 1;

//Mostrando información por pantalla. En este caso la variable
console.log("Resultado de la primera variable" + miVariable1);

//Declarando otra variable
let miVariable2 = 2;

//Mostrando por pantalla
console.log("Resultado de la variable 2 " + miVariable2);

//Modificando el valor de la variable1
miVariable1 = 5;

//Variable que hace el proceso o la operación matemática
let resultado = miVariable1 * miVariable2;

//Mostrando por pantalla la operación
console.log("El resultado es: " + resultado);

//Creando una constante
const miConstante1 = 3.1416;

//Mostrando por pantalla la constante
console.log(miConstante1);

//Reasignando el valor a una constante(Da error)
//miConstante1 = 10;

/*
Debido a que las constantes no se puede modificar su valor, Arrojará el siguiente mensaje:
TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Users\RonnyG2121\Documents\repositorios git\javascript-itgrarte2023\codigos\tema1\hola_mundo.js:36:14)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
Node.js v18.17.0

*/
