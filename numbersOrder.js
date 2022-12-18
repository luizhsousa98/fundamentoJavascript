var list = [10, 1, 5, 9, 8, 12, 15];

console.log(list.sort()); // sort ordena por ordem alfabetica baseada na tabela unicode

//ordenando pelo numero
function comparaNumeros(a, b){
    if(a == b) {
        return 0;
    } if(a < b){
        return -1;
    } if (a > b){
        return 1;
    }
}

console.log("Comparando Numeros por ordem crescente => " + list.sort(comparaNumeros));