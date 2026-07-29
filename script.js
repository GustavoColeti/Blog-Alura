// Variáveis para guardar a quantidade de curtidas
let totalLikes = 0;
let totalDeslikes = 0;

// Função chamada ao clicar no botão de Like
function darLike() {
    totalLikes++;
    document.getElementById("qtd-likes").innerText = totalLikes;
}

// Função chamada ao clicar no botão de Deslike
function darDeslike() {
    totalDeslikes++;
    document.getElementById("qtd-deslikes").innerText = totalDeslikes;
}
