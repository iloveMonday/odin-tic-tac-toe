let x = 0;
let y = 0;

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

  const getBoard = () => board;



//   const makeMove = (x, y, player) => {
//     if (board[x][y] !== " ") return;

//     board[x][y].addToken(player);
//   };



//   const updateBoard = () => {
//     const boardWithCellValues = board.map((row) =>
//       row.map((box) => box.getValue())
//     );
//     console.log(boardWithCellValues);
//   };


//   return { getBoard, makeMove, updateBoard };
return board;
}




function box() {
  let value = "why";

//   const addToken = (player) => {
//     value = player;
//   };

//   const getValue = () => value;

//   return {
//     addToken,
//     getValue,
//   };
return value;
}

function gamePlay() {
  const playerOneName = "Toni";
  const playerTwoName = "Botoman";
  const board = gameboard();

  const players = [
    {
      name: playerOneName,
      token: "X",
    },
    {
      name: playerTwoName,
      token: "O",
    },
  ];

  let turn = players[0];


  const turnSwitch = () => {
    turn = turn === players[0] ? players[1] : players[0]; 
  };

  const getPlayerTurn = () => turn;

  const playRound = (x, y) => {
    board.makeMove(x, y, getPlayerTurn().token);

    turnSwitch();
    updateBoard();
    console.log(getPlayerTurn().token);
  }

console.log(board);
return {
    playRound,
    turnSwitch
};

};

console.table(gamePlay());

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

