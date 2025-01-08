// Seletores
const modalContainer = document.getElementById('modal-container');
const cardsContainer = document.getElementById('cards-container');
const obrasForm = document.getElementById('obras-form');

// Abrir modal
function openModalObra() {
    modalContainer.style.display = 'flex';
}

// Fechar modal
function closeModalObra() {
    modalContainer.style.display = 'none';
    obrasForm.reset();
}

// Salvar obra no localStorage
function salvarObra(event) {
    event.preventDefault();

    // Capturar os valores do formulário
    const titulo = document.getElementById('m-titulo').value;
    const descricao = document.getElementById('m-descricao').value;
    const dataPublicacao = document.getElementById('m-dataPublicacao').value;
    const paginas = document.getElementById('m-paginas').value;

    const arquivoPDF = document.getElementById('m-pdf').files[0];
    const pdfURL = arquivoPDF ? URL.createObjectURL(arquivoPDF) : '';

    // Criar objeto da obra
    const novaObra = {
        id: Date.now(), // ID único com base no timestamp
        titulo,
        descricao,
        dataPublicacao,
        paginas,
        pdfURL
    };

    // Recuperar obras salvas no localStorage
    const obras = JSON.parse(localStorage.getItem('obras')) || [];

    // Adicionar nova obra
    obras.push(novaObra);

    // Salvar no localStorage
    localStorage.setItem('obras', JSON.stringify(obras));

    // Atualizar a lista de obras
    atualizarObras();

    // Fechar modal
    closeModalObra();
}

// Atualizar exibição de obras na tela
function atualizarObras() {
    // Limpar os cards existentes
    cardsContainer.innerHTML = '';

    // Recuperar obras do localStorage
    const obras = JSON.parse(localStorage.getItem('obras')) || [];

    // Criar os cards dinamicamente
    obras.forEach((obra) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${obra.titulo}</h3>
            <p>${obra.descricao}</p>
            <p><strong>Data de Publicação:</strong> ${obra.dataPublicacao}</p>
            <p><strong>Páginas:</strong> ${obra.paginas}</p>
            <a href="${obra.pdfURL}" target="_blank">Ler PDF</a>
            <button onclick="removerObra(${obra.id})">Remover</button>
        `;

        cardsContainer.appendChild(card);
    });
}

// Remover obra
function removerObra(id) {
    const obras = JSON.parse(localStorage.getItem('obras')) || [];
    const obrasAtualizadas = obras.filter((obra) => obra.id !== id);
    localStorage.setItem('obras', JSON.stringify(obrasAtualizadas));
    atualizarObras();
}

// Inicializar exibição de obras ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarObras);

// Função de Logout
function logout() {
    // Remove os dados armazenados no localStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");

    // Redireciona para a página de login
    window.location.href = "../Login/Login.html";
}

// Exemplo: Adicionar a função ao botão de logout
document.getElementById("logout").addEventListener("click", logout);
