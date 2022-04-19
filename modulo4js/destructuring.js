// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)// estrai e mostra dados específicados

const { sobrenome, bemHumordada = true } = pessoa
console.log(sobrenome, bemHumordada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// não irá acessar pois não definido
const { conta: { ag, num } } = pessoa
console.log(ag, num)