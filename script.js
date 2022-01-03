const paleta = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const elem = document.getElementsByClassName('selected');
const localBotao = document.getElementById('botao');
const pixelBoard2 = document.getElementsByClassName('pixel');
const localBotao2 = document.getElementById('botao2')
//questão 12 usei como referência o site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. 
function gerarCorAleatoria() {
    let divs = document.createElement('div');
        divs.className = 'color';
        divs.style.backgroundColor = 'black';
        paleta.appendChild(divs);
    for (index = 0; index < 3; index += 1) {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        let cores = `rgb(${r}, ${g}, ${b})`;
        let divs = document.createElement('div');
        divs.className = 'color';
        divs.style.backgroundColor = cores;
        paleta.appendChild(divs);
    }
}
gerarCorAleatoria();
for (index = 1; index < 26; index += 1) {
    let divBoard = document.createElement('div');
    divBoard.className = 'pixel';
    divBoard.style.backgroundColor = 'white';
    pixelBoard.appendChild(divBoard);
}
let primeiraPaleta = paleta.children[0];
primeiraPaleta.classList.add('selected');
paleta.addEventListener('click', pegarCor);

function pegarCor(event) {
    elem[0].classList.remove('selected');
    elementTarget = event.target;
    elementTarget.classList.add('selected');

}
pixelBoard.addEventListener('click', colocandoCor);

function colocandoCor(event2) {
    if (event2.target.id !== 'pixel-board') {
    let selected = document.querySelector('.selected');
    let cor = selected.style.backgroundColor;
    event2.target.style.backgroundColor = cor;
}
}
function criarBotao(botao) {
    botao = document.createElement('button');
    let text = document.createTextNode('Limpar');
    botao.appendChild(text);
    botao.id = 'clear-board';
    localBotao.appendChild(botao);
}
criarBotao();
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', tirandoCor)

function tirandoCor() {
    for (index = 0; index < pixelBoard2.length; index += 1) {
        pixelBoard2[index].style.backgroundColor = 'white';
    }
}
function criandoBotaoInput(botao2, input) {
    input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.id = 'board-size';
    input.placeholder = ' Tamanho do Quadro';
    localBotao2.appendChild(input);
    botao2 = document.createElement('button');
    let text2 = document.createTextNode('VQV');
    botao2.appendChild(text2);
    botao2.id = 'generate-board';
    localBotao2.appendChild(botao2);
}
criandoBotaoInput()
const pegandobotao2 = document.getElementById('generate-board');
pegandobotao2.addEventListener('click', aumentandoPixel)

const pegaInput = document.getElementById('board-size');
const quadro = document.getElementById('pixel-board');
//Me inspirei na refatoração através da ajuda do Emerson Alves.
function criarNovoQuadro(quant) {
    N = (quant * 42);
    let vezes = quant * quant
    let board = N + 'px';
    for (index = 0; index < vezes; index += 1) {
        let divExtra = document.createElement('div');
        divExtra.className = 'pixel';
        divExtra.style.backgroundColor = 'white';
        quadro.style.width = quadro.style.height = board;
        pixelBoard.appendChild(divExtra);
    }
}
function aumentandoPixel() {
    let quadroTamanho = quadro.children.length;
    for (i = 0; i < quadroTamanho; i += 1) {
        quadro.removeChild(quadro.lastElementChild);
    }
    let textInput = pegaInput.value;
    if (Number(textInput) > 4 && Number(textInput) < 50) {
        criarNovoQuadro(textInput);
    } else if (Number(textInput) > 0 && Number(textInput) < 5) {
        criarNovoQuadro(5);

    } else if (Number(textInput) >= 50) {
        criarNovoQuadro(50);
    } else {
        alert('Board inválido!');
    }
}
