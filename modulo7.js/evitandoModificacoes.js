//object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoçao'
})
console.log('Extensível', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// object.freeze = selado + valores contantes