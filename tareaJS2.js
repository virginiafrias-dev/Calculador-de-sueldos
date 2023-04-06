let nombre = "Maria";
let apellido = "Sola";
let sueldoActual = 35000;
let porcentajeDeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeDeAumento) / 100;

let nuevoSueldo = calculoAumento + sueldoActual;

console.log(`Hola ${nombre} ${apellido}
En base a su sueldo actual:
$${sueldoActual} 
Ha recibido un aumento del ${porcentajeDeAumento}:
$${calculoAumento}
y su nuevo sueldo es de:$${nuevoSueldo}`);
