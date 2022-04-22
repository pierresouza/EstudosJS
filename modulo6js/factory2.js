function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1 
    }
}

console.log(criarProduto('Notebook', 3300.00))
console.log(criarProduto('Laptop', 2300.00))