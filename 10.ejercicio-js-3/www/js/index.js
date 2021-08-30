/* # Ejercicio 3

Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt(). */

function conversor(num, base) {
  if (base === 10) {
    console.log(num.toString(2));
  } else if (base === 2) {
    let sum = 0;
    let numReverse = num.toString().split('').reverse().join('');
    console.log(numReverse);

    for (index = 0; index < numReverse.length; index++) {
      sum = sum + numReverse[index] * 2 ** index;
    }

    console.log(sum);
  } else {
    console.log(
      `${base} no es una base correcta. Escriba Decimal(10) - Binario(2)`
    );
  }
}

conversor(40, 2);

// function BinarioADecimal(num) {

//   return sum;
// }

// console.log(BinarioADecimal('11110'));
