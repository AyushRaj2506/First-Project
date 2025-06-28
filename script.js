console.log("Welcome to my game!");

let turn = "X";

let gameOver = 'false';

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

let gameContainer = document.querySelector('.gameContainer');

let box = document.querySelectorAll('.box');

let resetButton = document.querySelector('#Reset');

resetButton.addEventListener('click', () => {
    location.reload();
})

const gameWin = () => {
    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
    const boxText = document.querySelectorAll('.boxText');
    winPatterns.forEach(e => {
        if (boxText[e[0]].innerHTML === boxText[e[1]].innerHTML && boxText[e[1]].innerHTML === boxText[e[2]].innerHTML && boxText[e[0]].innerHTML != '') {
            let winner = document.querySelector('.info').innerText = boxText[e[0]].innerText + '  won';
            let gameOver = 'true';
            if (gameOver == 'true') {
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
            alert(winner);
            stopPropogation();
        }
    })
}

Array.from(box).forEach(e => {
    let boxText = e.querySelector('.boxText');
    e.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            gameWin();
            document.querySelector('.info').innerText = "Turn for " + turn;
        }
    })
})

