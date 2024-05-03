function gameboard() {
  const board = [];
  let gameover = false;

  for (let i = 0; i < 9; i++) {
    board.push(i);
  }

  const getBoard = () => board;
  const isGameOver = () => gameover;

  const makeMove = function(x) {
    if (board[x] === "X" || board[x] === "O") {
      console.log("naw man no way");
      return;
    } 
      board[x] = game.getPlayerTurn().token;
      game.switchPlayer();
  }

  function checkWin() {
    if (
      (board[0] === board[1] && board[1] === board[2]) ||
      (board[3] === board[4] && board[4] === board[5]) ||
      (board[6] === board[7] && board[7] === board[8]) ||
      (board[0] === board[3] && board[3] === board[6]) ||
      (board[1] === board[4] && board[4] === board[7]) ||
      (board[2] === board[5] && board[5] === board[8]) ||
      (board[0] === board[4] && board[4] === board[8]) ||
      (board[2] === board[4] && board[4] === board[6])
    )
      endGame();
  }

  function endGame() {
    gameover = true;
    game.switchPlayer();
    let winner = game.getPlayerTurn().name;
    console.log(winner + " is the WINNER");
  }

  function resetBoard() {
    board = [];

    for (let i = 0; i < 9; i++) {
      board.push(i);
    }
  }

  return { getBoard, makeMove, checkWin, endGame, resetBoard, isGameOver };
}

function gamePlay() {
  let playerOneName = "Toni";
  let playerTwoName = "Botoman";

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

  const updateNames = function (x, y) {
    playerOneName = x;
    playerTwoName = y;
  };

  let activePlayer = player[0];
  const getPlayerTurn = () => activePlayer;

  function switchPlayer() {
    if (activePlayer === player[0]) {
      activePlayer = player[1];
    } else {
      activePlayer = player[0];
    }
  }

  function playRound(x) {
    if (gboard.isGameOver() === false) {
      console.log("Now Playing: " + getPlayerTurn().name);
      gboard.makeMove(x);
      screen.updateScreen();
      // console.table(gboard.getBoard());
      gboard.checkWin();
    }
  }

  return { getPlayerTurn, switchPlayer, playRound, updateNames };
}

function screenController() {
  let updateScreen = function () {
    let grid = document.getElementById("grid");
    let buttonWidth = grid.offsetWidth;
    let buttonSize = (buttonWidth / 3 / buttonWidth) * 100 + "%";
    let board = gboard.getBoard();

    grid.innerHTML = "";

    for (let i = 0; i < board.length; i++) {
      let newButton = document.createElement("button");
      if (board[i] === "X" || board[i] === "O") {
        newButton.innerHTML = board[i];
      }
      newButton.className = "board-button";
      newButton.setAttribute("data-index", i);
      newButton.style.height = buttonSize;
      newButton.style.width = buttonSize;
      grid.appendChild(newButton);
    }
  };

  let handleClick = function () {
    let grid = document.getElementById("grid");

    grid.addEventListener("click", (e) => {
      game.playRound(e.target.dataset.index);
      console.log(e.target.dataset.index);
    });
  };

  let startGame = function () {
    let p1input = document.getElementById("p1-name");
    let p1name = document.querySelector(".player1");
    let p2input = document.getElementById("p2-name");
    let p2name = document.querySelector(".player2");

    if (!p1input.value || !p2input.value) {
      alert("Input Player Names");
      return;
    }
      p1name.innerHTML = "X: " + p1input.value;
      p2name.innerHTML = "O: " + p2input.value;
    
    game.updateNames(p1input.value, p2input.value);
    updateScreen();
    handleClick();
  };

  return {
    updateScreen,
    handleClick,
    startGame,
  };
}

const gboard = gameboard();
const game = gamePlay();
const screen = screenController();

const start = document.getElementById("start");
start.addEventListener("click", () => {
  //   screen.updateScreen();
  //   screen.handleClick();
  screen.startGame();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  location.reload();
});
