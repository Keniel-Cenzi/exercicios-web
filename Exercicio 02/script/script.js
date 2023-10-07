let painel = document.getElementById("painel-operacoes");
let numerosCalc = [];
var tipoOperacao = "";
let resultado = 0;
let ultimoOperador = -1;

function addNumeroCalc(numero) {
    if (painel.textContent == 'Erro')
        painel.innerHTML = "";

    painel.innerHTML += numero;
}

function CleanPainelCalc() {
    painel.innerHTML = "";
    numerosCalc = [];
    resultado = 0;
}

function CalculaResultadoOperacao(idOperacao) {
    numerosCalc.push(painel.textContent);
    painel.innerHTML = "";

    if (idOperacao == 0)
        ultimoOperador = 0;
    else if (idOperacao == 1)
        ultimoOperador = 1;
    else if (idOperacao == 2)
        ultimoOperador = 2;
    else if (idOperacao == 3)
        ultimoOperador = 3;

    if ((numerosCalc[1] == null))
        return

    if (resultado == 0) {
        switch (ultimoOperador) {
            case 0: {
                if (numerosCalc[1] == 0) {
                    painel.innerHTML = "Erro";
                    numerosCalc = [];

                    return
                }

                if (resultado == 0) {
                    resultado += parseFloat(numerosCalc[0]) / parseFloat(numerosCalc[1]);
                }
                else {
                    resultado += parseFloat(numerosCalc[1]);
                }

                painel.innerHTML = resultado.toFixed(2);
                return
            }
            case 1: {
                if (resultado == 0) {
                    resultado += parseFloat(numerosCalc[0]) * parseFloat(numerosCalc[1]);
                }
                else {
                    resultado += parseFloat(numerosCalc[1]);
                }

                painel.innerHTML = resultado;
                return
            }
            case 2: {
                if (resultado == 0) {
                    resultado += parseFloat(numerosCalc[0]) - parseFloat(numerosCalc[1]);
                }
                else {
                    resultado -= Math.abs(parseFloat(numerosCalc[1]));
                }

                painel.innerHTML = resultado;
                return
            }
            case 3: {
                if (resultado == 0) {
                    resultado += parseFloat(numerosCalc[0]) + parseFloat(numerosCalc[1]);
                }
                else {
                    resultado += parseFloat(numerosCalc[1]);
                }

                painel.innerHTML = resultado;
                return
            }
        }
    }
    else {
        painel.innerHTML = resultado;
        return
    }
}