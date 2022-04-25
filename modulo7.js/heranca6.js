function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const Aula1 = new Aula('Bem Vindo', 123)
const Aula2 = new Aula('Até Breve', 456)
console.log(Aula1, Aula2)

//simulando o new
function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const Aula3 = novo(Aula, 'Bem Vindo', 123)
const Aula4 = novo(Aula, 'Até Breve', 456)
console.log(Aula3, Aula4)