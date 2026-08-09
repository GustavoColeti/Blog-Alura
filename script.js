let usuarioLogado = null;
let tamanhoFonteAtual = 16;

// --- MODO ESCURO ---
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// --- GOOGLE SIGN-IN CALLBACK ---
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
    
    // Ocultar botão de login e exibir nome do usuário
    const signinBtn = document.querySelector('.g_id_signin');
    if (signinBtn) signinBtn.style.display = 'none';
    
    const userSpan = document.getElementById('user-name');
    userSpan.textContent = `Olá, ${data.given_name}!`;
    userSpan.classList.remove('escondido');
}

// --- SISTEMA DE LIKES (Exige login Google) ---
function curtirPost(btn) {
    if (!usuarioLogado) {
        alert("Você precisa se registrar / fazer login com a sua conta Google para curtir!");
        return;
    }

    const countSpan = btn.querySelector('.like-count');
    let atual = parseInt(countSpan.textContent);
    
    if (btn.classList.contains('curtido')) {
        btn.classList.remove('curtido');
        countSpan.textContent = atual - 1;
    } else {
        btn.classList.add('curtido');
        countSpan.textContent = atual + 1;
    }
}

// --- BARRA DE PESQUISA FUNCIONAL (Pesquisa Nome Exato / Termo) ---
function filtrarPorPesquisa() {
    const termo = document.getElementById('search-input').value.trim().toLowerCase();
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const titulo = post.getAttribute('data-titulo');
        if (termo === "" || titulo.includes(termo)) {
            post.classList.remove('escondido');
        } else {
            post.classList.add('escondido');
        }
    });
}

// --- PAINEL DE CONFIGURAÇÕES (Aumentar/Diminuir Fonte) ---
function toggleConfiguracoes() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('escondido');
}

function alterarFonte(delta) {
    tamanhoFonteAtual += delta * 2;
    if (tamanhoFonteAtual < 12) tamanhoFonteAtual = 12;
    if (tamanhoFonteAtual > 24) tamanhoFonteAtual = 24;
    document.documentElement.style.setProperty('--base-font-size', tamanhoFonteAtual + 'px');
}

function resetarFonte() {
    tamanhoFonteAtual = 16;
    document.documentElement.style.setProperty('--base-font-size', '16px');
}

// --- TELA / MODAL DE EXIBIÇÃO DE TEXTO ---
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