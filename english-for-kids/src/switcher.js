import { startGame } from './startGame.js';

export const switcher = {
    switchPosition: false,

    switchClick(btnFalse) {
        console.log(btnFalse)
        const switherButton = document.querySelector('#switcher');
        const menuCard = document.querySelectorAll('#menuCard');
        const startBtn = document.querySelector('#startBtn');

        startBtn.classList.add('startBtn');

        if(this.switchPosition === false) {
            menuCard.forEach(el => {
                if (btnFalse === 0) {
                el.classList.add('green');
                }

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
                    if (btnFalse === 0) {
                    el.classList.add('green');
                    }

                    startBtn.style.visibility = 'hidden';
                });
            } else {
                menuCard.forEach(el => {
                    if (btnFalse === 0) {
                    el.classList.remove('green');
                    } else {
                        startBtn.style.visibility = 'visible';           
                    }
                });
            }

            this.switchPosition = !this.switchPosition;
        });
    }
};