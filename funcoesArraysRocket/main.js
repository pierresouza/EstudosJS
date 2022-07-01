const latinhas = ["coca-cola", "sprite"];

latinhas.push("Coleção-especial");

const latinhasNaoSprites = latinhas.filter((latinha) => {
  return latinha !== "sprite";
});

const latinhaCoca = latinhas.find(function (latinha) {
  return latinha === "coca-cola";
});

const found = latinhas.includes("Coleção-especial", 1);

novasLatinhas = [...latinhas, "tubaína"];

const latinhasAtualizadas = novasLatinhas.slice(-2);

latinhas.pop();
console.log(latinhas);
