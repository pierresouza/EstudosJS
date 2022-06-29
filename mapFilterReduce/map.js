const produtos = [
  { nome: "teste", preco: 23.67, desconto: 0.2 },
  { nome: "teste", preco: 120.99, desconto: 0.3 },
  { nome: "teste", preco: 3567.67, desconto: 0.5 },
  { nome: "teste", preco: 10.8, desconto: 0.1 },
  { nome: "teste", preco: 7.43, desconto: 0.5 },
  { nome: "teste", preco: 12355.33, desconto: 0.15 },
];

function getCusto(PrecoComDesconto) {
  return parseInt(PrecoComDesconto * 0.3);
}

function getPrecoComDesconto(produto) {
  return produto.preco * (1 - produto.desconto);
}

function altoCusto(produto) {
  return produto.preco >= 1000;
}

const resultado = produtos
  .filter(altoCusto)
  .map(getPrecoComDesconto)
  .map(getCusto);
console.log(resultado);
