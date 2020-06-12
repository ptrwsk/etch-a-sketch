const container = document.querySelector(".container");
createBoard();

function createBoard() {
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

  let numberOfRows = parseInt(playersChoice);
  container.setAttribute(
    "style",
    "grid-template-columns: repeat(" + numberOfRows + ", 1fr)"
  );
  for (i = 0; i < numberOfRows * numberOfRows; i++) {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }

  document.querySelectorAll(".square").forEach((item) => {
    drawBlack(item);
  });
}
function drawBlack(item) {
  item.addEventListener("mouseover", (event) => {
    item.style.backgroundColor = "black";
  });
}
const blackBtn = document.querySelector(".blackBtn");

blackBtn.addEventListener("click", function (e) {
  document.querySelectorAll(".square").forEach((item) => {
    drawBlack(item);
  });
});

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", function (e) {
  document.querySelectorAll(".square").forEach((item) => {
    item.remove();
  });
  createBoard();
});

const colorBtn = document.querySelector(".colorBtn");

colorBtn.addEventListener("click", function (e) {
  color();
});
function color() {
  document.querySelectorAll(".square").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      let min = 1;
      let max = 360;

      let hue = Math.floor(Math.random() * (max - min + 1)) + min;
      item.style.backgroundColor = "hsl(" + hue + ", 90%, 70%)";
    });
  });
}

const shadeBtn = document.querySelector(".shadeBtn");

shadeBtn.addEventListener("click", function (e) {
  shade();
});
function shade() {
  document.querySelectorAll(".square").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      if (!item.style.opacity) {
        item.style.opacity = 0;
      }

      item.style.backgroundColor = "black";

      if (item.style.opacity < 1) {
        item.style.opacity = Number(item.style.opacity) + 0.1;
      }
    });
  });
}
