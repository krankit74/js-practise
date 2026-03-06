const cells = document.querySelectorAll(".cell");
let turn = 0;
let currentPlayer = "X";
let timeout;


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

//    console.log("hi");
   
   timeout = setTimeout(computerturn, 3000);
   

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
     
    // console.log(`computerturn`);
    
    //block the user
    let blockIndex = BlockingMove();

    let choice;

    if(blockIndex !== -1){
        choice = blockIndex;
    } else {
        let randomIndex = Math.floor(Math.random()*empty.length);
        choice = empty[randomIndex];
    }

    cells[choice].innerText = "O"
    cells[choice].style.color = "purple";

    checkWinner();
    checkDraw();
    turn=0;
}

function BlockingMove(){

    for(let i of winPatterns){

        let a = i[0];
        let b = i[1];
        let c = i[2];

        let valA = cells[a].innerText;
        let valB = cells[b].innerText;
        let valC = cells[c].innerText;

        // X X _
        if(valA === "X" && valB === "X" && valC === ""){
            return c;
        }

        // X _ X
        if(valA === "X" && valC === "X" && valB === ""){
            return b;
        }

        // _ X X
        if(valB === "X" && valC === "X" && valA === ""){
            return a;
        }

    }

    return -1;
}

function checkWinner(){

    for(let i of winPatterns){

        let a = cells[i[0]].innerText;
        let b = cells[i[1]].innerText;
        let c = cells[i[2]].innerText;
        

        if(a !== "" && a === b && b === c){
            console.log(`yha se`);
            
            clearTimeout(timeout);

            console.log(`yaha tak`);
            
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
        clearTimeout(timeout);
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