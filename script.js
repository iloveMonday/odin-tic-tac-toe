let grid = document.getElementById("grid");

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

  function buildBoard() {
    let buttonWidth = grid.offsetWidth;
    let buttonSize = (buttonWidth / 3 / buttonWidth) * 100 + "%";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let newButton = document.createElement("button");
        newButton.className = [i] + [j];
        newButton.style.height = buttonSize;
        newButton.style.width = buttonSize;
        grid.appendChild(newButton);
      }
    }
  }

  const getBoard = () => board;
  //   function getBoard() {
  //     return board;
  //   }

  function makeMove(x, y) {
    if (board[x][y] === "X" || board[x][y] === "O") {
      console.log("naw man no way");
    } else {
      board[x][y] = cell.playerToken(game.getPlayerTurn().token);
      game.switchPlayer();
    }
  }

  function checkWin() {
    let xWin = 0;
    let oWin = 0;

    function checkAcross() {
      for (let i = 0; i < rows; i++) {
        let xRow = 0;
        let oRow = 0;
        for (let j = 0; j < columns; j++) {
          if (board[i][j] === "X") {
            xRow++;
          } else if (board[i][j] === "O") {
            oRow++;
          }

          if (xRow === 3) {
            xWin++;
          } else if (oRow === 3) {
            oWin++;
          }
        }
      }
    }

    function checkDown() {
      for (let i = 0; i < rows; i++) {
        let xCol = 0;
        let oCol = 0;
        for (let j = 0; j < columns; j++) {
          if (board[j][i] === "X") {
            xCol++;
          } else if (board[j][i] === "O") {
            oCol++;
          }

          if (xCol === 3) {
            xWin++;
          } else if (oCol === 3) {
            oWin++;
          }
        }
      }
    }

    function checkDiagonal() {
      let xDown = 0;
      let oDown = 0;
      for (let i = 0; i < rows; i++) {
        if (board[i][i] === "X") {
          xDown++;
        } else if (board[i][i] === "O") {
          oDown++;
        }
        if (xDown === 3) {
          xWin++;
        } else if (oDown === 3) {
          oWin++;
        }
      }

      let d = 2;
      let xUp = 0;
      let oUp = 0;
      for (let i = 0; i < rows; i++) {
        if (board[i][d] === "X") {
          xUp++;
        } else if (board[i][d] === "O") {
          oUp++;
        }
        d--;

        if (xUp === 3) {
          xWin++;
        } else if (oUp === 3) {
          oWin++;
        }
      }
    }

    function returnWin() {
      if (xWin === 1) {
        console.log("X WINS MY DUDE");
      } else if (oWin === 1) {
        console.log("O WINS MY DUDE");
      }
    }

    checkAcross();
    checkDown();
    checkDiagonal();
    returnWin();
  }

  return {
    getBoard,
    buildBoard,
    makeMove,
    checkWin,
  };
}

function box() {
  let value = "";

  function playerToken(player) {
    value = player;
    return value;
  }

  function getValue() {
    return value;
  }

  return {
    getValue,
    playerToken,
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

  function switchPlayer() {
    if (activePlayer === player[0]) {
      activePlayer = player[1];
    } else {
      activePlayer = player[0];
    }
  }

  const getPlayerTurn = () => activePlayer;

  function playRound() {
    screen.updateScreen();
    console.log("Playing: " + getPlayerTurn().name);
    let x = prompt("enter X: ");
    let y = prompt("enter Y: ");

    board.makeMove(x, y);
    console.table(board.getBoard());
    // switchPlayer();
    board.checkWin();
    playRound();
  }

  return {
    playRound,
    switchPlayer,
    getPlayerTurn,
  };
}

function screenController() {
  function updateScreen() {
    console.log("hi");

    let grid = document.getElementById("grid");
    let buttonWidth = grid.offsetWidth;
    let buttonSize = (buttonWidth / 3 / buttonWidth) * 100 + "%";

    grid.innerHTML = "";

    board.getBoard().forEach((e) => {
      e.forEach((e) => {
        let newButton = document.createElement("button");
        newButton.className = "board-button";
        newButton.innerHTML = e.value;
        newButton.style.height = buttonSize;
        newButton.style.width = buttonSize;
        grid.appendChild(newButton);
      });
    });
    handleClick();
  }

  function handleClick() {

  let gridButton = document.querySelector(".board-button");
  gridButton.addEventListener("click", () =>{
      gridButton.style.backgroundColor = "red";
  })

  };


  return { updateScreen, handleClick };
}

const game = gamePlay();
const board = gameboard();
const cell = box();
const screen = screenController();

// board.buildBoard();
// console.table(board.getBoard());
// console.log(game.playRound());
// console.log(game.playRound());
screen.updateScreen();
// game.playRound();
