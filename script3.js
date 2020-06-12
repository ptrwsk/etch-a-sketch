const container = document.querySelector(".container");
const blackBtn = document.querySelector(".blackBtn");
const colorBtn = document.querySelector(".colorBtn");
const shadeBtn = document.querySelector(".shadeBtn");
// createBoard();
playersChoice = 16



function createBoard() {
 

  let numberOfRows = parseInt(playersChoice);
  container.setAttribute(
    "style",
    "grid-template-columns: repeat(" + numberOfRows + ", 1fr)"
  );
  for (i = 0; i < numberOfRows * numberOfRows; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseenter', draw);
    container.appendChild(square);
    square.classList.add("square");
  }
  
}


function activateButtons() {
    const blackBtn = document.querySelector(".blackBtn");
    const colorBtn = document.querySelector(".colorBtn");
    const shadeBtn = document.querySelector(".shadeBtn");
    // const eraser = document.querySelector("#eraser");
    const resetBtn = document.querySelector(".resetBtn");

    blackBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        colorBtn.classList.remove('active');
        shadeBtn.classList.remove('active');
        // eraser.classList.remove('active');
    });

    colorBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        blackBtn.classList.remove('active');
        shadeBtn.classList.remove('active');
        // eraser.classList.remove('active');
    });

    shadeBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        blackBtn.classList.remove('active');
        colorBtn.classList.remove('active');
        // eraser.classList.remove('active');
    });

    // eraser.addEventListener('click', (e) => {
    //     e.target.classList.toggle('active');
    //     blackBtn.classList.remove('active');
    //     shadeBtn.classList.remove('active');
    //     colorBtn.classList.remove('active');
    // });

    resetBtn.addEventListener('click', (e) => {
        resetGrid();
        blackBtn.classList.remove('active');
        shadeBtn.classList.remove('active');
        colorBtn.classList.remove('active');
        // eraser.classList.remove('active');
    });
}

function draw(e) {
    if (blackBtn.getAttribute('class').includes('active')) {
        drawBlack(e);
    } else if (colorBtn.getAttribute('class').includes('active')) {
        drawRainbow(e);
    } else if (shadeBtn.getAttribute('class').includes('active')) {
        drawShading(e);
    // } else if (eraser.getAttribute('class').includes('active')) {
    //     drawWhite(e);
    } else {

    }
}

function drawBlack(e) {
    e.target.style.backgroundColor = 'black';
}

// function drawWhite(e) {
//     e.target.style.backgroundColor = 'white';
// }

function drawRainbow(e) {
    e.target.style.backgroundColor = "hsl(" + Math.floor(Math.random() * (360 - 1 + 1)) + 1 + ", 90%, 70%)";;
}



function drawShading(e) {
    let currentColor = e.target.style.backgroundColor;
    let rgb = currentColor.slice(4).replace(')',"").split(',');

    let newRed = rgb[0] - 25.5;
    let newGreen = rgb[1] - 25.5;
    let newBlue = rgb[2] -25.5;

    if (newRed == 0 || newGreen == 0 || newBlue == 0) {
        newRed === 0;
        newGreen === 0;
        newBlue === 0;
    } else {
        newRed = newRed;
        newGreen = newGreen;
        newBlue = newBlue;
    }

    e.target.style.backgroundColor = `rgb(${newRed},${newGreen},${newBlue})`;
}


function resetGrid(){
    document.querySelectorAll(".square").forEach((item) => {
        item.remove();
    });
    let playersChoice = window.prompt(
        "How many squares per side to make the new grid?(less than 65)",
        ""
      );
    
      while (
        playersChoice == null ||
        playersChoice.length <= 0 ||
        !playersChoice.match("[0-9]+") ||
        playersChoice.match("[a-zA-Z]+") ||
        parseInt(playersChoice) > 64
      ) {
        playersChoice = window.prompt("Choose a number (smaller than 65)", "");
      }
    createBoard();
};


activateButtons();
createBoard()