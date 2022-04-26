// let e const
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)

//Template string
const produto = 'Ipad'
console.log(`${produto} é caro`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)