var arrayUtils = {
//a. boolean isEmpty(array) – Verifica se o array está vazio
isEmpty :function isEmpty(array){
    return array.length==0;
},

//b. number max(array) – Devolve o máximo do array
max :function max(array){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    var max = 0;
    for (let i = 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i]
        }
    }
    return max
},

// c. number min(array) – Devolve o mínimo do array
min : function min(array){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    var min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < array.length; i++){
        if( array[i] < min){
            min = array[i]
        }
    }
    return min
},

// d. number average(array) – Devolve a media do array
average: function average(array){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    var soma= 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma / array.length
},

// e. number indexOf(array, value) – Devolve o índice de um determinado elemento no array
indexOf: function indexOf(array, value){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    for ( let i = 0; i < array.length; i++){
        if ( array[i] == value){
            return i
        }
    }
    return -1 
},

// f. Array subArray(array, startIndex, endIndex) – Devolve um sub-array do array original
subArray: function subArray(array, startIndex, endIndex){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    // if (index2 >= array.length || index1 >= array.length){
    //     return "o array so tem: " + (array.length-1) + " indices."
        
    // }

    // else if (index1 < 0 || index2 < 0){
    //     return "Os indices nao podem ser menores a 0."
    // }
    var subArray = [];
    for ( let i = startIndex; i<= endIndex; i++){
        subArray.push(array[i])
    }
    return subArray
},


// g. boolean isSameLength(a1, a2) – Compara o tamanho de dois arrays
isSameLength: function isSameLength(a1, a2){
    return a1.length === a2.length;
},

// h. Array reverse(array) – Inverte a ordem de um array

reverse: function reverse(array){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }
    var arrayNovo = [];
    for (let i = array.length-1; i >= 0 ; i--){
        arrayNovo.push(array[i])
    }
    return arrayNovo
},

// i. Array swap(array, index1, index2) – Troca dois elementos de um array
swap : function swap(array, index1, index2){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }

    if (index2 >= array.length || index1 >= array.length){
        return "o array so tem: " + (array.length-1) + " indices."
        
    }

    else if (index1 < 0 || index2 < 0){
        return "Os indices nao podem ser menores a 0."
    }
    
    var valueIndex1 = array[index1];
    
    array[index1] = array[index2];
    array[index2] = valueIndex1;
    return array
    
},

// j. boolean contains(array, value) – Indica se um determinado valor existe no array
contains : function contains(array, value){
    if (this.isEmpty(array) === true){
        return "O array esta vazio."
    }

    return this.indexOf(array, value) != -1;
}, 

// k. Array concatenate(a1, a2) – Junta dois arrays num novo
concatenate: function concatenate(a1,a2){
    if (this.isEmpty(a1) === true){
        return "O primeiro array esta vazio."
    }
    else if (this.isEmpty(a2) === true){
        return "O segundo array esta vazio."
    }
    var array= []
    for (let i = 0; i < a1.length; i++){
        array.push(a1[i])
    }
    for (let i = 0; i < a2.length; i++){
        array.push(a2[i])
    }
    return array
}};

module.exports = arrayUtils;

