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

// --- Filtro por Categorias ---
const filterButtons = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover classe 'active' de todos os botões
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Adicionar classe 'active' ao botão clicado
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    // Exibir ou ocultar posts com base no filtro
    posts.forEach(post => {
      const postCategory = post.getAttribute('data-category');
      
      if (category === 'todos' || category === postCategory) {
        post.style.display = 'flex';
      } else {
        post.style.display = 'none';
      }
    });
  });
});

// --- Função ao clicar em "Ler artigo" ---
function lerMais(titulo) {
  alert(`Você clicou para ler sobre: "${titulo}"`);
}