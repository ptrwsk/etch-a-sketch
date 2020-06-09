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
    item.addEventListener("mouseover", (event) => {
      item.style.cssText = "background-color: black";
    });
  });
}

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", function (e) {
  document.querySelectorAll(".square").forEach((item) => {
    item.remove();
  });
  createBoard();
});
