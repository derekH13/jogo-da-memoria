const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');


const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled')//removendo attribute
        button.classList.add('bot');
        return;
    }
        button.setAttribute('disabled', ' ')//setando um attribute
        button.classList.remove('bot');

}

const handleSubmit = (event) => {
    event.preventDefault();//bloqueia o comportamento padrão do event
    
    localStorage.setItem('player', input.value);//salvar informações no navegador
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput)//evento de input da callback no validateInput
form.addEventListener('submit', handleSubmit)//evento de enviar