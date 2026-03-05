const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "") return;

    cell.innerText = currentPlayer;
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
  });
});