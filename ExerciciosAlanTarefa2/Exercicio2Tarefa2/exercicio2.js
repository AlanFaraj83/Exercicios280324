let nome = prompt("Digite seu nome:");
let genero = prompt("Digite seu genero:").toUpperCase();
let tipogenero;

switch (genero) {
    case 'M':
        tipogenero = 'masculino';
        break
    case 'F':
        tipogenero = 'feminino';
        break
    case 'O':
        tipogenero = 'outro';
        break
    case 'N':
        tipogenero = 'não responder';  
    default:
        tipogenero = 'invalido'     
}

console.log(`Olá, ${nome}, Você decidiu escolher o seu gênero para: ${tipogenero}`);
alert(`Olá, ${nome}, Você decidiu escolher o seu gênero para: ${tipogenero}`);
