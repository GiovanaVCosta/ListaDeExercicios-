/*************************************************************
 *  Objetivo : Realizar o calculo de um IMC de uma pessoa 
 *  Data:  15/09/23
 *  Autor: Giovana Vieira
 * Versão :1.0
 *************************************************************/

//função para calcular IMC

const calcular = function(altura, peso) {

    let alturaIMC = altura
    let pesoIMC = peso

    let IMC = Number(pesoIMC / (alturaIMC * alturaIMC))

    return IMC
}

const statusIMC = function(valorIMC) {

    let valorstatus = valorIMC

    let mensagem;

    if (valorstatus < 18.5) {

        mensagem = 'abaixo do peso adequado'

    } else if (valorstatus >= 18.5 && valorstatus <= 24.9) {

        mensagem = 'peso adequado'

    } else if (valorstatus >= 25 && valorstatus <= 29.9) {

        mensagem = 'sobrepeso'

    } else if (valorstatus >= 30 && valorstatus <= 34.9) {

        mensagem = 'obesidade 1'

    } else if (valorstatus >= 35 && valorstatus <= 39.9) {

        mensagem = 'obesidade 2'

    } else if (valorstatus >= 40) {

        mensagem = 'obesidade 3'
    }

    return mensagem
}


module.exports = {
    calcular,
    statusIMC
}