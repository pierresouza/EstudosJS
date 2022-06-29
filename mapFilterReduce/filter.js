const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3];

function aprovado(nota) {
  return nota >= 7;
}

const resultado = notas.filter(aprovado);
console.log("🚀 ~ file: filter.js ~ line 8 ~ resultado", resultado);
