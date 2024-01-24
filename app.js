let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumero ();
let tentativas = 1

// função para compactar o código "variável + nome = document.querySelector ("h1") + nome.innertHTML = "nome dado ao h1"

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// nesse caso, a função exibirTextoNaTela, quando citado na tag, será substituido pelas strings 'h1' assim como feito com o 'p'
// só que depois de habilitar o botão de reiniciar o jogo, o código ficaria muito repetitivo, então vamos criar uma função disso pra depois citar no código
function mensagemInicial() {
    exibirTextoNaTela('h1', 'DESCUBRA O NÚMERO SECRETO');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 100');
}
mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','PARABÉNS!');

        // Se tentativas for maior que 1, então escreva tentativas, se for menor, escreva tentativa
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        // Fazendo dessa forma, quando acertar em apenas uma tentativa, o texto vai ser modificado para o singular
        let avisoTentativas = ('p', `Você descobriu o número secreto com ${tentativas} tentativas`);


        // usando novamente a função criada, chamamando-a para 'p' e usando outro parâmetro para dar nome
        // tudo isso vai acontecer o if, quando a pesssoa acertar ou errar o chute

        // para aparecer o botão de novo jogo, nós pegamos o id do botão no HTML e removemos o atributo
        exibirTextoNaTela ('p',avisoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        // Se a pessoa não acertar de primeira, usamos o else dentro do if e fazemos mais uma condição
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número é menor');
        } else {
            exibirTextoNaTela('p','O número é maior');
        }
        tentativas++;
        limparCampo()
    } 
}

// função para gerar um número, já aprendi essa parte
// ele fez outra função louca
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadedeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadedeElementosNaLista == 100) {
        listaDeNumerosSorteados = [];
    }



    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

// usando função novamente com o nome "limparCampo" pra quando digitamos o número, limpasse o campo do "p"
function limparCampo() {
    chute = document.querySelector ('input')
    // ele determina que o valor que vai ser recebido para a variável chute vai ser um campo vazio
    chute.value = '';
    
    // função do botão que colocamos no HTML, agora só programamos ele
}
    function reiniciarJogo() {
        // depois de acertar o número, é gerado outro quando clicado no botão Novo Jogo
        numeroSecreto = gerarNumero();
        // usamos a função feita pra que todo o campo seja limpo e o jogo reiniciado
        limparCampo();
        // reiniciar as tentativas também
        let tentativas = 1;
        //usamos a função delimitada no começo pra reiniciar o jogo
        mensagemInicial();
        //habilitamos o botão para quando somente a pessoa acertar (true) o jogo
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }