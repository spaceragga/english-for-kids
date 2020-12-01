import { cards } from './cards.js';
import { switcher } from './switcher.js';
import { startGame } from './startGame.js';

export function createPagesList(namber) {
    console.log(namber);
    const mainWrapp = document.querySelector(".main-wrapp");
    const startBtn = document.createElement('button');
    const startBtnContainer = document.createElement('div');


    cards[namber].forEach((el, ind) => {
        if(namber === 0) {
            const card = document.createElement('a');
            const img = document.createElement('img');
    
            card.classList.add('card');
            card.setAttribute('id', 'menuCard');
    
            mainWrapp.appendChild(card);
            card.appendChild(img);
    
            img.setAttribute('src', cards[ind+1][0].image);
            card.innerHTML += cards[0][ind];
        } else {
            const cardWrapp = document.createElement('div');
            const cardMain = document.createElement('div');
            const cardFront = document.createElement('div');
            const cardBack = document.createElement('div');
            const cardRotate = document.createElement('div');
            const cardHeaderFront = document.createElement('div');
            const cardHeaderBack = document.createElement('div');
    
            mainWrapp.appendChild(cardWrapp);
            cardWrapp.appendChild(cardMain);
            cardMain.appendChild(cardFront);
            cardMain.appendChild(cardBack);
            cardMain.appendChild(cardRotate);
            cardFront.appendChild(cardHeaderFront);
            cardBack.appendChild(cardHeaderBack);
    
            cardMain.classList.add('card-action');
            cardFront.classList.add('cardFront');
            cardBack.classList.add('cardBack', 'cardBackRotate');
            cardHeaderFront.classList.add('card-header');
            cardHeaderBack.classList.add('card-header');
            cardWrapp.setAttribute('id', 'menuCard');
            cardRotate.classList.add('cardRotate');

            cardHeaderFront.innerHTML += cards[namber][ind].word;
            cardHeaderBack.innerHTML += cards[namber][ind].translation;

            cardRotate.addEventListener('click', () => {
                // cardBack.classList.remove('cardBackRotate');
                cardMain.classList.add('rotateNow');
                cardMain.addEventListener('mouseleave', () => {
                    cardMain.classList.remove('rotateNow');
                });
            });

            cardFront.addEventListener('click', () => {
                const audio = new Audio();
                audio.src = cards[namber][ind].audioSrc;
                console.log(`${cards[namber][ind].audioSrc}`)
                audio.autoplay = true;
            });

            cardFront.setAttribute("style", `background-image: url("${cards[namber][ind].image}")`);
            cardBack.setAttribute("style", `background-image: url("${cards[namber][ind].image}")`);
    
            // img.setAttribute('src', cards[namber][ind].image);
            // card.innerHTML += cards[namber][ind].word;
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