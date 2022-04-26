// ESB: object.values/object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return ' Oi gente'
  }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class animal { }
class chacorro extends animal {
  falar() {
    return 'Au au'
  }
}

console.log(new chacorro().falar())