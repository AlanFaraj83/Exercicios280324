let nomePeca1 = prompt("Digite o nome da peça1:");
let nomePeca2 = prompt("Digite o nome da peça2:");
let quantidadePeca1 = parseInt(prompt("Digite a quantidade da peça1:"));
let quantidadePeca2 = parseInt(prompt("Digite a quantidade da peça2:"));
let valorPeca1 = parseFloat(prompt("Digite o valor da peça1:"));
let valorPeca2 = parseFloat(prompt("Digite o valor da peça2:"));
let valorTotalPeca1 = (quantidadePeca1 * valorPeca1);
let valorTotalPeca2 = (quantidadePeca2 * valorPeca2);
let valorTotalPecas =(valorTotalPeca1 + valorTotalPeca2);

console.log(`O nome da peça1 é: ${nomePeca1} e o valor total da peça1 é R$: ${valorTotalPeca1.toFixed(2)} e o nome da peça2 é: ${nomePeca2} e o valor total da peça2 é R$: ${valorTotalPeca2.toFixed(2)}  e o valor total das peças é de R$: ${valorTotalPecas.toFixed(2)}`);

alert(`O nome da peça1 é: ${nomePeca1} e o valor total da peça1 é R$: ${valorTotalPeca1.toFixed(2)} e o nome da peça2 é: ${nomePeca2} e o valor total da peça2 é R$: ${valorTotalPeca2.toFixed(2)}  e o valor total das peças é de R$: ${valorTotalPecas.toFixed(2)}`);