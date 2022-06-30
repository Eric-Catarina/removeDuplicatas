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
    let verificaSeDigrafoRepete =  (digrafoAlvo) => {
        let stringAlvoVetor = digrafoAlvo.split("")
        if (stringAlvoVetor[0] == stringAlvoVetor[1]) {
            return true
        }
        else {
            return false
        }
    }
    let verificaSeEhDigrafoESeRepete = (entrada) =>{
        if (verificaSeStringEhDigrafo(entrada)) {
            return verificaSeDigrafoRepete (entrada)
        }
        return false
    }

    let entradaSeparadaPorPalavras = entrada.split(" ")
    /*if (verificaSeStringTemTamanhoImpar(stringAlvo)) {
        inicio = 1
    }*/

    let verificaSeTemDuplicataRecursiva = (stringAlvo) => {

        let MetadeTermoUm = stringAlvo.slice(0, stringAlvo.length / 2)
        let MetadeTermoDois = stringAlvo.slice(stringAlvo.length / 2)
        console.log (MetadeTermoUm + ";" + MetadeTermoDois)
        
        /*
        t|or|cidaCida
        0|12|345678910
        */
        if (MetadeTermoUm  == "" || MetadeTermoDois ==""){
            return false
        }
        if (MetadeTermoUm == MetadeTermoDois) {
            return true
        }
        else {
            
            stringAlvo = stringAlvo.slice(2)
            return verificaSeTemDuplicataRecursiva(stringAlvo)
        }
    }
    /*
    resposta = MetadeTermoUm + ";" + MetadeTermoDois
        return true
    */
    // Escreva a sua solução aqui
    let verificaSeTemDuplicata = (entrada) =>{
        if (verificaSeStringTemTamanhoImpar(entrada)){
            entrada = entrada.slice(1)
        }
        return verificaSeTemDuplicataRecursiva(entrada)
    }
    
    console.log(verificaSeTemDuplicata(entrada))

})
