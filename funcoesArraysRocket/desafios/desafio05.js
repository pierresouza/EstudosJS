/*5. Transforme o desafio anterior em uma função que vai receber dois argumentos

  - Afunção sempre irá retornar um array
  -Quando receber 1 argumento a função irá retornar de 1 até o número recebido
  -Quando receber 2 argumentos a função irá retornar do primeiro até o segundo argumento
  ex.: fn(4) // [1,2,3,4] | fn(3,7) //[3,4,5,6,7]

*/

function range(start, stop) {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  length = stop - start + 1;

  const mapFn = (_, index) => start + index;
  const result = Array.from({ length }, mapFn); //uso do shorthand : caso o primeiro e segundo nome sejam iguais, é érmitido o uso do shrothand

  console.log(result);
}

range(4);
range(3, 7);
