/*
  8. seguindo os mesmo passos do exercício anterios, crie os dias da semana em formato longo(domingo) e curto (dom)

  Dicas: 
    - observe que na criação da nova data `new Date(0,0,0)` o primeiro argumento é a referência do ano o segundo é o mês e o terceiro é equivalente ao dia da semana.
    - observe que o objeto do segundo parâmetro da função `.toLocaleString()`
    está se referindo ao mês `month` e precisamos do dia da semana(weekday)
    - long ou short ?
 */

// const weekday = [
//   "Domingo",
//   "Segunda",
//   "Terça",
//   "Quarta",
//   "Quinta",
//   "Sexta",
//   "Sábado",
// ];

// const d = new Date();
// let day = weekday[d.getDay()];
// console.log(day);

const mapFn = (_, weekdayNumber) => {
  const date = new Date(0, 0, weekdayNumber);
  return date.toLocaleString("pt-BR", { weekday: "long" });
};

const result = Array.from({ length: 7 }, mapFn);
console.log(result);
