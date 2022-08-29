/*
Enunciado Ejercicio 2:

Dada una cadena de texto, comprobar si es un palindromo o no. Los palindromos son palabras que se leen igual aun estando invertidas.

Por ejemplo: ana, bob, otto, allivessevilla

No tener en cuenta espacios o simbolos raros.

Ejemplos: 
- Ejecuto esta funcion:
palindromo('otto') // Devuelve; true
palindromo('matias') // Devuelve: false

Como hacerlo:
- Funcion con parametro 'texto'
- Separar el texto en un array de letras
- Darle la vuelta
- Unir el array de letras en un string y comparar con el parametro recibido
*/

function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");

  return invertido === texto;
}

// MI SOLUCIÓN
// function palindromo(string) {
//   let stringModificado = string.split("").reverse().join("");

//   return stringModificado === string;
// }

// console.log(palindromo("otto"));
