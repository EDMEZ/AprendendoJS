const display = document.querySelector("#displayInput");
const BotaoIgual = document.querySelector(".igual");
const BotaoPonto = document.querySelector(".ponto");
const BotoesNumeros = document.querySelectorAll(".num");
const BotoesOperadores = document.querySelectorAll(".operador");
const BotaoLimpar = document.querySelector(".limpar");

//variaveis globais
let OperacaoAtual ="";
let operador = null;
let ValorAnterior = "";
let Calculando = false;

//funções
const AtualizaDisplay = ()=>{
    display.value = OperacaoAtual
} 
function insertNumero(evento){
    if(Calculando){
        OperacaoAtual = evento.target.textContent; 
        Calculando = false;  
    }else{
        OperacaoAtual += evento.target.textContent;
    }
    AtualizaDisplay();
}
const InserePonto= () => {
    if(OperacaoAtual.indexOf(".") === -1){
        OperacaoAtual += ".";
        AtualizaDisplay();
    }
}

const InsereOperador = (evento) =>{
    if(OperacaoAtual !== "") {
        if(!Calculando) {
            if(operador !== null){
                Calcula();
            }
            ValorAnterior = OperacaoAtual;
            OperacaoAtual = "";
        }
        operador = evento.target.textContent;
    }
}
const LimparCalculadora = () =>{
   display.value = "";
   ValorAnterior = "";
   OperacaoAtual = "";
   operador = null;
   Calculando = false;
}
const Calcula = () =>{
    let resultado = null;
    const operandoanterior = parseFloat(ValorAnterior);
    const operandoatual = parseFloat(OperacaoAtual);

    switch(operador){
        case "+":
            resultado = operandoanterior + operandoatual;
            break;
        case "-":
            resultado = operandoanterior - operandoatual;
            break;
        case "*":
            resultado = operandoanterior * operandoatual;
            break;
        case "/":
            resultado = operandoanterior / operandoatual;
            break;
    }
    OperacaoAtual = String(resultado);
    ValorAnterior = OperacaoAtual;
    Calculando = true;
    AtualizaDisplay();
}
//eventos
BotaoPonto.addEventListener("click",InserePonto)
BotoesNumeros.forEach((botao) => 
    botao.addEventListener("click",insertNumero)
);

BotoesOperadores.forEach((botao) => 
    botao.addEventListener("click",InsereOperador)
);
BotaoIgual.addEventListener("click",Calcula);

BotaoLimpar.addEventListener("click",LimparCalculadora);