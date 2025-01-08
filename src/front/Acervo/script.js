// Função para exibir as obras cadastradas
function exibirObras() {
  const cardsContainer = document.getElementById('cards-hori');
  cardsContainer.innerHTML = ''; // Limpar o container antes de renderizar

  const obras = JSON.parse(localStorage.getItem('obras')) || [];

  obras.forEach((obra, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';

      card.innerHTML = `
          <img src="Img/1.jpg" class="card-img-top" alt="Capa do Livro">
          <div class="card-body">
              <h5 class="card-title fw-bold">${obra.titulo}</h5>
              <p class="card-text">${obra.descricao}</p>
              <button class="btn" onclick="verObra(${index})">Acessar</button>
          </div>
      `;
      cardsContainer.appendChild(card);
  });
}

// Função para acessar detalhes de uma obra (opcional)
function verObra(index) {
  const obras = JSON.parse(localStorage.getItem('obras')) || [];
  const obraSelecionada = obras[index];
  alert(`Título: ${obraSelecionada.titulo}\nDescrição: ${obraSelecionada.descricao}`);
}

// Executar exibirObras ao carregar a página
window.onload = exibirObras;

// Função de Logout
function logout() {
  // Remove os dados armazenados no localStorage
  localStorage.removeItem("userToken");
  localStorage.removeItem("userRole");

  // Redireciona para a página de login
  window.location.href = "/src/front/Login/login.html";
}

// Exemplo: Adicionar a função ao botão de logout
document.getElementById("logout").addEventListener("click", logout);

// Dados fictícios de obras para demonstração
const obras = [
  { id: 1, titulo: "Aventuras no Deserto", autor: "João Silva" },
  { id: 2, titulo: "Mistério na Cidade", autor: "Maria Souza" },
  { id: 3, titulo: "A Jornada do Herói", autor: "Pedro Santos" },
];

// Abrir o modal
function openModalConsultarObra() {
  const modal = document.getElementById("modalConsultarObra");
  modal.style.display = "block"; // Exibe o modal
}

// Fechar o modal (opcional, se necessário)
function closeModalConsultarObra() {
  const modal = document.getElementById("modalConsultarObra");
  modal.style.display = "none"; // Oculta o modal
}

// Buscar obras pelo título
function buscarObras(event) {
  event.preventDefault(); // Evita o reload da página ao submeter o formulário

  const tituloBusca = document.getElementById("m-titulo").value.toLowerCase();
  const resultados = obras.filter(obra =>
      obra.titulo.toLowerCase().includes(tituloBusca)
  );

  exibirResultados(resultados);
}

// Exibir resultados no modal
function exibirResultados(resultados) {
  const resultadosDiv = document.getElementById("resultadosConsulta");

  if (resultados.length === 0) {
      resultadosDiv.innerHTML = "<p>Nenhuma obra encontrada.</p>";
      return;
  }

  resultadosDiv.innerHTML = resultados
      .map(
          obra =>
              `<div class="resultado-item">
                  <p><strong>Título:</strong> ${obra.titulo}</p>
                  <p><strong>Autor:</strong> ${obra.autor}</p>
              </div>`
      )
      .join("");
}

// Associar eventos ao botão e ao formulário
document.getElementById("searchForm").addEventListener("submit", buscarObras);
