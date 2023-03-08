const container = document.querySelector('#container');
const colorBtn = document.querySelector('.colorBtn')
const rainbowBtn = document.querySelector('.rainbow')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.textContent = ('');
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(16, 16)



colorBtn.addEventListener('click', function(){
    console.log('Clicked')
})

rainbowBtn.addEventListener('click', function(){
    console.log('rainbow road')
})

eraserBtn.addEventListener('click', function(){
    console.log('Destroy this div')
})

clearBtn.addEventListener('click', function(){
    console.log('Muah-hahahaha')
})