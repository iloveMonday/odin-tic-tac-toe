
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

  function makeMove() {
    console.log()
  };


  return { getBoard, 
            makeMove, 
            // updateBoard 
        };
};

// console.log(gameboard());

function box() {
    let value = "why";

    const playerToken = (player) =>{
        value = player;
    };

    const getValue = () => value;
    
    // if (game.getPlayerTurn === player[0])
    // {console.log("Toni Turn");}
    // else {console.log("Bo Turn");}

    return{
        getValue,
        playerToken
    }
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
    console.log(activePlayer)    
    };

//   const getPlayerTurn = () => activePlayer;
    function getPlayerTurn(){
        return activePlayer;
    };




return {
    // playRound,
    switchPlayer,
    getPlayerTurn
    };
};

const game = gamePlay();

game.switchPlayer();
game.switchPlayer();
game.switchPlayer();
console.log(game.getPlayerTurn());


// console.table(gamePlay());
// console.table(getBoard());

// function game(
//     playerOneName = "Tony",
//     playerTwoName = "Computer")
//     {
//         const board = gameboard();
//         const players = [
//             {
//                 name: playerOneName,
//                 token: "X"
//             },
//             {
//                 name: playerTwoName,
//                 token: "O"
//             }
//         ]

//         return {board, players};
// }

