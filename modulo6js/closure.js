//Closure é o escopo craindo quando uma funçao é declarada
// esse escopo permite a função acessar e manipular variaveis externas a função

//contecto léxico em ação

const x = 'Global'

function fora() {
  const x = 'local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())