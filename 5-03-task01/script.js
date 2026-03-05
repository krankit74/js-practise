const cells = document.querySelectorAll(".cell");
let turn = 0;
let currentPlayer = "X";


const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {

    if(turn != 0) return;
   
    if (cell.innerText !== "") return;
    cell.innerText = "X";
    cell.style.color = "olive";

    checkWinner();
    checkDraw();
    turn = 1;

   setTimeout(computerturn, 3000);
    

  });
});




function computerturn() {
    let empty = [];
    
    cells.forEach((cell, index) => {
        if(cell.innerText === "") {
           empty.push(index);
        }
    });

    if(empty.length === 0) return;
    
    let randomIndex = Math.floor(Math.random() * empty.length);

    let choice = empty[randomIndex];
     if(turn != 1)  return;
    cells[choice].innerText = "O"
    cells[choice].style.color = "purple";

    checkWinner();
    checkDraw();
    turn=0;
}

function checkWinner(){

    for(let i of winPatterns){

        let a = cells[i[0]].innerText;
        let b = cells[i[1]].innerText;
        let c = cells[i[2]].innerText;
        

        if(a !== "" && a === b && b === c){
            cells.innerText = b;
            alert(a + " Wins!");
            resetGame();
            return;
        }
    }

    checkDraw();
}

function checkDraw(){

    let isDraw = true;

    cells.forEach(cell => {
        if(cell.innerText === ""){
            isDraw = false;
        }
    });

    if(isDraw){
        alert("Game Draw");
        resetGame();
    }

}

function resetGame(){
    cells.forEach(cell => {
        cell.innerText = "";
        cell.style.color= "";
    });
}