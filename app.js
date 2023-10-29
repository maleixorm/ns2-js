function limparCampo(tag) {
    let campo = document.querySelector(tag);
    campo.value = '';
}

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(params) {
    exibirNaTela('h1', `Jogo do Número Secreto`);
    exibirNaTela('p', `Escolha um número entre 1 e 10.`);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    let numeroSecreto =gerarNumeroAleatorio();
    limparCampo('.container__input');
    let tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
limparCampo('.container__input');

function verificarChute() {
    let chute = document.querySelector('.container__input').value;
    if (chute == numeroSecreto) {
        exibirNaTela('h1', `Acertou!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirNaTela('p', `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirNaTela('p', `O numero secreto é menor!`);
        } else {
            exibirNaTela('p', `O numero secreto é maior!`);
        }
        limparCampo('.container__input');
    }
}
