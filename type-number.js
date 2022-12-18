// tipo numerico inteiro
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

/**
 * = Multiplicacao
 / = Divisao 
 + = Soma
 - = Subtração
 */
const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

const numeroPontoFlutuante = 3.3;
//Ele interpreta que é um zero antes
const pontoFlutuante = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not A Number(Não é um número)
const alura = "Alura";
console.log(alura * primeiroNumero);