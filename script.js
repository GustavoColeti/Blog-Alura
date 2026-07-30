// Teste de carregamento
console.log("Arquivo script.js carregado com sucesso!");

// Mostrar e Esconder a Teoria
function toggleTeoria(idElemento) {
  var elemento = document.getElementById(idElemento);
  if (elemento) {
    elemento.classList.toggle('hidden');
  }
}

// Botão Curtir
function curtir(idContador) {
  var contador = document.getElementById(idContador);
  if (contador) {
    var valorAtual = parseInt(contador.innerText) || 0;
    contador.innerText = valorAtual + 1;
  }
}

// Botão Descurtir
function descurtir(idContador) {
  var contador = document.getElementById(idContador);
  if (contador) {
    var valorAtual = parseInt(contador.innerText) || 0;
    contador.innerText = valorAtual + 1;
  }
}