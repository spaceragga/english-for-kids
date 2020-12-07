import { cards } from './cards.js';

export const statistics = {
    statCategory: ['"Word"', '"Translation"', '"Category"', '"Clicks"', '"Correct"', '"Wrong"', '"%correct"'],
    clickStat: {},

    createStatisticsPage() {
        const mainWrapp = document.querySelector(".main-wrapp");

        const statWrapp = document.createElement('div');
        const statatistics = document.createElement('div');
        const table = document.createElement('div');

        statWrapp.classList.add('statWrapp');
        statatistics.classList.add('statatistics');
        table.classList.add('tableStat');

        mainWrapp.appendChild(statWrapp);
        statWrapp.appendChild(statatistics);
        statatistics.appendChild(table);

        for(let i = 0; i <= 64; i++) {
            const tr = document.createElement('tr');
            statatistics.appendChild(tr);

            for(let j = 0; j <= 6; j++) {
                const td =  document.createElement('td');
                tr.appendChild(td);

                if(i === 0) {
                    td.innerHTML = this.statCategory[j];
                }

                if(j === 0 && i !== 0) {
                    if(i <= 8) td.innerHTML = cards[1][i % 8].word;
                    if(i > 8 && i <= 16) td.innerHTML = cards[2][i % 8].word;
                    if(i > 16 && i <= 24) td.innerHTML = cards[3][i % 8].word;
                    if(i > 24 && i <= 32) td.innerHTML = cards[4][i % 8].word;
                    if(i > 32 && i <= 40) td.innerHTML = cards[5][i % 8].word;
                    if(i > 40 && i <= 48) td.innerHTML = cards[6][i % 8].word;
                    if(i > 48 && i <= 56) td.innerHTML = cards[7][i % 8].word;
                    if(i > 56 && i <= 64) td.innerHTML = cards[8][i % 8].word;
                }

                if(j === 1 && i !== 0) {
                    if(i <= 8) td.innerHTML = cards[1][i % 8].translation;
                    if(i > 8 && i <= 16) td.innerHTML = cards[2][i % 8].translation;
                    if(i > 16 && i <= 24) td.innerHTML = cards[3][i % 8].translation;
                    if(i > 24 && i <= 32) td.innerHTML = cards[4][i % 8].translation;
                    if(i > 32 && i <= 40) td.innerHTML = cards[5][i % 8].translation;
                    if(i > 40 && i <= 48) td.innerHTML = cards[6][i % 8].translation;
                    if(i > 48 && i <= 56) td.innerHTML = cards[7][i % 8].translation;
                    if(i > 56 && i <= 64) td.innerHTML = cards[8][i % 8].translation;
                }

                if(j === 2 && i !== 0) {
                    if(i <= 8) td.innerHTML = cards[0][0];
                    if(i > 8 && i <= 16) td.innerHTML = cards[0][1];
                    if(i > 16 && i <= 24) td.innerHTML = cards[0][2];
                    if(i > 24 && i <= 32) td.innerHTML = cards[0][3];
                    if(i > 32 && i <= 40) td.innerHTML = cards[0][4];
                    if(i > 40 && i <= 48) td.innerHTML = cards[0][5];
                    if(i > 48 && i <= 56) td.innerHTML = cards[0][6];
                    if(i > 56 && i <= 64) td.innerHTML = cards[0][7];
                }

                if(j === 3 && i !== 0) {
                    if(i <= 8) td.innerHTML = this.clickStat[1][i % 8].clicks;
                    if(i > 8 && i <= 16) td.innerHTML = this.clickStat[2][i % 8].clicks;
                    if(i > 16 && i <= 24) td.innerHTML = this.clickStat[3][i % 8].clicks;
                    if(i > 24 && i <= 32) td.innerHTML = this.clickStat[4][i % 8].clicks;
                    if(i > 32 && i <= 40) td.innerHTML = this.clickStat[5][i % 8].clicks;
                    if(i > 40 && i <= 48) td.innerHTML = this.clickStat[6][i % 8].clicks;
                    if(i > 48 && i <= 56) td.innerHTML = this.clickStat[7][i % 8].clicks;
                    if(i > 56 && i <= 64) td.innerHTML = this.clickStat[8][i % 8].clicks;
                }

                if(j === 4 && i !== 0) {
                    if(i <= 8) td.innerHTML = this.clickStat[1][i % 8].correct;
                    if(i > 8 && i <= 16) td.innerHTML = this.clickStat[2][i % 8].correct;
                    if(i > 16 && i <= 24) td.innerHTML = this.clickStat[3][i % 8].correct;
                    if(i > 24 && i <= 32) td.innerHTML = this.clickStat[4][i % 8].correct;
                    if(i > 32 && i <= 40) td.innerHTML = this.clickStat[5][i % 8].correct;
                    if(i > 40 && i <= 48) td.innerHTML = this.clickStat[6][i % 8].correct;
                    if(i > 48 && i <= 56) td.innerHTML = this.clickStat[7][i % 8].correct;
                    if(i > 56 && i <= 64) td.innerHTML = this.clickStat[8][i % 8].correct;
                }

                if(j === 5 && i !== 0) {
                    if(i <= 8) td.innerHTML = this.clickStat[1][i % 8].wrong;
                    if(i > 8 && i <= 16) td.innerHTML = this.clickStat[2][i % 8].wrong;
                    if(i > 16 && i <= 24) td.innerHTML = this.clickStat[3][i % 8].wrong;
                    if(i > 24 && i <= 32) td.innerHTML = this.clickStat[4][i % 8].wrong;
                    if(i > 32 && i <= 40) td.innerHTML = this.clickStat[5][i % 8].wrong;
                    if(i > 40 && i <= 48) td.innerHTML = this.clickStat[6][i % 8].wrong;
                    if(i > 48 && i <= 56) td.innerHTML = this.clickStat[7][i % 8].wrong;
                    if(i > 56 && i <= 64) td.innerHTML = this.clickStat[8][i % 8].wrong;
                }

                if(j === 6 && i !== 0) {
                    if(i <= 8) {
                        let correctPer = 100 / (this.clickStat[1][i % 8].wrong + this.clickStat[1][i % 8].correct) * this.clickStat[1][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 8 && i <= 16) {
                        let correctPer = 100 / (this.clickStat[2][i % 8].wrong + this.clickStat[2][i % 8].correct) * this.clickStat[2][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 16 && i <= 24) {
                        let correctPer = 100 / (this.clickStat[3][i % 8].wrong + this.clickStat[3][i % 8].correct) * this.clickStat[3][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 24 && i <= 32) {
                        let correctPer = 100 / (this.clickStat[4][i % 8].wrong + this.clickStat[4][i % 8].correct) * this.clickStat[4][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 32 && i <= 40) {
                        let correctPer = 100 / (this.clickStat[5][i % 8].wrong + this.clickStat[5][i % 8].correct) * this.clickStat[5][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 40 && i <= 48) {
                        let correctPer = 100 / (this.clickStat[6][i % 8].wrong + this.clickStat[6][i % 8].correct) * this.clickStat[6][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 48 && i <= 56) {
                        let correctPer = 100 / (this.clickStat[7][i % 8].wrong + this.clickStat[7][i % 8].correct) * this.clickStat[7][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                    if(i > 56 && i <= 64) {
                        let correctPer = 100 / (this.clickStat[8][i % 8].wrong + this.clickStat[8][i % 8].correct) * this.clickStat[8][i % 8].correct;
                        td.innerHTML = correctPer ? Math.round(correctPer) : 0;
                    }
                }
            }
        }
    }
}