let aluno = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
let media = (nota1*4 + nota2*6)/(4 + 6);

console.log(`A media do aluno ponderada ${aluno} é: ${media}`);
alert(`A media do aluno ponderada ${aluno} é: ${media}`);