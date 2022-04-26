const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true },
  { nome: 'Copo De Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo De Plástico', preco: 18.99, fragil: false }
]
//filtra itens a partir da condição do return
console.log(produtos.filter(function (p) {
  return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))