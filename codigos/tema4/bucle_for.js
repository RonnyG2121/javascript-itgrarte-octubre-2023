//Bucle for que cuenta
for (let index = 1; index <= 5;  index++) {
    //console.log(`Vuelta ${index}`);

    if (index === 3) {
        break;
    } else {
        console.log(index);
    }
}
console.log("Fin del programa");

//Mostrando la instrucción continue
for (let index = 1; index <= 10; index++) {
    console.log("Iniciando" + index);
    if (index === 5) {
        console.log("Continuamos la ejecución");
        continue;
    }
    
}