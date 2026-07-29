// Seleciona todos os botões da página
const botoes = document.querySelectorAll("button");

// Para cada botão, criamos um controle de curtida independente
botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        // Se ainda não curtiu, aumenta o número e marca como true
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } 
        // Se já curtiu, diminui o número e volta para false
        else {
            texto.textContent--;
            curtiu = false;
        }
    }
});