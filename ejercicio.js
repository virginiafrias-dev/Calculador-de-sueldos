let nombre = "Veronica";
let apellido = "Aguirre";
let sueldoActual = 50000;

function calculadorSueldo(nombre, apellido, sueldoActual) {
  if (sueldoActual <= 33000) {
    let nuevoSueldo = sueldoActual + Math.floor((sueldoActual * 20) / 100);
    return `${nombre} ${apellido},
    Sueldo actual: ${sueldoActual},
    Aumento otorgado: 20%,
    Su nuevo sueldo será : $${nuevoSueldo}`;
  } else {
    let nuevoSueldo2 = sueldoActual + Math.floor((sueldoActual * 15) / 100);
    return `${nombre} ${apellido},
    Sueldo actual: ${sueldoActual},
    Aumento otorgado: 15%,
    Su nuevo sueldo será : $${nuevoSueldo2}`;
  }
}

console.log(calculadorSueldo(nombre, apellido, sueldoActual));
