const grid = document.querySelector("#grid");
const gridDiv = document.createElement('div');

// Original 16x16 grid properties // 

grid.style.display = 'grid';
grid.style.border = '5px solid black';
grid.style.height = '70vh';
grid.style.width = '70vh';
grid.style.gridTemplateRows = 'repeat(16, 1fr)';
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';

for (let i = 0; i < 16 * 16; i++) {
    let gridDivCopy = gridDiv.cloneNode(true);
    grid.appendChild(gridDivCopy);

    let divStyle = gridDivCopy.style;
    divStyle.backgroundColor = 'white';

    gridDivCopy.addEventListener('mouseenter', () => {
        divStyle.backgroundColor = 'black';
    })
};

// Reset grid and choose grid size /// 

const blackWhite = document.querySelector('#blackWhite');
blackWhite.addEventListener('click', () => {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let num = prompt('Enter number of boxes per side (max: 100):');
    if (num > 100) {
        num = 100
    };

    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        let gridDivCopy = gridDiv.cloneNode(true);
        grid.appendChild(gridDivCopy);

        let divStyle = gridDivCopy.style;
        divStyle.backgroundColor = 'white';

        gridDivCopy.addEventListener('mouseenter', () => {
            divStyle.backgroundColor = 'black';
        })
    }
});


// Random color generator // 

function randomColor()
{
     rColor='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+
     ','+Math.round(Math.random()*255)+')';

     return rColor;
};

// Random color mode // 

const color = document.querySelector('#color');
color.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let num = prompt('Enter number of boxes per side (max: 100):');
    if (num > 100) {
        num = 100
    };

    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        let gridDivCopy = gridDiv.cloneNode(true);
        grid.appendChild(gridDivCopy);

        let divStyle = gridDivCopy.style;
        divStyle.backgroundColor = 'white';

        gridDivCopy.addEventListener('mouseenter', () => {
            divStyle.backgroundColor = `${randomColor()}`;

        });
    };
});

// Grayscale function //

function grayScale() {
    let currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) currentOpacity += 0.1;
    this.style.opacity = currentOpacity;
  }

  // Grayscale mode // 

  const grayscale = document.querySelector('#grayscale');
  grayscale.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let num = prompt('Enter number of boxes per side (max: 100):');
    if (num > 100) {
        num = 100
    };

    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        let gridDivCopy = gridDiv.cloneNode(true);
        grid.appendChild(gridDivCopy);

        let divStyle = gridDivCopy.style;
        divStyle.backgroundColor = 'black';
        divStyle.opacity = '0.0';

        gridDivCopy.addEventListener('mouseenter', () => {
            divStyle.opacity = `${parseFloat(divStyle.opacity) + 0.2}`;

        });
    };
});