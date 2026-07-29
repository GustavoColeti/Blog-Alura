// 1. Interação do Botão Flutuante para alternar entre Tema Claro e Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

// 2. Interatividade dos Botões de Reação (com limite de 1 curtida por botão)
const botoes = document.querySelectorAll(".interacoes button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function() {
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    });
});