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
                el.classList.add('green');
                startBtn.style.visibility = 'hidden';
            });
        } else {
            startBtn.style.visibility = 'visible';   
        }
            
        if (btnFalse === 0) {
            startBtn.style.visibility = 'hidden';
        }

        switherButton.addEventListener('click', () => {
            if(this.switchPosition === true) {
                menuCard.forEach(el => {
                    el.classList.add('green');
                    startBtn.style.visibility = 'hidden';
                });
            } else {
                menuCard.forEach(el => {
                    el.classList.remove('green');
                    if(btnFalse !== 0) {
                        startBtn.style.visibility = 'visible';           
                    }
                });
            }

            this.switchPosition = !this.switchPosition;
        });
    }
};