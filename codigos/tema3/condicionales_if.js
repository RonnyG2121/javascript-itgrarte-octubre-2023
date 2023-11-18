//Ejemplo de condicional if
/* Supongamos que queremos entrar  un club pero este tiene varias categorías.
una para menores
una para jóvenes adultos
y una para mayores de 40.
 */

let edad = 70;
let persona = "Pedro";

if (edad <= 17) {
    console.log(persona + "Tiene" + edad + "años" + "Y pertenece a la categoría menor");
}
else if (edad >= 18 && edad <=35) {
    console.log(persona + "Tiene" + edad + "años" + "Y pertenece a la categoría mayor o joven");

}
else if (edad >= 36 && edad <= 66) {
        console.log(persona + "Tiene" + edad + "años" + "Y pertenece a la categoría descenso");
    }
else {
    console.log("Edad incorrecta");
}