//implementação
function calculateGrade(gradeP, gradeT){
    var mean = gradeT * 0.4 + gradeP * 0.6;
    console.log("Your average is: " + mean)

    if(mean < 9.5)
        console.log("You failed!");
    else    
        console.log("you passed!!!!");
}

//invocação
calculateGrade(12, 14);
calculateGrade(12, 1);

//exercicio 6 
function month(mes){
    var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "octubro", "novembro", "dezembro"]

    console.log(meses[mes-1])
}

month(4)

//exercicio 6 por professor

function getMonths(monthNumber){
    switch (monthNumber) {
        case 1:
            console
    }
}

//exercicio 7. Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado
//da operação sobre os números.

function operations(num1, num2, operador){
    var result 
}