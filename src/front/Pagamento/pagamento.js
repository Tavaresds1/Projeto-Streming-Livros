// Declara metodoPagamento como uma variável global
let metodoPagamento = ''; 

document.addEventListener('DOMContentLoaded', () => {
  const planoSelecionado = JSON.parse(localStorage.getItem('planoSelecionado'));
  if (planoSelecionado) {
    document.getElementById('plano-info').innerText = `Plano Selecionado: ${planoSelecionado.nome} - R$${planoSelecionado.valor}`;
  } else {
    alert("Plano de assinatura não encontrado.");
    window.location.href = 'index.html'; 
  }
});

// Atualiza o método de pagamento e a interface
function selecionarMetodoPagamento(metodo) {
  metodoPagamento = metodo; // Atualiza a variável global com o método selecionado

  // Remove a classe 'selected-button' de todos os botões
  document.getElementById("credito").classList.remove("selected-button");
  document.getElementById("debito").classList.remove("selected-button");
  document.getElementById("pix").classList.remove("selected-button");

  // Adiciona a classe 'selected-button' ao botão selecionado
  document.getElementById(metodo).classList.add("selected-button");

  // Atualiza o JSON no localStorage com o método de pagamento selecionado
  const planoSelecionado = JSON.parse(localStorage.getItem('planoSelecionado'));
  planoSelecionado.metodoPagamento = metodo;
  localStorage.setItem('planoSelecionado', JSON.stringify(planoSelecionado));
}

function finalizarPagamento() {
  if (metodoPagamento === 'credito' || metodoPagamento === 'debito' || metodoPagamento === 'pix') {
    if (metodoPagamento === 'credito' || metodoPagamento === 'debito') {
      mostrarTelaCartao();
    } else if (metodoPagamento === 'pix') {
      mostrarTelaPix();
    }
  } else {
    alert('Por favor, selecione um método de pagamento.');
  }
}

function mostrarTelaCartao() {
  document.body.innerHTML = `
    <h2>Insira os Dados do Cartão</h2>
    <form id="form-cartao">
      <label>Número do Cartão:</label><input type="text" maxlength="16" required><br>
      <label>Nome do Titular:</label><input type="text" required><br>
      <label>CVV:</label><input type="text" maxlength="3" required><br>
      <label>Data de Vencimento:</label><input type="date" required><br>
      <button type="button" onclick="confirmarPagamento()">Confirmar Pagamento</button>
    </form>
  `;
}

function mostrarTelaPix() {
  document.body.innerHTML = `
    <h2>Pagamento via Pix</h2>
    <p>Escaneie o QR Code para realizar o pagamento</p>
    <div id="qr-code">[QR Code gerado aqui]</div>
    <p id="timer">Tempo restante: 10:00</p>
  `;
  iniciarContagemRegressiva();
}

function iniciarContagemRegressiva() {
  let tempoRestante = 600; 
  const timerElement = document.getElementById('timer');
  const intervalId = setInterval(() => {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    timerElement.textContent = `Tempo restante: ${minutos}:${segundos.toString().padStart(2, '0')}`;
    tempoRestante--;

    if (tempoRestante < 0) {
      clearInterval(intervalId);
      alert('Tempo expirado. Tente novamente.');
      window.location.href = 'pagamento.html';
    }
  }, 1000);
}

function confirmarPagamento() {
  const planoSelecionado = JSON.parse(localStorage.getItem('planoSelecionado'));
  alert(`Pagamento confirmado!\n\nDetalhes:\nPlano: ${planoSelecionado.nome}\nValor: R$${planoSelecionado.valor}\nMétodo: ${planoSelecionado.metodoPagamento}`);
  
  localStorage.removeItem('planoSelecionado'); 
  window.location.href = '../pos-login/leitor.html';
}