// para ejecutar hacer el "cd" a la ficha y despues node "nombre de archivo.js"

//implementação
function calculateGrade(gradeP, gradeT) {
    var mean = gradeT * 0.4 + gradeP * 0.6;
    console.log("Your average is: " + mean)

    if (mean < 9.5)
        console.log("You failed!");
    else
        console.log("you passed!!!!");
}

//invocação
// calculateGrade(12, 14);
// calculateGrade(12, 1);

//exercicio 6 
function month(mes) {
    var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "octubro", "novembro", "dezembro"]

    console.log(meses[mes - 1])
}
// month(4)

//exercicio 6 por professor

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("fevereiro");
            break;
        case 3:
            console.log("março");
            break;
        case 4:
            console.log("abril");
            break;
        case 5:
            console.log("maio");
            break;
        case 6:
            console.log("junho");
            break;
        case 7:
            console.log("julho");
            break;
        case 8:
            console.log("agosto");
            break;
        case 9:
            console.log("setembro");
            break;
        case 10:
            console.log("octubro");
            break;
        case 11:
            console.log("novembro");
            break;
        case 12:
            console.log("dezembro");
            break;
        default:
            console.log("valor invalido.");
            break;
    }
}

// getMonthName(5)

//exercicio 7. Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado
//da operação sobre os números.

function operations(num1, num2, operador) {
    switch (operador) {
        case "+":
            console.log("o valor é " + (num1 + num2));
            break;
        case "-":
            console.log("o valor é " + (num1 - num2));
            break;
        case "*":
            console.log("o valor é " + (num1 * num2));
            break;
        case "/":
            console.log("o valor é " + (num1 / num2));
            break;
        case "^":
            console.log("o valor é " + (num1 ** num2));
            break;
        default:
            console.log("valor invalido.");
            break;

    }
}
//operations(33, 21, "+")

//8. Implemente uma função que imprima todos os múltiplos de 5 menores que 20.

function multiplos(){
    var results = 5
    var ite = 0

    while (results < 20){
        ite += 1
        console.log(results)
        results = ite * 5
    }

}
// multiplos()

//9. Implemente uma função que imprima a soma dos primeiros 100 números inteiros

function soma(){
    var ite = 0
    var result = 0
    while (ite < 100){
        ite += 1
        result += ite
    }
    console.log(result)
}

//soma()

//10. Implemente uma função que calcule e devolva o fatorial de um número.

function factorial(number){
    var result = number
    while (number > 1){
        result = result * (number - 1)
        number += -1
    }
    return result
}

//console.log(factorial(7))

//11.Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números
//positivos.

var sequencia = [5,2,3,93,3,4]

function maximo(sequencia){
    var maximo = sequencia[0]
    for (var i = 1; i < sequencia.length; i ++){
        if (sequencia[i] > maximo){
            maximo = sequencia[i];
        }
    }
    console.log(maximo)
}

//maximo(sequencia)

function minimo(sequencia){
    var minimo = sequencia[0]
    for (var i = 1; i < sequencia.length; i ++){
        if (sequencia[i] < minimo){
            minimo = sequencia[i];
        }
    }
    console.log(minimo)
}

//minimo(sequencia)

function media(sequencia){
    var soma = 0
    for (var i = 0; i < sequencia.length; i++){
        soma += sequencia[i]
    }
    console.log(soma/ sequencia.length)
}

//media(sequencia)