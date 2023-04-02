let nombre = "Jose";
let apellido = "Sola";
let sueldoActual = 30000;

function calculadorSueldo(nombre, apellido, sueldoActual) {
  if (sueldoActual <= 33000) {
    let nuevoSueldo = sueldoActual + Math.floor((sueldoActual * 20) / 100);
    return `${nombre} ${apellido},
    sueldo actual: ${sueldoActual},
    aumento otorgado: 20%
    "Su nuevo sueldo es : ${nuevoSueldo}`;
  } else {
    let nuevoSueldo2 = sueldoActual + Math.floor((sueldoActual * 15) / 100);
    return `${nombre} ${apellido},
    sueldo actual: ${sueldoActual},
    aumento otorgado: 15%
    "Su nuevo sueldo es : ${nuevoSueldo2}`;
  }
}

console.log(calculadorSueldo(nombre, apellido, sueldoActual));
