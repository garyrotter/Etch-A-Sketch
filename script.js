//select the div to add the grid to
const etch = document.getElementById('etch')

// function should make a div to hold our grid with id "grid"

function makeDiv() {
    let grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    etch.appendChild(grid).className = 'grid';
}

makeDiv();

// function should grab new div "grid" and then make our actual grid inside

const grid = document.getElementById('grid');

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for( c = 0; c < ( rows * cols); c++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = "grid-item";
    };
};

makeGrid(20,20);

// Time to add an eventListener to the buttons. Click will return button id.

const btns = document.querySelectorAll('.gridsizes');

// Make a function that takes the button id and turns it into  the 
// "rows" and "cols" parameters for the makeGrid()

// this function should also reset the grid to blank

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.id === '20x20') {
            document.getElementById("grid").innerHTML = "";
            makeGrid(20, 20);
        } else if (event.target.id === '30x30') {
            document.getElementById("grid").innerHTML = "";
            makeGrid(30, 30);
        } else if (event.target.id === '40x40') {
            document.getElementById("grid").innerHTML = "";
            makeGrid(40, 40);
        } else if (event.target.id === '50x50') {
            document.getElementById("grid").innerHTML = "";
            makeGrid(50, 50);
        } else if (event.target.id === '60x60') {
            document.getElementById("grid").innerHTML = "";
            makeGrid(60, 60);
        } else {
            return;
        }
    })
})

const scaleColor = document.querySelectorAll('.lightDark');
    scaleColor.forEach(btn => {
        btn.addEventListener('click', event => {
            console.log(event.target.id);
        })
    })

const solidColor = document.querySelectorAll('.whiteBlack');
    solidColor.forEach(btn => {
        btn.addEventListener('click', event => {
            console.log(event.target.id);
        })
})

// this function should also output an active tag to the button clicked
// so the css knows which is active.

// this function should also remove active tag from previous button



