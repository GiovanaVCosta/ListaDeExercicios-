var readline = require('readline')
var fatorialApp = require('./Modulo/fatorial.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Inseria o numero para descobrir seu fatorial: ', function(valorFatorial) {

    fatorial = valorFatorial

    fatorialApp.calcularFatorial(fatorial)

})