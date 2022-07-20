//soma de todos os valores de uma array
let total = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
console.log(total); //retorna 6

//soma de todos os valores de uma array usando arrow function

let TotalArrowFN = [0, 1, 2, 3].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(TotalArrowFN);

// soma de valores de um objeto de um array
let valorInicial = 0;
let soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual.x;
}, valorInicial);
console.log(soma); //retorna n6

//soma dos valores de um objeto de um array utilizando arrow function
