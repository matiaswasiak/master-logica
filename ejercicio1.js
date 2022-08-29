/*
  Enunciado Ejercicio 1:
  Dado un número, devolver su tabla de multiplicar completa.

  Ejemplo:
  - Ejecuto esta función:
  tablaMultiplicar(5)

  - Me devuelve este resultado: 
  # Tabla del 5 #
  1 x 5 = 5
  5 x 5 = 25
  10 x 5 = 50
 */

function tablaMultiplicar(numero) {
  let resultado = `# Tabla del ${numero} # \n`;

  for (let index = 1; index <= 10; index++) {
    let multiplicacion = index * numero;

    resultado += `${index} x ${numero} = ${multiplicacion} \n`;
  }

  return resultado;
}

console.log(tablaMultiplicar(5));

// MI SOLUCIÓN
// function tablaMultiplicar(numero) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(numero * i);
//   }
// }

// console.log(tablaMultiplicar(5));
