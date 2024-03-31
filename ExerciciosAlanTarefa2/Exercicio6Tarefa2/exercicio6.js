let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let valorPagoCliente =parseFloat(prompt("Digite o valor recebido pelo cliente:"));
let troco = (valorPagoCliente - valorProduto ).toFixed(2)

console.log(`O troco a ser entregue ao cliente é R$ ${troco}`);