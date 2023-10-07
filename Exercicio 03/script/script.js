// Função para obter a hora atual formatada
function getHoraAtual() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    
    const horasFormatadas = horas < 10 ? `0${horas}` : horas;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

    return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

function atualizarHora() {
    const h1 = document.getElementById('HoraAtual');
    if (h1) {
        h1.textContent = getHoraAtual();
    }
}

setInterval(atualizarHora, 1000);
window.onload = atualizarHora;
