export const startGame = {
    gameOn: false,

    startGameClick() {
        const startBtn = document.querySelector('#startBtn');


        if(this.gameOn === true) {
            // menuCard.forEach(el => {
            //     el.classList.add('green');
            //     startBtn.style.visibility = 'hidden';
                startBtn.classList.remove('startBtn-repeat');
                startBtn.classList.add('startBtn');

            // });
        } else {
            // startBtn.style.visibility = 'visible';   
            startBtn.classList.remove('startBtn');
            startBtn.classList.add('startBtn-repeat');

        }

        this.gameOn = !this.gameOn;
    }
};