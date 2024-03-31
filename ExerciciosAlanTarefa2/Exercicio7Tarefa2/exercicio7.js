let numero = parseInt(prompt("Digite um número:"));

if (numero >=0 && numero <=999) {
    let centena = parseInt(numero / 100) *100;
    let dezena = parseInt((numero % 100) /10) * 10;
    let unidade = numero % 10;

    alert(`O número digitado é: ${numero}`);
    alert(`Centena = ${centena}`);
    alert(`Dezena = ${dezena}`);
    alert(`Unidade = ${unidade}`);

    console.log(`O número digitado é: ${numero}`);
    console.log(`Centena = ${centena}`);
    console.log(`Dezena = ${dezena}`);
    console.log(`Unidade = ${unidade}`);

    

} else {
    console.log("Por favor digitar um número entre 0 e 999 corretamente.");

}
    


