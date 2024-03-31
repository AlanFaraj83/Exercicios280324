let ano = 2024;
let anoNasc = parseInt(prompt("Digite o ano de seu nascimento:"));
let idade = ano - anoNasc;

switch(true) {
    case (idade > 18 && idade < 70):
        alert(`O voto é obrigatorio para ${idade} anos.`);
        console.log(`O voto é obrigatorio para ${idade} anos.`);
    break;

    case (idade >=16 && idade <=18):
        alert(`O voto é opcional para ${idade} anos.`);
        console.log(`O voto é opcional para ${idade} anos.`);
    break;

    default:
        alert(`O voto é proibido para ${idade} anos.`);
        console.log(`O voto é proibido para ${idade} anos.`);

}