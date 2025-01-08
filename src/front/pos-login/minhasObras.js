// Selecionar o contêiner onde os livros serão exibidos
const meuAcervoContainer = document.getElementById('meu-acervo-container');

// Atualizar exibição das obras do usuário
function carregarAcervo() {
    // Recuperar obras salvas no localStorage
    const obras = JSON.parse(localStorage.getItem('obras')) || [];

    // Limpar o contêiner
    meuAcervoContainer.innerHTML = '';

    // Verificar se há obras cadastradas
    if (obras.length === 0) {
        meuAcervoContainer.innerHTML = '<p>Você ainda não cadastrou nenhuma obra.</p>';
        return;
    }

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
        `;

        meuAcervoContainer.appendChild(card);
    });
}

// Inicializar exibição de obras ao carregar a página
document.addEventListener('DOMContentLoaded', carregarAcervo);
