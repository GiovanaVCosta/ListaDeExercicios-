/*
 * Data: 22/09/2023
 * Autor: Giovana Vieira
 * Objetivo: programa para auxiliar no processo de médias de uma escola, 
 * o programa vai calcular a média e apresentar se o aluno foi aprovado/reprovado
 * Versao: 1.0
 */
const media = function(nota1, nota2, nota3, nota4) {

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
    return media

}
const exame = function(media, exame) {

    let resultadoPosExame = (Number(media) + Number(exame)) / 2
    return exame

}
const verificarSexoA = function(sexoA) {

    let identificarA

    if (String(sexoA).toUpperCase() == 'F') {
        identificarA = 'A aluna '
    } else if (String(sexoA).toUpperCase() == 'M') {
        identificarA = 'O aluno '
    }

    return identificarA
}
const situacaoMedia = function(resultadoMedia, sexoA) {

    let situacao

    if (String(sexoA).toUpperCase() == 'F') {
        if (resultadoMedia >= 70)
            situacao = 'aprovada'
        else if (resultadoMedia < 50)
            situacao = 'reprovada'

    } else if (String(sexoA).toUpperCase() == 'M') {
        if (resultadoMedia >= 70)
            situacao = 'aprovado'
        else if (resultadoMedia < 50)
            situacao = 'reprovado'
    }

    return situacao
}
const situacaoExame = function(resultadoMedia, exame, sexoA) {

    let situacaoExame

    if (String(sexoA).toUpperCase() == 'F') {

        if (exame >= 60)
            situacaoExame = 'aprovada'
        else
            situacaoExame = 'reprovada'

    } else if (String(sexoA).toUpperCase() == 'M') {
        if (exame >= 70)
            situacaoExame = 'aprovado'
        else
            situacaoExame = 'reprovado'
    }

    return situacaoExame
}
const verificarSexoP = function(sexoP) {

    let identificarP

    if (String(sexoP).toUpperCase() == 'F') {
        identificarP = 'Professora: '
    } else if (String(sexoP).toUpperCase() == 'M') {
        identificarP = 'Professor: '
    }

    return identificarP
}
module.exports = {
    media,
    exame,
    verificarSexoA,
    verificarSexoP,
    situacaoExame,
    situacaoMedia
}