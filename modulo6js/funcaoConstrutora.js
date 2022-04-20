function carro(velocidadeMaxima = 200, delta = 5) {
  //stributo privado
  let velocidadeAtual = 0

  // metodp publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)