/*
Enunciado Ejercicio 3:

Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una función.

Como hacerlo:
- Función con dos parametros "frase" y "busqueda"
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una
- Devolver el contador de la busqueda
*/

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
  let resultado = 0;

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }

    resultado = mapa[busqueda];

    console.log(palabras);
  } else {
    resultado = 0;
  }

  return resultado;
}

// MI SOLUCIÓN
// let frase = "Hola como estas, Hola, Hola, dime tu como estas";
// let palabra = "Arroz";

// function buscarPalabra(frase, palabra) {
//   // Primero reemplazo las posibles "," por nada, para evitar problemas. Luego, separo el texto con espacios.
//   fraseDividida = frase.replaceAll(",", "").split(" ");

//   // Luego creo una variable para contar las coincidencias.
//   let coincidencias = 0;

//   // Creamos un ciclo for para comparar nuestra palabra con cada una de las palabras de la frase.
//   for (let index = 0; index < fraseDividida.length; index++) {
//     // Si son iguales, sumamos 1 al contador
//     palabra === fraseDividida[index] && coincidencias++;
//   }

//   // Devolvemos el contador
//   return coincidencias;
// }

// console.log(buscarPalabra(frase, palabra));
