const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["Brasília", "São Paulo", "Belo Horizonte"],
        respostaCorreta: "Brasília"
    },
    {
        pergunta: "Qual o maior oceano do mundo?",
        opcoes: ["Oceano Atlântico", "Oceano Pacífico", "Oceano Índico"],
        respostaCorreta: "Oceano Pacífico"
    },
    {
        pergunta: "Quem escreveu 'Romeu e Julieta'?",
        opcoes: ["Jane Austen", "Charles Dickens", "William Shakespeare"],
        respostaCorreta: "William Shakespeare"
    }
];

let perguntaAtual = 0;
const perguntaContainer = document.getElementById('pergunta-container');
const opcoesContainer = document.getElementById('opcoes-container');

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaContainer.textContent = pergunta.pergunta;

    opcoesContainer.innerHTML = '';
    pergunta.opcoes.forEach((opcao, index) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.classList.add('opcao');
        botaoOpcao.textContent = opcao;
        botaoOpcao.addEventListener('click', () => verificarResposta(opcao));
        opcoesContainer.appendChild(botaoOpcao);
    });
}

function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];
    if (resposta === pergunta.respostaCorreta) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta! A resposta correta é: ${pergunta.respostaCorreta}`);
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        alert("Quiz concluído! Parabéns!");
    }
}

function proximoPergunta() {
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        alert("Quiz concluído! Parabéns!");
    }
}

// Inicializa o quiz mostrando a primeira pergunta
mostrarPergunta();
