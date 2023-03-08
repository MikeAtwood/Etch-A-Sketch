const container = document.querySelector('#container');
const colorBtn = document.querySelector('.colorBtn')
const rainbowBtn = document.querySelector('.rainbow')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')

let color = 'black';


clearBtn.addEventListener('click', clearBoard)

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
    this.style.backgroundColor = color;
} 




colorBtn.addEventListener('click', function(e){
    cell.style.backgroundColor = 'red'
})

rainbowBtn.addEventListener('click', function(){
    console.log('rainbow road')
})

eraserBtn.addEventListener('click', function(){
    let cells = document.querySelector('div')
    cells.style.backgroundColor = 'white'
})




// function the clearBtn calls to clear the board
function clearBoard() {
    let container = document.querySelector('#container')
    let cells = container.querySelectorAll('div')
    cells.forEach((div) => div.style.backgroundColor = 'white')
}