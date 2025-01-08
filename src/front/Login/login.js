// Armazenar usuários no localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Cadastro de novo usuário
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const role = document.getElementById('registerRole').value;

        if (!email || !password || !role) {
            alert('Preencha todos os campos.');
            return;
        }

        const users = getUsers();
        if (users.find(user => user.email === email)) {
            alert('Usuário já cadastrado.');
            return;
        }

        users.push({ email, password, role });
        saveUsers(users);
        alert('Cadastro realizado com sucesso!');
        window.location.href = '../Login/login.html'; // Redirecionar para a página de login
    });
}

// Login de usuário
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        const users = getUsers();
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert(`Bem-vindo(a) ${user.role === 'writer' ? 'Escritor' : 'Leitor'}!`);
            if (user.role === 'writer') {
                window.location.href = '../pos-login/escritor.html'; // Página do escritor
            } else {
                window.location.href = '../LandingPage/Assinatura.html'; // Página do leitor
            }
        } else {
            alert('Email ou senha incorretos.');
        }
    });
}

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const loginRequest = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        tipoUsuario: document.getElementById('tipo').value
    };

    // Fazer a requisição POST para o backend para logar
    fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            // Armazenar usuário logado no localStorage (opcional, pode usar sessões no backend)
            localStorage.setItem('loggedInUser', JSON.stringify(data));

            alert('Login efetuado com sucesso! Seja bem-vindo, ' + data.nome + '!');

            // Redirecionar para a página principal
            window.location.href = "../LandingPage/index.html"; // Ajuste conforme necessário
        } else {
            msgErro.setAttribute('style', 'display: block');
            msgErro.innerHTML = '<Strong>E-mail ou Senha incorretos!</Strong>';
            msgErro.style.color = "red";
            email.focus();
        }
    })
    .catch(error => {
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = `<Strong>${error.message}</Strong>`;
        msgErro.style.color = "red";
    });
});

/**
 * FUNÇÃO DE ABRE E FECHA OLHO:
 * Alterna a visibilidade da senha no campo de entrada.
 * Quando clicado, muda o tipo do campo de 'password' para 'text' 
 * e vice-versa, permitindo que o usuário veja ou oculte a senha.
 */
const togglePassword = document.getElementById('togglePassword');
const passwordField  = document.getElementById('senha');

togglePassword.addEventListener('click', function(){
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});



/* Spring Cadastro Usuario 
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const role = document.getElementById("registerRole").value;

    const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
    });

    if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert("Erro ao cadastrar.");
    }
});

*/

/* Spring Login Usuario
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const user = await response.json();
        alert(`Bem-vindo(a) ${user.role === "writer" ? "Escritor" : "Leitor"}!`);
        window.location.href = user.role === "writer" ? "/escritor.html" : "/leitor.html";
    } else {
        alert("Email ou senha incorretos.");
    }
});

*/