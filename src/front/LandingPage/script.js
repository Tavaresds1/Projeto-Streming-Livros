// document.addEventListener("DOMContentLoaded", function() {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     const loginLink = document.getElementById('nav-login');

//     if (loggedInUser) {
//         // Substituir o "Login" pelo nome do usuário
//         loginLink.textContent = loggedInUser.username; // Mostra o e-mail do usuário
//         loginLink.href = "#"; // Pode deixar o href vazio ou colocar um link de perfil, se houver

//         // Opção de logout ao clicar no nome
//         loginLink.addEventListener('click', function(event) {
//             event.preventDefault();
//             if (confirm("Deseja sair?")) {
//                 // Remover dados de usuário logado
//                 localStorage.removeItem('loggedInUser');
//                 alert("Você foi deslogado.");

//                 // Redirecionar para a página de login
//                 window.location.href = "../Login/index.html";
//             }
//         });
//     }
// });

function selecionarPlano(nome, valor) {
    const planoSelecionado = { nome, valor };
    localStorage.setItem('planoSelecionado', JSON.stringify(planoSelecionado));
    alert(`Plano ${nome} selecionado!`);
    window.location.href = '../Pagamento/index.html'; 
}

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNowNow) func.apply(context, args); //callNowNow?
    };
}

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
        console.log(element.offsetTop)
    })
};

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 50));
};