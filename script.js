// --- Alternar Tema Claro/Escuro ---
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    }
});

// --- Função para Revelar / Ocultar Texto Completo ---
function toggleTexto(btn) {
    const card = btn.closest('.post-content');
    const resumo = card.querySelector('.resumo');
    const textoCompleto = card.querySelector('.texto-completo');

    if (textoCompleto.classList.contains('escondido')) {
        textoCompleto.classList.remove('escondido');
        resumo.style.display = 'none';
        btn.textContent = 'Ocultar texto';
    } else {
        textoCompleto.classList.add('escondido');
        resumo.style.display = 'block';
        btn.textContent = 'Revelar texto';
    }
}