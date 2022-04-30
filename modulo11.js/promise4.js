function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
    resolve(aleatorio);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500)
  ]);
}

console.log('promise')
gerarVariosNumeros()
  .then(console.log)
  .then(()=>{
    console.timeEnd('promise')
  })
