let usuarioLogado = null;
let tamanhoFonteAtual = 16;

// --- ALTERNAR MODO CLARO / ESCURO ---
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    }
});

// --- CALLBACK DE AUTENTICAÇÃO DO GOOGLE ---
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const data = parseJwt(response.credential);
    usuarioLogado = data.name;
    
    // Esconder botão do Google e exibir o nome do usuário logado
    const signinBtn = document.querySelector('.g_id_signin');
    if (signinBtn) signinBtn.style.display = 'none';
    
    const userSpan = document.getElementById('user-name');
    userSpan.textContent = `Olá, ${data.given_name}!`;
    userSpan.classList.remove('escondido');
}

// --- SISTEMA DE LIKES COM EXIGÊNCIA DE LOGIN GOOGLE ---
function curtirPost(btn) {
    if (!usuarioLogado) {
        alert("🔒 Você precisa fazer login com a sua conta do Google no topo da página para curtir os posts!");
        return;
    }

    const countSpan = btn.querySelector('.like-count');
    let totalLikes = parseInt(countSpan.textContent);
    
    if (btn.classList.contains('curtido')) {
        btn.classList.remove('curtido');
        countSpan.textContent = totalLikes - 1;
    } else {
        btn.classList.add('curtido');
        countSpan.textContent = totalLikes + 1;
    }
}

// --- PESQUISA POR NOME EXATO DO ASSUNTO ---
function filtrarPorPesquisa() {
    const termoInput = document.getElementById('search-input').value.trim().toLowerCase();
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const tituloPost = post.getAttribute('data-titulo');
        
        // Se a busca estiver vazia ou for igual/incluir o título digitado
        if (termoInput === "" || tituloPost.includes(termoInput)) {
            post.classList.remove('escondido');
        } else {
            post.classList.add('escondido');
        }
    });
}

// Resetar busca ao clicar em "Início" no menu
function filtrarTodos() {
    document.getElementById('search-input').value = "";
    filtrarPorPesquisa();
}

// --- PAINEL DE CONFIGURAÇÕES (TAMANHO DE FONTE) ---
function toggleConfiguracoes() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('escondido');
}

function alterarFonte(delta) {
    tamanhoFonteAtual += delta * 2;
    if (tamanhoFonteAtual < 12) tamanhoFonteAtual = 12;
    if (tamanhoFonteAtual > 26) tamanhoFonteAtual = 26;
    document.documentElement.style.setProperty('--base-font-size', tamanhoFonteAtual + 'px');
}

function resetarFonte() {
    tamanhoFonteAtual = 16;
    document.documentElement.style.setProperty('--base-font-size', '16px');
}

// --- TELA MODAL (EXIBIÇÃO DOS TEXTOS DOS ASSUNTOS EM TELA CHEIA) ---
function abrirModalPost(btn) {
    const postCard = btn.closest('.post-card');
    const titulo = postCard.querySelector('h2').innerText;
    const textoCompleto = postCard.querySelector('.texto-completo').innerHTML;

    document.getElementById('modal-title').innerText = titulo;
    document.getElementById('modal-body').innerHTML = textoCompleto;
    document.getElementById('read-modal').classList.remove('escondido');
}

function abrirModalGeral(titulo, conteudo) {
    document.getElementById('modal-title').innerText = titulo;
    document.getElementById('modal-body').innerHTML = conteudo;
    document.getElementById('read-modal').classList.remove('escondido');
}

function fecharModal() {
    document.getElementById('read-modal').classList.add('escondido');
}