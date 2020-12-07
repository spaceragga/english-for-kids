import './style.css';
import { cards } from './cards.js';
import { statistics } from './statistics.js';
import { createPagesList } from './pages.js';
import { switcher } from './switcher.js';

const mainMenu = {

    initMainMenu() {
        const mainWrapp = document.querySelector(".main-wrapp");
        const inputBurger = document.querySelector("input");
        
        createPagesList(0);

        document.querySelectorAll('#burgerMenu').forEach((elem, index) => {
            elem.addEventListener('click', () => {
                mainWrapp.innerHTML = '';
                inputBurger.checked = false;
                if(index !== 9) {
                    createPagesList(index);
                    switcher.switchClick(index);
                } else {
                    document.querySelector('.notes').innerHTML = '';
                    statistics.createStatisticsPage();
                }
            });
        });

        statistics.clickStat = JSON.parse(localStorage.getItem('myobj113'));
        if(statistics.clickStat === null) {
            statistics.clickStat = cards;
        }

        // document.addEventListener('click', () => {
            // inputBurger.checked = false;
        // });
    }
};

window.addEventListener("DOMContentLoaded", function () {
    mainMenu.initMainMenu();
});