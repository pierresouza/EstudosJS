function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor);
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(v => `Valor :${v}`)
    .then(v => console.log(v))
    .then(()=> console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))