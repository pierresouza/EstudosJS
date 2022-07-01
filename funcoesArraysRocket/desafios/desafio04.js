//4. Criar um array que inicie com 5 e termine com 8
let start = 5;
let stop = 8;

length = stop - start + 1;

const mapFn = (_, index) => start + index;

const result = Array.from({ length }, mapFn); //uso do shorthand : caso o primeiro e segundo nome sejam iguais, é érmitido o uso do shrothand

console.log(result);
