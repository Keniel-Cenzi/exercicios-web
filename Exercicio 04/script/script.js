const ListaTarefas = document.getElementById("lista-itens");
const inputTarefas = document.getElementById("item-adicionar");

injectHtml = function () {
    tarefaAdicionar = document.getElementById("item-adicionar").value;

    if (tarefaAdicionar == "") {
        alert("É necessário informar um item para a lista!")
        return
    }

    const li = document.createElement("li");

    li.innerHTML = tarefaAdicionar + '<button id="finalizar" onclick="deletaItem(this)">Finalizar</button><button id="deletar" onclick="deletaItem(this)">Deletar</button>';

    ListaTarefas.appendChild(li);
    tarefaAdicionar.value = "";
}

limparTarefas = function () {

    ListaTarefas.innerHTML = "";
    inputTarefas.value = "";
}

deletaItem = function (botao) {
    var item = botao.parentNode;
    var lista = item.parentNode;

    lista.removeChild(item);
}
