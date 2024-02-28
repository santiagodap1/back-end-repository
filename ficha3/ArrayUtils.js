//a. boolean isEmpty(array) – Verifica se o array está vazio
function isEmpty(array){
    if ( array.length < 1){
        return true
    }
    else{
        return false
    }
}

//b. number max(array) – Devolve o máximo do array

function max(array){
    var max = 0;
    for (let i = 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i]
        }
    }
    return max
}

// c. number min(array) – Devolve o mínimo do array

function min(array){
    var min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < array.length; i++){
        if( array[i] < min){
            min = array[i]
        }
    }
    return min
}

// d. number average(array) – Devolve a media do array

function average(array){
    var soma= 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma / array.length
}

// e. number indexOf(array, value) – Devolve o índice de um determinado elemento no array

function indexOf(array, value){
    var index = 0;
    for ( let i = 0; i < array.length; i++){
        if ( array[i] == value){
            return i
        }
    }
}

// f. Array subArray(array, startIndex, endIndex) – Devolve um sub-array do array original

function subArray(array, startIndex, endIndex){
    var subArray = [];
    for ( let i = startIndex; i<= endIndex; i++){
        subArray.push(array[i])
    }
    return subArray
}


// g. boolean isSameLength(a1, a2) – Compara o tamanho de dois arrays

function isSameLength(a1, a2){
    return a1.length === a2.length;
}

// h. Array reverse(array) – Inverte a ordem de um array

function reverse(array){
    var arrayNovo = [];
    for (let i = array.length-1; i >= 0 ; i--){
        arrayNovo.push(array[i])
    }
    return arrayNovo
}


// i. Array swap(array, index1, index2) – Troca dois elementos de um array

function swap(array, index1, index2){
    
}

// j. boolean contains(array, value) – Indica se um determinado valor existe no array
    // i. Já fez algum método que pode ajudar nesta operação?
// k. Array concatenate(a1, a2) – Junta dois arrays num novo