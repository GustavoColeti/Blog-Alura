// 1. Alternar Modo Escuro (Dark Mode)
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Escuro";
    }
});

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