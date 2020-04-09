let items = document.querySelectorAll('.item');
let count = 0;
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let c1 = document.querySelector('#c1');
let c2 = document.querySelector('#c2');
let c3 = document.querySelector('#c3');
let container = document.querySelector('.container');
let hr = document.querySelector('hr');
let playAgain = document.querySelector('.play-again');
let gameOver = false;
let congrats = document.querySelector('#congrats');

let player1 = prompt('player1');

let player2 = prompt('player2');

items.forEach(item => {

    let player = function (name, sign) {
        return {
            name,
            write() {
                item.textContent = sign;
            }
        }
    };



    let X = player(player1, 'X');

    let O = player(player2, 'O');

    function game() {
        const counterCreator = () => {
            return () => {
                count++;
            };
        };

        const counter = counterCreator();
        counter();

        function writeXorO() {
            if (count % 2 === 1 && item.textContent === '') {
                X.write();
                X.name;

            } else if (count % 2 === 0 && item.textContent === '') {
                O.write();
                O.name;
            } else {
                count--;
            }
        }


        writeXorO();

        function cssAndGameOver() {
            hr.style.display = 'block';
            container.style.marginTop = '3rem';
            gameOver = true;
            div = document.createElement('div');
            

            if (count % 2 === 1) {
                congrats.textContent = `The winner is ${X.name}!`;
                congrats.classList.add('congrats');
            } else if (count % 2 === 0) {
                congrats.textContent = `The winner is ${O.name}!`;
                congrats.classList.add('congrats');
            }
        }


        function drawLine() {
            if (a1.textContent === a2.textContent && a2.textContent === a3.textContent && a1.textContent !== '' && a2.textContent !== '' && a3.textContent !== '') {
                hr.classList.add('hr-a1-a3');
                cssAndGameOver();
            } else if (a1.textContent === b2.textContent && b2.textContent === c3.textContent && a1.textContent !== '' && b2.textContent !== '' && c3.textContent !== '') {
                hr.classList.add('hr-a1-c3');
                cssAndGameOver();
            } else if (a3.textContent === b2.textContent && b2.textContent === c1.textContent && a3.textContent !== '' && b2.textContent !== '' && c1.textContent !== '') {
                hr.classList.add('hr-a3-c1');
                cssAndGameOver();
            } else if (b1.textContent === b2.textContent && b2.textContent === b3.textContent && b1.textContent !== '' && b2.textContent !== '' && b3.textContent !== '') {
                hr.classList.add('hr-b1-b3');
                cssAndGameOver();
            } else if (c1.textContent === c2.textContent && c2.textContent === c3.textContent && c1.textContent !== '' && c2.textContent !== '' && c3.textContent !== '') {
                hr.classList.add('hr-c1-c3');
                cssAndGameOver();
            } else if (a1.textContent === b1.textContent && b1.textContent === c1.textContent && a1.textContent !== '' && b1.textContent !== '' && c1.textContent !== '') {
                hr.classList.add('hr-a1-c1');
                cssAndGameOver();
            } else if (a2.textContent === b2.textContent && b2.textContent === c2.textContent && a2.textContent !== '' && b2.textContent !== '' && c2.textContent !== '') {
                hr.classList.add('hr-a2-c2');
                cssAndGameOver();
            } else if (a3.textContent === b3.textContent && b3.textContent === c3.textContent && a3.textContent !== '' && b3.textContent !== '' && c3.textContent !== '') {
                hr.classList.add('hr-a3-c3');
                cssAndGameOver();
            } else if (a1.textContent !== '' && a2.textContent !== '' && a3.textContent !== '' && b1.textContent !== '' && b2.textContent !== '' && b3.textContent !== '' && c1.textContent !== '' && c2.textContent !== '' && c3.textContent !== '') {
                congrats.textContent = 'It a Tie!';
                congrats.classList.add('congrats');
            }
        }

        drawLine();
    }

    item.addEventListener('click', game);
});

playAgain.addEventListener('click', function () {
    window.location.reload(true);
});