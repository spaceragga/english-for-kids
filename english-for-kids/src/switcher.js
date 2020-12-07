import { startGame } from './startGame.js';

export const switcher = {
    switchPosition: false,

    switchClick(btnFalse) {
        const switherButton = document.querySelector('#switcher');
        const menuCard = document.querySelectorAll('#menuCard');
        const startBtn = document.querySelector('#startBtn');

        startBtn.classList.add('startBtn');

        if(this.switchPosition === false) {
            menuCard.forEach(el => {
                if (btnFalse === 0) {
                el.classList.add('green');
                }
            });
            this.trainGame();
            this.refreshGame();
        } else {
            this.playGame();
            this.refreshGame();
            startBtn.style.visibility = 'visible';   
        }
            
        if (btnFalse === 0) {
            this.refreshGame();
        }

        switherButton.addEventListener('click', () => {
            if(this.switchPosition === true) {
                menuCard.forEach((el) => {
                    if (btnFalse === 0) {
                    el.classList.add('green');
                    }
                });
                this.trainGame();
                this.refreshGame();
            } else {
                menuCard.forEach((el) => {
                    if (btnFalse === 0) {
                    el.classList.remove('green');
                    
                } else {
                    this.playGame();
                    startBtn.style.visibility = 'visible';           
                }
                });
            }

            this.switchPosition = !this.switchPosition;
        });
    },

    refreshGame() {
        startGame.errorClick = 0;
        startGame.rightClick = 0;
        startGame.gameOn = false;

        document.querySelector('.notes').innerHTML = '';
        startBtn.style.visibility = 'hidden';

        document.querySelector('#startBtn').classList.remove('startBtn-repeat');
        document.querySelector('#startBtn').classList.add('startBtn');

        document.querySelectorAll('.cardFront').forEach((el) => el.hidden = false);
    },

    playGame() {
        document.querySelectorAll('.cardRotate').forEach((el) => el.classList.add('playDisabled'));
        document.querySelectorAll('.card-header').forEach((el) => el.classList.add('playDisabled'));
        document.querySelectorAll('.cardFront').forEach((el) => el.classList.add('playDisabledImg'));
        document.querySelectorAll('.cardBack').forEach((el) => el.classList.add('playDisabledImg'));
    },

    trainGame() {
        document.querySelectorAll('.cardRotate').forEach((el) => el.classList.remove('playDisabled'));
        document.querySelectorAll('.card-header').forEach((el) => el.classList.remove('playDisabled'));
        document.querySelectorAll('.cardFront').forEach((el) => el.classList.remove('playDisabledImg'));
        document.querySelectorAll('.cardBack').forEach((el) => el.classList.remove('playDisabledImg'));
    }
};