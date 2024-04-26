
function gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(box());
    }
  }

//const getBoard = () => board;
  function getBoard(){
    return board;
  }

  function makeMove(x, y) {
    if (board[x][y] === "X" || board[x][y] ==="O"){
        console.log("naw man no way");
    }
    else {
        board[x][y] = cell.playerToken(game.getPlayerTurn().token);
        game.switchPlayer();
    }
  };

  function checkWin(){
    // if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
    //     console.log("YOU FUCKIN WON.")
    // }

    for (let i = 0; i < rows; i++) {
        let xes = 0;
        let oes = 0;
        for (let j = 0; j < columns; j++) {

          if(board[i][j] === "X"){
            xes++;
          }
          else if (board[i][j] === "O"){
            oes++
          }
          
          if(xes === 3){
            console.log("X WINS MY DUDE");
          }
          else if(oes === 3){
            console.log("O WINS MY DUDE");
          }
          
        }
        console.log("x: " + xes);
    };
};


  return { getBoard, 
            makeMove, 
            checkWin
        };
};





function box() {
    let value = "";

    function playerToken(player) {
        value = player;
        return value;
    };

    function getValue(){
        return value;
    };

    return   {
        getValue,
        playerToken
    };
  }





function gamePlay() {
  const playerOneName = "Toni";
  const playerTwoName = "Botoman";
  const board = gameboard();

  const player = [
    {
      name: playerOneName,
      token: "X",
    },
    {
      name: playerTwoName,
      token: "O",
    },
  ];

  let activePlayer = player[0];


  function switchPlayer(){ 
    if (activePlayer === player[0]){
        activePlayer = player[1];
    }
    else {activePlayer = player[0];}   
    };

  const getPlayerTurn = () => activePlayer;
    // function getPlayerTurn(){
    //     return activePlayer;
    // };







    function playRound(){
        console.log("Playing: " + getPlayerTurn().name);
        let x = prompt("enter X: ")
        let y = prompt("enter Y: ")

        board.makeMove(x, y);
        
        console.table(board.getBoard());
        // switchPlayer();
        board.checkWin();
        playRound();
    };




return {
    playRound,
    switchPlayer,
    getPlayerTurn,
    };
};



const game = gamePlay();
const board = gameboard();
const cell = box();


// game.switchPlayer();
// console.log(game.getPlayerTurn().token);
// board.makeMove(1, 1);
// console.table(board.getBoard());
// game.switchPlayer();
// board.makeMove(2,0);
console.table(board.getBoard());
console.log(game.playRound());
console.log(game.playRound());
