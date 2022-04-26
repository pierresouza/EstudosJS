const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice,) {
  //adiciona mais 1 ao valor de cada indice para não iniciar no zero
  console.log(`${indice + 1}) ${nome} `)
})
aprovados.forEach(nome => console.log(nome))//exibe apenas o nome do itens no array

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)