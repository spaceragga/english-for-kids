import { cards } from './cards.js';
import { switcher } from './switcher.js';
import { statistics } from './statistics.js';
import { createPagesList } from './pages.js';

export const startGame = {
    gameOn: false,
    arr: [],
    errorClick: 0,
    rightClick: 0,


    startGameClick(namber) {
        this.arr = cards[namber].map(el => el.audioSrc).sort(() => Math.random() - 0.5);
        const startBtn = document.querySelector('#startBtn');


        startBtn.classList.remove('startBtn');
        startBtn.classList.add('startBtn-repeat');
        const repeatBtn = document.querySelector('.startBtn-repeat');

        repeatBtn.addEventListener('click', () => {
            this.repeatClick();
        });

        this.repeatClick();

        this.gameOn = true;
    },

    repeatClick() {
        const audio = new Audio();
        audio.src = this.arr[0];
        audio.autoplay = true;
    },

    endGame() {
        const mainWrapp = document.querySelector(".main-wrapp");

        if(this.rightClick === 8 && this.errorClick === 0) {
            mainWrapp.innerHTML = `<div class='endGameBox'>
            <div>You win</div><img src="img/success.jpg"></div>`;

            const audio = new Audio();
            audio.src = 'audio/success.mp3';
            audio.autoplay = true;

            setTimeout(() => {
                this.refreshPage();
            }, 3000);
        } else {
            mainWrapp.innerHTML = `<div class='endGameBox'>
            <div>You have ${this.errorClick} mistakes</div><img src="img/failure.jpg"></div>`;
            
            const audio = new Audio();
            audio.src = 'audio/failure.mp3';
            audio.autoplay = true;

            setTimeout(() => {
                this.refreshPage();
            }, 3000);
        }
    },

    refreshPage() {
        this.errorClick = 0;
        this.rightClick = 0;
        this.gameOn = false;

        document.querySelector(".main-wrapp").innerHTML = '';
        document.querySelector('.notes').innerHTML = '';

        createPagesList(0); 
        switcher.switchClick(0);
    },

    checkWord(namber, ind, card) {
        if(cards[namber][ind].audioSrc === this.arr[0]) {
            const audio = new Audio();
            audio.src = 'audio/correct.mp3';
            audio.autoplay = true;

            this.rightClick += 1;
            statistics.clickStat[namber][ind].correct += 1;

            card.hidden = true;
            document.querySelector('.notes').innerHTML += '<div class="star-succes"></div>';

            this.arr.shift();

            if(this.arr.length !== 0) {
                setTimeout(() => {
                    this.repeatClick();
                }, 1000);
            } else {
                this.endGame();
            }

        } else {
            const audio = new Audio();
            audio.src = 'audio/error.mp3';
            audio.autoplay = true;

            this.errorClick += 1;
            statistics.clickStat[namber][ind].wrong += 1;

            document.querySelector('.notes').innerHTML += '<div class="star-error"></div>';
        }
    }
};