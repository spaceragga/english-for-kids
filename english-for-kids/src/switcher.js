import { startGame } from './startGame.js';
import { cards } from './cards.js';

export const switcher = {
    switchPosition: false,

    switchClick(btnFalse) {
        const switherButton = document.querySelector('#switcher');
        const menuCard = document.querySelectorAll('#menuCard');
        const startBtn = document.querySelector('#startBtn');
        // let temp;
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
            });
            this.trainGame();
            // отдельную функцию для уменьшения кода
            startGame.errorClick = 0;
            startGame.rightClick = 0;
            startGame.gameOn = false;

            document.querySelector('.notes').innerHTML = '';
            startBtn.style.visibility = 'hidden';
        } else {
            this.playGame();
            startBtn.style.visibility = 'visible';   
        }
            
        if (btnFalse === 0) {
            startGame.errorClick = 0;
            startGame.rightClick = 0;
            startGame.gameOn = false;

            document.querySelector('.notes').innerHTML = '';
            startBtn.style.visibility = 'hidden';
        }

        switherButton.addEventListener('click', () => {
            if(this.switchPosition === true) {
                menuCard.forEach((el) => {
                    if (btnFalse === 0) {
                    el.classList.add('green');
                    }
                    // el.addEventListener('click',  temp = () => this.audioPlay(btnFalse, ind));
                });
                this.trainGame();
                startGame.errorClick = 0;
                startGame.rightClick = 0;
                startGame.gameOn = false;

                document.querySelector('.notes').innerHTML = '';
                startBtn.style.visibility = 'hidden';
            } else {
                menuCard.forEach((el) => {
                    if (btnFalse === 0) {
                    el.classList.remove('green');
                    
                } else {
                    this.playGame();
                    startBtn.style.visibility = 'visible';           
                }
                // el.removeEventListener('click', temp);
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
    }
};