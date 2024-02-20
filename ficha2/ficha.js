/*para comentar todo


1. Escreva uma função que calcule o índice de massa corporal de uma pessoa e imprima a sua condição física.
A fórmula contém o peso em kg e a altura em metros.*/


function condicaoFisica(peso, altura){
    var imc = peso / (altura **2)
    if(imc < 18.5){
        console.log("abaixo do peso");
    }
    else if ( imc >= 18.5 && imc < 25.0){
        console.log("no peso normal");
    }
    else if ( imc >= 25.0 && imc < 30.0){
        console.log("acima do peso");
    }
    else{
        console.log("obeso");
    }
}

// condicaoFisica(60, 1.70)

//2. Escreva uma função que dada uma frase imprima a mesma frase por ordem inversa.
//a. Por exemplo: Entrada: Hoje e Domingo Saída: ejoH e ognimoD

// nao esta bem feita
function fraseInversa(frase){
    var resultado = ""
    var palavra = ""
    for (var letra = 0; letra < frase.length; letra++){
        if (frase[letra] != " "){
            palavra += frase[letra]
        }
        else{
            for ( var i = palavra.length - 1; i >= 0 ;i--){
                resultado += palavra[i]
            }
            resultado += palavra[i]
            
        }
    }
    console.log(resultado)
}


//fraseInversa("hoje e domingo")

//resolvido pelo professor exercicio 2

function reverseWords(str){
    var reversedStr ="";
    var words = str.split(" ");
    // percorre palavra por palavra

    for (let i = 0; i < words.length; i++){
        var word = words[i];
        //percorre letra por letra 
        for (let j = word.length -1 ; j >= 0; j--){
            reversedStr+=word[j];
        }
        reversedStr+=" ";
    }
    return reversedStr;
}

//console.log(reverseWords("Hoje e Domingo"))

//3. Escreva uma função que dada uma frase devolva o número de vogais que a mesma contém.

function obterVogais(frase){
    var numeroVogais = 0
    for (let i = 0; i < frase.length; i++){
        if (frase[i] == "a" || frase[i] == "e" ||frase[i] == "i" ||frase[i] == "o" ||frase[i] == "u"){
            numeroVogais += 1
        }
    }
    return numeroVogais
}

// console.log(obterVogais("hoje e domingo"))

// 4. Escreva uma função que dada frase e uma letra do abecedário devolva o número vezes que essa letra
// ocorra. Não faça distinção entre maiúsculas e minúsculas (toLowerCase()).

function letterRepetitioon(frase, letra){
    var repetitions = 0;
    for (let i = 0; i < frase.length; i++){
        if (frase.toLowerCase()[i] == letra ){
            repetitions += 1;
        }
    }
    return repetitions
}

// console.log(letterRepetitioon("hoje e domingoD", "d"))

// 5. Escreva uma função que calcule o tempo de trabalho de um empregado. Dada a hora de entrada e a hora
// de saída deve imprimir o tempo de trabalho. A empresa está aberta entre as 08:00:00 e as 18:00:00 e as
// horas devem situar-se nesse intervalo.

function horasLaborais(entrada, saida){
    
}

// horasLaborais("09:20:00", "17:50:00")

// 6. Escreva uma função que desenhe um retângulo com asteriscos. A altura e largura devem ser passadas como
// argumentos

function  retangulo(altura, largura){
    for (let y = 1; y <= altura; y++){
        let linha = ""
        for (let x = 0; x < largura; x++){
            linha += "*"
        }
        console.log(linha)
    }
    
}

// retangulo(20,10)

// 7. Escreva uma função que desenhe um triângulo com asteriscos dada a sua altura.

function triangulo(altura){
    let linha = ""
    for (let y= 0; y < altura; y++){
        linha += "*"
        console.log(linha)
        
    }

}

// triangulo(8)

// 8. Escreva uma função que desenhe uma caixa quadrada com asteriscos e espaços dado o seu lado.

function caixa(lado){
    for (let ite =1; ite <= lado; ite++){
        if (ite == 1 || ite == lado){
            console.log("*".repeat(lado))
        }
        else{
            console.log("*" + " ".repeat(lado-2) + "*")
        }
    }
}

// caixa(5)

// 9. Construa um programa que permita fazer o processamento automático das notas de testes de uma turma
// (máximo de 30 alunos). Crie um objeto que represente um aluno e as suas propriedades, crie vários alunos e
// adicione os mesmos a um Array. O programa deve permitir fazer as seguintes opções:
// a. Lista - O programa imprime todas as notas.
// c. Melhor nota – O programa imprime o número do melhor aluno e a respetiva nota.
// d. Pior nota – O programa imprime o número do pior aluno e a respetiva nota.
// e. Nota média – O programa imprime o número do aluno que tiver a nota mais próxima da média e a
// respetiva nota.
// f. Notas Negativas – imprime o número de notas negativas
// g. Notas Positivas – imprime o número de notas positivas

function processamento_notas(turma){
    for (let aluno = 0; aluno < turma.length; aluno++){
        console.log(turma[aluno].nota)
    }
    var melhor_nota = {"n_aluno":"0","nota":0}
    for (let aluno = 0; aluno < turma.length; aluno++){
        if (turma[aluno].nota >= melhor_nota.nota){
            melhor_nota = turma[aluno]
        }
    }
    console.log("A melhhor nota é do aluno "+ melhor_nota.n_aluno + " com a nota " + melhor_nota.nota)

    var pior_nota = {"n_aluno":"0","nota":21}
    for (let aluno = 0; aluno < turma.length; aluno++){
        if (turma[aluno].nota <= pior_nota.nota){
            pior_nota = turma[aluno]
        }
    }
    console.log("A pior nota é do aluno "+ pior_nota.n_aluno + " com a nota " + pior_nota.nota)

    var media = 0
    var soma = 0
    var aluno_media = turma[0]
    for (let aluno = 0; aluno < turma.length; aluno++){
        soma += turma[aluno].nota
    }
    media = soma  / turma.length
    var menor_diferenca = 21
    var diferenca = 0
    for (let aluno = 0; aluno < turma.length; aluno++){
        diferenca = Math.abs(turma[aluno].nota - media)
        if (diferenca < menor_diferenca){
            menor_diferenca = diferenca
            aluno_media = turma[aluno]
        }
        
    }
    console.log("o aluno com a nota mais proxina a media é "+ aluno_media.n_aluno + " com a nota " + aluno_media.nota)

    var numero_de_negativas = 0
    var numero_de_positivas = 0
    for (let aluno = 0; aluno < turma.length; aluno++){
        if (turma[aluno].nota < 10){
            numero_de_negativas++
        } 
        else{
            numero_de_positivas++
        }
    }
    console.log("há " + numero_de_negativas + " notas negativas")
    console.log("há " + numero_de_positivas + " notas positivas")
    
    
}

// processamento_notas([{
//     "n_aluno":"2020",
//     "nota":18
// },{
//     "n_aluno":"2021",
//     "nota":3
// },{
//     "n_aluno":"2022",
//     "nota":1
// },{
//     "n_aluno":"2023",
//     "nota":13
// },{
//     "n_aluno":"2025",
//     "nota":19
// },
// ])