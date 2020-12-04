import './style.css';
import { cards } from './cards.js';
import { createPagesList } from './pages.js';
import { switcher } from './switcher.js';

const mainMenu = {

    initMainMenu() {
        const mainWrapp = document.querySelector(".main-wrapp");
        
        createPagesList(0);

        document.querySelectorAll('#burgerMenu').forEach((elem, index) => {
            elem.addEventListener('click', () => {
                mainWrapp.innerHTML = '';
                createPagesList(index);
                switcher.switchClick(index);
                // начало игры, при переходе на др страницу остаётся тру
                // if(index === 0 ) {
                // document.querySelector('.startBtn').style.visibility = 'hidden';
                // }
            });
        });
    }
};

window.addEventListener("DOMContentLoaded", function () {
    mainMenu.initMainMenu();
  });