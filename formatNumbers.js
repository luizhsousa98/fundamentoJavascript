function ganhoPorHora(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    return salarioHora;
}

console.log(ganhoPorHora(3000, 176));

//Arredondando numero para o inteiro mais proximo
function ganhoPorHoraRound(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    return Math.round(salarioHora);
}

//No Javascript nao precisa de ponto e virgula, porem eu adiciono por conta de atuar com linguagens java, c#...
console.log(ganhoPorHoraRound(3000, 176));

//Formatando o resultado com quantidades de casas decimais pre estabelecidas
function ganhoPorHoraPontoFlutuante(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    const total = salarioHora.toFixed(2);
    return total;
}

console.log(ganhoPorHoraPontoFlutuante(3000, 176));

//Formatando valor para real
function ganhoPorHoraFormatandoNumero(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);
    const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return formatado;
}

console.log(ganhoPorHoraFormatandoNumero(3000, 176));

/**
 * Outras funcoes utilizadas 
 * Math.ceil = retorna valor arredondado maior que o numero passado
 * Math.floor = retorna valor inteiro menor que o passado
*/