Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice,) {
  //adiciona mais 1 ao valor de cada indice para não iniciar no zero
  console.log(`${indice + 1}) ${nome} `)
})