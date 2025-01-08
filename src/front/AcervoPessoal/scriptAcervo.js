// Seleciona elementos
const cardsContainer = document.getElementById("cards-hori");
const bookModal = document.getElementById("bookModal");
const bookForm = document.getElementById("bookForm");
const addBookButton = document.getElementById("addBookButton");

// Função para abrir o modal
addBookButton.addEventListener("click", () => {
  bookModal.style.display = "flex";
});

// Função para fechar o modal
function closeModal() {
  bookModal.style.display = "none";
}

// Função para adicionar um novo card de livro
function addNewBook(title, description, imageUrl, link) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.style.width = "18rem";
  newCard.innerHTML = `
    <img src="${imageUrl}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title fw-bold">${title}</h5>
      <p class="card-text">${description}</p>
      <a href="${link}"><button class="btn">Acessar</button></a>
    </div>
  `;
  cardsContainer.appendChild(newCard);
}

// Evento de envio do formulário para adicionar um novo livro
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("bookTitle").value;
  const description = document.getElementById("bookDescription").value;
  const imageUrl = document.getElementById("bookImageUrl").value;
  const link = document.getElementById("bookLink").value;

  // Adiciona o novo card com os dados fornecidos
  addNewBook(title, description, imageUrl, link);

  // Limpa o formulário e fecha o modal
  bookForm.reset();
  closeModal();
});

// Fechar modal se clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target == bookModal) {
    closeModal();
  }
});