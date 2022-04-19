var altura = 0;
var largura = 0;
var vida = 4;
var tempo = 20;
var criaFantasma;
var nivel = window.location.search;
nivel = nivel.replace("?", "");

if(nivel === "facil"){
    criaFantasma = 1200;
}else if(nivel === "normal"){
    criaFantasma = 900
}else if(nivel === "dificil"){
    criaFantasma = 700;
}

var cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(invocarFantasma);
        window.location.href = "congratulation.html";
    }else{
        document.getElementById("segundos").innerHTML = tempo;
    }
}, 1000);

function iniciarJogo(){
    let dificuldade = document.getElementById("dificuldades").value;
    if(dificuldade === ""){
        alert("Selecione uma dificuldade para iniciar o jogo!");
    }else{
        window.location.href = "jogar.html?" + dificuldade;
    }
}

function ajustarTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustarTela();

function gerarInimigo(){
    if(document.getElementById("inimigo")){
        document.getElementById("inimigo").remove();
        if(vida === 0){
            window.location.href = "gameOver.html";
        }else{
            document.getElementById("vida"+ vida).src = "imagens/coracaoVazio.png";
            vida--;
        }
    }

    let posicaox = Math.floor(Math.random() * largura) - 90;
    let posicaoy = Math.floor(Math.random() * altura) - 90;
    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;
    let inimigo = document.createElement("img");
    inimigo.src = "imagens/fantasma.png";
    inimigo.id = "inimigo";
    inimigo.className = tamanhoInimigo() + " " + giraInimigo();
    inimigo.style.left = posicaox + "px";
    inimigo.style.top = posicaoy + "px";
    inimigo.style.position = "absolute";
    inimigo.onclick = function(){
        this.remove();
    }

    document.body.appendChild(inimigo);
}

function tamanhoInimigo(){
    let classe = Math.floor(Math.random() * 3);
    switch(classe){
        case 0:
            return "inimigo1";
        case 1:
            return "inimigo2";
        case 2:
            return "inimigo3";
    }
}

function giraInimigo(){
    let classe = Math.floor(Math.random() * 2);
    switch(classe){
        case 0:
            return "lado1";
        case 1:
            return "lado2";
    }
}