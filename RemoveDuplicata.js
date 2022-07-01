var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', entrada => {

    let entradaSeparadaPorPalavras = entrada.split(" ")

    let vetorResposta = []

    let resposta

    let MetadeTermoUm
    let MetadeTermoDois

    let stringInicial

    let verificaSeStringTemTamanhoImpar = (stringAlvo) => stringAlvo.length % 2 != 0

    let verificaSeTemDuplicata = (stringAlvo) => {
        stringInicial = stringAlvo
        if (verificaSeStringTemTamanhoImpar(stringAlvo)) {
            stringAlvo = stringAlvo.slice(1)
        }
        return verificaSeTemDuplicataRecursiva(stringAlvo)
    }

    let verificaSeTemDuplicataRecursiva = (stringAlvo) => {
        let tamanhoDaParteDuplicada

        MetadeTermoUm = stringAlvo.slice(0, stringAlvo.length / 2)
        MetadeTermoDois = stringAlvo.slice(stringAlvo.length / 2)

        if (MetadeTermoUm == "" || MetadeTermoDois == "") {
            return false
        }
        if (MetadeTermoUm == MetadeTermoDois) {

            tamanhoDaParteDuplicada = MetadeTermoDois.length
            vetorResposta.push(stringInicial.slice(0, -tamanhoDaParteDuplicada))

            return true
        }
        else {
            stringAlvo = stringAlvo.slice(2)
            return verificaSeTemDuplicataRecursiva(stringAlvo)
        }
    }

    let verificaSeTodasPalavrasSaoDuplicatas = (vetorStringAlvo) => {
        var contadorPalavrasDuplicadas = 0

        vetorStringAlvo.forEach(palavra => {
            if (verificaSeTemDuplicata(palavra)) {
                contadorPalavrasDuplicadas++
            }
        })
        if (contadorPalavrasDuplicadas == vetorStringAlvo.length) {
            return true
        }
        else {
            return false
        }
    }

    let converteVetorEmString = (vetorAlvo) => {

        let stringFinal

        stringFinal = vetorAlvo.join(" ")

        return stringFinal + "."
    }
    
    // Escreva a sua solução aqui
    
    if (verificaSeTodasPalavrasSaoDuplicatas(entradaSeparadaPorPalavras)){
        resposta = converteVetorEmString(vetorResposta)
    }
    else{
        resposta = entrada
    }
    console.log(resposta)


})
