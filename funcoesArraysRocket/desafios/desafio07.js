/*
  7. Crie um array de meses do ano, onde cada posição do array corresponderá ao nome do mês.

  ex.: janeiro, para o mês 0 e dezembro para o mês 11

  - Dicas:
    - Utilize `new Date(0,0)` para cirar o mês de janeiro (modifique o segundo argumento para 11 e você criará o mês de dezembro)
    - Utilize o método `Date.LocaleString()` para formatar os meses em português 
      - Esse método receberá 2 argumentos, sendo o primeiro, uma string contendo o local da formatação
      `pt-BR` e  o segundo, um objeto que tenha a chave `month` com o valor `'long'`
*/

const mapFn = (_, numberOfMonth) => {
  const date = new Date(0, numberOfMonth);

  return date.toLocaleString("pt-BR", { month: "long" });
};
const result = Array.from({ length: 1 }, mapFn);

console.log(result);
