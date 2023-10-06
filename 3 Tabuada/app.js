/*
 * Data: 22/09/2023
 * Autor: Giovana Vieira
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Versao: 1.0
 */

var tabuada = require('./Modulo/calculos.js');
var readline = require('readline');


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite o valor da primeira tabuada: ' + function(valorInicialTabuada) {

    entradaDados.question('Digite o valor da segunda tabuada: ' + function(valorFinalTabuada) {

        entradaDados.question('digite o valor que será calculado: ' + function(contadorInicial) {


            entradaDados.question('Digite o segundo valor que será calculado: ' + function(contadorFinal) {




                tabuada.gerarTabuada(valorInicialTabuada, valorFinalTabuada, contadorInicial, contadorFinal)


                entradaDados.close()


            })
        })
    })
})