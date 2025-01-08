// Seletores
const cardsContainerLeitor = document.getElementById('cards-container-leitor');

function atualizarObrasLeitor() {
    // Limpar os cards existentes
    cardsContainerLeitor.innerHTML = '';

    // Recuperar obras do localStorage
    const obras = JSON.parse(localStorage.getItem('obras')) || [];

    // Se não houver obras, mostrar uma mensagem
    if (obras.length === 0) {
        const noBooksMessage = document.createElement('p');
        noBooksMessage.textContent = 'Nenhum livro cadastrado ainda.';
        cardsContainerLeitor.appendChild(noBooksMessage);
        return;
    }

    // Criar os cards dinamicamente
    obras.forEach((obra) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem'; // Ajuste do estilo do card

        card.innerHTML = `
            <h3>${obra.titulo}</h3>
            <p>${obra.descricao}</p>
            <p><strong>Data de Publicação:</strong> ${obra.dataPublicacao}</p>
            <p><strong>Páginas:</strong> ${obra.paginas}</p>
            <a href="${obra.pdfURL}" target="_blank">Ler PDF</a>
            <!-- Botão para Visualizar Obra -->
            <button onclick="realizarFeedback(${obra.id})">Realizar Feedback</button>
        `;

        cardsContainerLeitor.appendChild(card);
    });
}

// Inicializar exibição de obras ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarObrasLeitor);

// Função de Logout
function logout() {
    // Remove os dados armazenados no localStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
  
    // Redireciona para a página de login
    window.location.href = "../Login/Login.html";
}

// Função para realizar o feedback
function realizarFeedback(id) {
    // Armazenar o ID da obra no localStorage
    localStorage.setItem('obraSelecionada', id);

    // Redirecionar para a página de feedback
    window.location.href = '../Feedback/Feedback-main/feedback.html';
}