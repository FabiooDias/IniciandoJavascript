/*const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragrama = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragrama)*/

//let varInicial = 0;
//let ifFalse = 0;
//let constDeTexto = "Alura";

/*{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
let idade;
const pi = 3.14;
console.log(respostaDeTudo, idade, pi)*/


//console.log("deu erro");
//console.error(new Error ("deu erro"));

/*const nome = "Fabio"
const idade = 36
const bebidaMaior = "cerveja"
const bebidaMenor = "suco"

const pedido = `${nome} diz: 'Por favor quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}'`
console.log(pedido)*/

//const forma = "quadrado"
//const lado1 = 10
//const lado2 = 10

//function calculoArea (lado1, lado2, forma){
//    const area = `Iremos calcular um ${forma}: De acordo com as medidas que foram passadas a area do ${forma} é igual a: ${forma == "quadrado" ? lado1 * lado2 : "não podemos calcular essa area."}`
//    console.log(area)
//}

//calculoArea(lado1, lado2, forma)
//const somar = function(num1, num2) {
//    return num1 + num2
//}

//console.log(somar(1, 2))

function apresentar(nome) {
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "Somente numeros de 1 a 10"  
    } else {
        return num1 + num2
    }
}

