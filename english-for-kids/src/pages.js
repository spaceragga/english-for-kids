import { cards } from './cards.js';
import { switcher } from './switcher.js';
import { startGame } from './startGame.js';

export function createPagesList(namber) {
    console.log(namber);
    const mainWrapp = document.querySelector(".main-wrapp");
    const startBtn = document.createElement('button');
    const startBtnContainer = document.createElement('div');


    cards[namber].forEach((el, ind) => {
        const card = document.createElement('a');
        const img = document.createElement('img');
        // green повесить на свитчер
        card.classList.add('card');
        card.setAttribute('id', 'menuCard');

        mainWrapp.appendChild(card);
        card.appendChild(img);

        if(namber === 0) {
            img.setAttribute('src', cards[ind+1][0].image);
            card.innerHTML += cards[0][ind];


        } else {
            img.setAttribute('src', cards[namber][ind].image);
            card.innerHTML += cards[namber][ind].word;
        }

    });

    if(namber === 0) {
        document.querySelectorAll('#menuCard').forEach((el, ind) => {
            el.addEventListener('click', () => {
                mainWrapp.innerHTML = '';
                createPagesList(ind + 1);
                switcher.switchClick();
            });
        });
    }

    mainWrapp.insertAdjacentElement("beforeEnd", startBtnContainer);
    startBtnContainer.appendChild(startBtn);

    startBtnContainer.classList.add('startContainer');
    startBtn.classList.add('button');
    startBtn.setAttribute('id', 'startBtn');
    startBtn.innerHTML = 'Start Game';

    startBtn.addEventListener('click', () => {
        startGame.startGameClick();
    });
    
    switcher.switchClick(namber);
}