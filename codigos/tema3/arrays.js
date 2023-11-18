//Declarando un array o matriz
const arreglo = ["primer elemento", 100, true, {}];
let longitud_array = arreglo.length;
console.log(longitud_array);

//Accediendo a un elemento de un array
console.log(arreglo[0]);


//Recorriendo un array
for (let i = 0; i < arreglo.length; i++) {
    console.log(`Elemento ${i}:
    ${arreglo[i]}`);
}

