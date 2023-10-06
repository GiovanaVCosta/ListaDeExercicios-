/*************************************************************
 *  Objetivo : Realizar o calculo de um IMC de uma pessoa 
 *  Data:  15/09/23
 *  Autor: Giovana Vieira
 * Versão :1.0
 *************************************************************/

var calculo = require('./Modulo/calcular.js')
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso: ', function(peso) {
    let valorpeso = peso;
    entradaDeDados.question('Digite sua altura: ', function(altura) {
        let valoraltura = altura;

        let mostrarIMC = calculo.calcular(peso, altura);

        let mostrarStatus = calculo.statusIMC(mostrarIMC);

        console.log(mostrarIMC + ' , ' + mostrarStatus)

        entradaDeDados.close()
    })
})