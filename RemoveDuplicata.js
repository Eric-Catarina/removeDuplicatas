var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.on('line', entrada => {
    // Primeiro confere se é ímpar --> se for, tira a primeira letra, divide no meio e vai coisando: 
    // se a primeira metade for igual a segunda return T, 
    // else {Tira as duas primeiras letras que sobraram e testa de novo }..

    var inicio = 0
    var numeroDeChamadas = 0

    let verificaSeStringTemTamanhoImpar = (stringAlvo) => stringAlvo.length % 2 != 0
    let verificaSeStringEhDigrafo = (stringAlvo) => stringAlvo.length == 2

    let entradaSeparadaPorPalavras = entrada.split(" ")
    /*if (verificaSeStringTemTamanhoImpar(stringAlvo)) {
        inicio = 1
    }*/

    let verificaSeTemDuplicata = (stringAlvo) => {
        if (verificaSeStringEhDigrafo(stringAlvo)) {
            let stringAlvoVetor = stringAlvo.split("")
            if (stringAlvoVetor[0] == stringAlvoVetor[1]) {
                return true
            }
        }
        let MetadeTermoUm = stringAlvo.slice(inicio, stringAlvo.length / 2 + inicio)
        let MetadeTermoDois = stringAlvo.slice(stringAlvo.length / 2 + inicio)
        /*
        t orci daCida
        0 1234 5678910
        */
        if (MetadeTermoUm == MetadeTermoDois) {
            return true
        }
        else{
            inicio += 2
            return verificaSeTemDuplicata(stringAlvo)
        }
    }

    /*
    resposta = MetadeTermoUm + ";" + MetadeTermoDois
        return true
    */

    // Escreva a sua solução aqui
    console.log(verificaSeTemDuplicata(entrada))

})
