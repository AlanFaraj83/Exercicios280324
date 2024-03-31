let numero1 = parseInt(prompt("Digite o primeiro numero:"));
let numero2 = parseInt(prompt("Digite o segundo numero:"));

if(numero1 > numero2) {
    alert(`imprima o maior numero: ${numero1}` );
    console.log(`imprima o maior numero: ${numero1}` );
    
} else if (numero2 > numero1) {
    alert(`imprima o maior numero: ${numero2}` );
    console.log(`imprima o maior numero: ${numero2}` );
} else {
    alert(`Os números são iguais: ${numero1}`);
    console.log(`Os números são iguais: ${numero1}`);
}


