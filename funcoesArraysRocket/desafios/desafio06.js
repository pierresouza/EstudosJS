/*
  6. Crie um array que tenha em suas posições de A - Z.

  - Dicas:
    - Cada caracter de uma  `String` corresponde a um número. use `String.charCodeAt(0)`(Sendo 0 a posição inicial da cade de String) para pegar o número de referência da String desejada
    -É possível transformar um número em uma String. Utilize `String.fromCharCode(<x>)` Sendo x o número de referência do caracter.
    - Utilize a função anterior para criar um intervalo número correspondente de A - Z
*/

function range(start, stop) {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  length = stop - start + 1;

  const mapFn = (_, index) => start + index;
  const result = Array.from({ length }, mapFn); //uso do shorthand : caso o primeiro e segundo nome sejam iguais, é érmitido o uso do shrothand

  return result;
}
const result = range(65, 90).map((n) => String.fromCharCode(n));

console.log(result);
