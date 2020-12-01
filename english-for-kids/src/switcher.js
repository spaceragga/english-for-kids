import { startGame } from './startGame.js';

export const switcher = {
    switchPosition: false,

    switchClick(btnFalse) {
        const switherButton = document.querySelector('#switcher');
        const menuCard = document.querySelectorAll('#menuCard');
        const startBtn = document.querySelector('#startBtn');
        // const cardRotate = document.querySelectorAll('.cardRotate');
        // const headerCard = document.querySelectorAll('.card-header');
        // const cardFront = document.querySelectorAll('.cardFront');
        // const cardBack = document.querySelectorAll('.cardBack');

        startBtn.classList.add('startBtn');

        if(this.switchPosition === false) {
            menuCard.forEach(el => {
                if (btnFalse === 0) {
                el.classList.add('green');
                }
                this.trainGame();
                startBtn.style.visibility = 'hidden';
            });
        } else {
            this.playGame();
            startBtn.style.visibility = 'visible';   
        }
            
        if (btnFalse === 0) {
            startBtn.style.visibility = 'hidden';
        }

        switherButton.addEventListener('click', () => {
            if(this.switchPosition === true) {
                menuCard.forEach(el => {
                    if (btnFalse === 0) {
                    el.classList.add('green');
                    }
                    this.trainGame();
                    startBtn.style.visibility = 'hidden';
                });
            } else {
                menuCard.forEach(el => {
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
    },

};