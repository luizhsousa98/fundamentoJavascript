const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";
const senha = "senhaSuperSegura456!";
const StringDeNumeros  = "34567";

const citacaoDeTexto = "O Leo disse 'oi'";
console.log(citacaoDeTexto);

//concatenacao de texto (+)
console.log(senha + StringDeNumeros);

const produto = {id: 1, nome: 'Grampo', preco: 34.6};
//template string OU template literal ${}
const descricao = `${produto.nome} por apenas R$ ${produto.preco}`;


console.log(descricao);