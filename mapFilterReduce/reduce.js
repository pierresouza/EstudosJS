 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media(acc, num) {
  const novoTotal = acc.total + num;
  const novaQtde = acc.qtde + 1;
  return {
    total: novoTotal,
    qtde: novaQtde,
    media: novoTotal / novaQtde,
  };
}
const valorInicial = { tottal: 0, qtde: 0, avg: 0 };
const valorFinal = numeros.reduce(media, valorInicial);

console.log(valorFinal.media);
