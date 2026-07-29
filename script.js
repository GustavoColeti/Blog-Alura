// 1. Alternância de Tema Claro e Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    corpoPagina.classList.toggle("tema-escuro");
}

// 2. Marcar Matéria/Material como Concluído
const botoesConcluir = document.querySelectorAll(".btn-concluir");

botoesConcluir.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");
        
        if (botao.classList.contains("concluido")) {
            botao.classList.remove("concluido");
            texto.textContent = "Pendente";
        } else {
            botao.classList.add("concluido");
            texto.textContent = "Concluído ✔️";
        }
    });
});

// 3. Temporizador de Foco (Simulador Pomodoro)
const btnCronometro = document.getElementById("btn-cronometro");
const timerDisplay = document.getElementById("timer");
let rodando = false;
let tempoRestante = 25 * 60; // 25 minutos em segundos
let intervalo;

btnCronometro.addEventListener("click", function () {
    if (!rodando) {
        rodando = true;
        btnCronometro.textContent = "⏸️ Pausar Foco";
        intervalo = setInterval(atualizarTimer, 1000);
    } else {
        rodando = false;
        btnCronometro.textContent = "⏱️ Continuar Foco";
        clearInterval(intervalo);
    }
});

function atualizarTimer() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    timerDisplay.textContent = `${minutos}:${segundos}`;

    if (tempoRestante > 0) {
        tempoRestante--;
    } else {
        clearInterval(intervalo);
        alert("Parabéns, Beatriz! Você concluiu seu bloco de foco!");
    }
}

// 4. Salvar Avaliação do Teste do Protótipo
const btnFeedback = document.getElementById("btn-salvar-feedback");
btnFeedback.addEventListener("click", function () {
    alert("Obrigado pelo feedback! As respostas foram registradas para a melhoria do protótipo no Figma.");
});