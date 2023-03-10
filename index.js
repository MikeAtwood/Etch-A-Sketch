let color = 'black';

const container = document.querySelector('#container');
const colorBtn = document.querySelector('.colorBtn')
const rainbowBtn = document.querySelector('.rainbow')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')
const sizeBtn = document.querySelector('.size')


colorBtn.onclick = () => changeColor('black')
clearBtn.onclick = () => clearBoard();
eraserBtn.onclick = () => changeColor('white');
rainbowBtn.onclick = () => changeColor('rainbow');
sizeBtn.onclick = () => getSize();

// This creates our grid tables for users to draw
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", squareColor);
        cell.addEventListener("mousedown", squareColor);
        cell.style.backgroundColor = "white";
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(16, 16)


// Defines the default color
function squareColor() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

// function the clearBtn calls to clear the board
function clearBoard() {
    let container = document.querySelector('#container')
    let cells = container.querySelectorAll('div')
    cells.forEach((div) => div.style.backgroundColor = 'white')
}
// This allows the user to change the color using a button
function changeColor(choice) {
    color = choice;
}

// TODO
// User input to change amount of square divs to work with
function getSize() {
    let choice = prompt("choose size")
    if (choice <= 100 && choice >= 2) {
        return makeRows(choice * choice)
    } else {
        return "Pick a size between 2-100"
    }
}