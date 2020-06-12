const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");
createBoard();

let colorChoice = "default";

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
    item.addEventListener("mouseover", colorSelection);
  });
}

function toggleButton(e) {
  colorChoice = e.target.id;
}

function colorSelection() {
  if (colorChoice === "default") {
    this.style.backgroundColor = "black";
  } else if (colorChoice === "color") {
    this.style.backgroundColor = rainbow();
  } else if (colorChoice === "shade") {
    darken(this);
  }
}

function rainbow() {
  let min = 1;
  let max = 360;

  let hue = Math.floor(Math.random() * (max - min + 1)) + min;
  return "hsl(" + hue + ", 90%, 70%)";
}

function darken(item) {
  if (!item.style.opacity) {
    item.style.opacity = 0;
  }
  item.style.backgroundColor = "black";

  if (item.style.opacity < 1) {
    item.style.opacity = Number(item.style.opacity) + 0.1;
  }
}

resetBtn.addEventListener("click", function (e) {
  document.querySelectorAll(".square").forEach((item) => {
    item.remove();
  });
  createBoard();
});

document
  .querySelectorAll(".buttons")
  .forEach((button) => button.addEventListener("click", toggleButton));
