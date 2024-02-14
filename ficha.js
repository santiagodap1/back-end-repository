function condicaoFisica(peso, altura){
    var imc = peso /(altura **2)

    if(imc < 18.5){
        console.log("abaixo do peso");
    }
    else if ( imc >= 18.5 && imc < 25){
        console.log("no peso normal");
    }
    else if ( imc >= 25 && imc < 30){
        console.log("acima do peso");
    }
    else{
        console.log("obeso");
    }
}

condicaoFisica()