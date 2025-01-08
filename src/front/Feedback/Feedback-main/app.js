const btnCompartilhar = document.querySelector('.btn.button');
const acceptCheckbox = document.getElementById('accept');
const feedbackContainer = document.querySelector('.feedback-container');


btnCompartilhar.addEventListener('click', function() {
    
    if (!acceptCheckbox.checked) {
        alert('Você deve aceitar os Termos e Condições antes de compartilhar.');
        return;
    }

    
    feedbackContainer.style.display = 'none';

    
    const thankYouMessage = document.createElement('div');
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.fontSize = '24px';
    thankYouMessage.style.marginTop = '100px';
    thankYouMessage.innerHTML = 'Obrigado pelo seu feedback!';

    document.body.appendChild(thankYouMessage);
});
