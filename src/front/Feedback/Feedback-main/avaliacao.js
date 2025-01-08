const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');
const messageDiv = document.getElementById('message');

function updateStars(value) {
    stars.forEach((star, index) => {
        star.classList.remove('red', 'orange', 'yellow', 'lightgreen', 'darkgreen'); // Remove todas as classes de cor
        if (index < value) {
            if (value === 1) {
                star.classList.add('red');
            } else if (value === 2) {
                star.classList.add('orange');
            } else if (value === 3) {
                star.classList.add('yellow');
            } else if (value === 4) {
                star.classList.add('lightgreen');
            } else if (value === 5) {
                star.classList.add('darkgreen');
            }
        }
    });

   
    switch (value) {
        case 1:
            messageDiv.textContent = "Péssimo";
            break;
        case 2:
            messageDiv.textContent = "Ruim";
            break;
        case 3:
            messageDiv.textContent = "Regular";
            break;
        case 4:
            messageDiv.textContent = "Bom";
            break;
        case 5:
            messageDiv.textContent = "Ótimo";
            break;
        default:
            messageDiv.textContent = "";
    }
}

function setRating(value) {
    updateStars(value);
    
    let color;
    if (value <= 1) {
        color = 'red';
    } else if (value <= 2) {
        color = 'orange';
    } else if (value <= 3) {
        color = 'yellow';
    } else if (value <= 4) {
        color = 'lightgreen';
    } else {
        color = 'darkgreen';
    }

    ratingInput.style.background = value > 0 ? color : 'transparent'; 
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        setRating(value);
    });
});


setRating(0);