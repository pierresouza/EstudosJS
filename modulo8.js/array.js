console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
//atribui novo valor ao indice 3
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
//atribui novo valor ao indice 9
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// ordena os itens do array organizados
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//splice permite adicionar ou excluir  itens no array
aprovados.splice(1, 1,)
console.log(aprovados)