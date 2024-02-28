//exercicio 3 ficha 3

// function start(){
//     return "Started Download"
// }


function updatee(){
    var percentages = []
    for(let i = 0; i < 100; i++){
        percentages.push(i)
    }
    return percentages;
}

function complete(){
    return "the download is completed"
}

var started = function start(){
    return "Started Download"
};
var update = updatee();
var completed = complete();

function performDownload(start, update, comlplete){
    console.log(start);
    for (let i = 0; i < update.length; i++){
        console.log(update[i] + "% of Download")
    }

    console.log(comlplete);

}

performDownload(started, update, completed);

//4. Crie um módulo local com o nome ArrayUtils.js e implemente as seguintes funções:
// a. boolean isEmpty(array) – Verifica se o array está vazio
// b. number max(array) – Devolve o máximo do array
// c. number min(array) – Devolve o mínimo do array
// d. number average(array) – Devolve a media do array
// e. number indexOf(array, value) – Devolve o índice de um determinado elemento no array
// f. Array subArray(array, startIndex, endIndex) – Devolve um sub-array do array original
// g. boolean isSameLength(a1, a2) – Compara o tamanho de dois arrays
// h. Array reverse(array) – Inverte a ordem de um array
// i. Array swap(array, index1, index2) – Troca dois elementos de um array
// j. boolean contains(array, value) – Indica se um determinado valor existe no array
// i. Já fez algum método que pode ajudar nesta operação?
// k. Array concatenate(a1, a2) – Junta dois arrays num novo

