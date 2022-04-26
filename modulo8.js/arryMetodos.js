const pilotos = ['Vettel', 'Alonso', 'Raikknonen', 'Massa']
pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//copia a informação do primeiro array após o item 2 e cria um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// vai do indice 1 ao 4, mas sem incluir o 4 no array
console.log(algunsPilotos2)