class Lançamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class ciclofinanaceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lançamentos = []
  }

  addLancamentos(...lançamentos) {
    lançamentos.forEach(l => this.lançamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lançamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lançamento('Salario', 45000)
const constaDeLuz = new Lançamento('Luz', -220)

const contas = new ciclofinanaceiro(6, 2018)
contas.addLancamentos(salario, constaDeLuz)
console.log(contas.sumario())