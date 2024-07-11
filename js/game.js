const grid = document.querySelector('.grid');
let audio = new Audio('../css/audio.mp3')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer');

const characters = [
    '1 (1)',
    '1 (2)',
    '1 (3)',
    '1 (4)',
    '1 (5)',
    '1 (6)',
    '1 (7)',
    '1 (8)',
    '1 (9)',
    '1 (10)',
]


let firstCard = '',
    secondCard = '';

const checkEndGame = () => {

    const disabledCards = document.querySelectorAll('.disabled-card');//seleciona todos que tem essa class

    if(disabledCards.length == 20 ){
        clearInterval(this.loop)
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`)
        
    }
}


const createElement = (tag, classNome) => {//criei uma função para facilitar a criação de elemento e add class
    const element = document.createElement(tag);
    element.className = classNome;
    return element
}

const checkCards = () => {
 
const primeiro = firstCard.getAttribute('data-character');
const segundo = secondCard.getAttribute('data-character');
   
if(primeiro == segundo){

    audio.play();

    firstCard.firstChild.classList.add('disabled-card');//adicionando no primeiro filho
    secondCard.firstChild.classList.add('disabled-card');//adicionando no primeiro filho

    checkEndGame();
    return firstCard = '', secondCard = '';

    

}else{

    setTimeout(() => {

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        return firstCard = '', secondCard = '';

    }, 500)

  
}


}

function revealCard({target}){

    if(target.parentNode.className.includes('reveal-card')){//verifica se o elemento pai tem a class
        return
    }

    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card');//pegar o elemento pai/ div pai
        firstCard = target.parentNode;

    }else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');//pegar o elemento pai/ div pai
        secondCard = target.parentNode;

        checkCards();
    }
    
  
}

const createCard = (character) => {

    const card = createElement('div', 'card')//vai criar um elemento
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../img/${character}.png')`;
   
    card.appendChild(front);//primeiro filho da card
    card.appendChild(back);//segundo filho da card

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ... characters, ... characters];//faço um array com os valores do array no parametro
    const embaralhar = duplicateCharacters.sort(() =>  Math.random() - 0.5);//fazendo uma função para ordenar aleatoriamente as cards

    embaralhar.forEach((character) => {

    const card = createCard(character);//vai return uma card feita passando a imagem como parametro 
    grid.appendChild(card)
    
})

}

const startTimer = () => {
    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000)
}

window.onload = () => {//vai executar assim que a janela tiver carregado

const playerName = localStorage.getItem('player');//pegando um item do localStorage
spanPlayer.innerHTML = playerName;
startTimer();
loadGame();
}





