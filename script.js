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
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');

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

// --- Conteúdo dos Artigos Completo ---
const artigosConteudo = {
  'O Futuro da IA': {
    imagem: 'https://picsum.photos/400/220?random=1',
    texto: `A inteligência artificial deixou de ser apenas ficção científica para se tornar parte essencial do nosso cotidiano. 
            No desenvolvimento web, algoritmos avançados já ajudam a gerar código, otimizar interfaces de usuário e personalizar a navegação em tempo real.
            \n\nNos próximos anos, espera-se que a IA autônoma seja capaz de resolver bugs complexos e aperfeiçoar a segurança cibernética antes mesmo que vulnerabilidades sejam exploradas.`
  },
  'Lançamentos de Games': {
    imagem: 'https://picsum.photos/400/220?random=2',
    texto: `A indústria de jogos eletrônicos continua a quebrar recordes de receita e inovação tecnológica.
            Com o avanço dos novos consoles e GPUs de alta performance para PC, os desenvolvedores estão criando mundos abertos cada vez mais detalhados com Ray Tracing e física realista.
            \n\nFique atento aos próximos títulos que prometem redefinir o padrão dos jogos narrativa e de ação multiplayer!`
  },
  'Efeitos no Cinema': {
    imagem: 'https://picsum.photos/400/220?random=3',
    texto: `Desde os primórdios da sétima arte com maquetes, figurinos e truques de câmera até a revolução do CGI (Computer Generated Imagery), o cinema sempre buscou encantar os olhos do público.
            \n\nAtualmente, tecnologias de produção virtual como telas LED gigantes interativas substituem o tradicional fundo verde, permitindo que atores e diretores vejam cenários fantásticos em tempo real durante a gravação.`
  },
  'Retorno do Vinil': {
    imagem: 'https://picsum.photos/400/220?random=4',
    texto: `Em uma era dominada pelo streaming e pelo acesso instantâneo, os discos de vinil apresentaram um crescimento constante de vendas no mundo todo.
            \n\nMúsicos e entusiastas destacam a experiência tátil de segurar a capa do álbum, ler o encarte e apreciar a sonoridade analógica, que oferece graves mais quentes e nuances imperfeitas únicas do vinil.`
  },
  'Tecnologia nos Esportes': {
    imagem: 'https://picsum.photos/400/220?random=5',
    texto: `Atletas de alto rendimento hoje utilizam biossensores, câmeras de alta precisão e análise de dados em tempo real para maximizar o desempenho e evitar lesões graves.
            \n\nDesde uniformes com tecidos de alta aerodinâmica até inteligência artificial calculando rotas de movimentação em campo, a tecnologia tornou-se uma aliada indispensável do esporte moderno.`
  }
};

// --- Funções para Abrir e Fechar o Modal ---
function lerMais(chaveTitulo) {
  const artigo = artigosConteudo[chaveTitulo];
  const modal = document.getElementById('modal-artigo');

  if (artigo) {
    document.getElementById('modal-titulo').innerText = chaveTitulo;
    document.getElementById('modal-imagem').src = artigo.imagem;
    document.getElementById('modal-texto').innerText = artigo.texto;
    modal.style.display = 'flex';
  }
}

function fecharModal() {
  const modal = document.getElementById('modal-artigo');
  modal.style.display = 'none';
}

// Fechar modal se clicar fora do conteúdo
window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal-artigo');
  if (event.target === modal) {
    fecharModal();
  }
});