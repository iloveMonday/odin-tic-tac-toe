function gameboard() {
    const board = [];
  
    for (let i = 0; i < 9; i++) {
      board.push(i);
    }
  
    const getBoard = () => board;
  
    function makeMove(x) {
      if (board[x] === "X" || board[x] === "O") {
        console.log("naw man no way");
        return;
      } else {
        board[x] = game.getPlayerTurn().token;
        game.switchPlayer();
      }
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
  
    function endGame(){
      game.switchPlayer();
        let winner = game.getPlayerTurn().name;
        console.log(winner + " is the WINNER");
    }
  
    return { getBoard, makeMove, checkWin, endGame };
  }
  
  function gamePlay() {
    const playerOneName = "Toni";
    const playerTwoName = "Botoman";
    //   const board = gameboard();
  
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
    const getPlayerTurn = () => activePlayer;
  
    function switchPlayer() {
      if (activePlayer === player[0]) {
        activePlayer = player[1];
      } else {
        activePlayer = player[0];
      }
    }
  
    function playRound(x) {
      console.log("Now Playing: " + getPlayerTurn().name);
      gboard.makeMove(x);
      screen.updateScreen();
      // console.table(gboard.getBoard());
      gboard.checkWin();
      // game.switchPlayer();
  
    }
  
    return { getPlayerTurn, switchPlayer, playRound };
  }
  
  function screenController() {
    function updateScreen() {
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
        // newButton.innerHTML = board[i];
        newButton.style.height = buttonSize;
        newButton.style.width = buttonSize;
        grid.appendChild(newButton);
      }
    }
  
    function handleClick() {
      let grid = document.getElementById("grid");
  
      grid.addEventListener("click", (e) => {
        game.playRound(e.target.dataset.index);
        console.log(e.target.dataset.index);
      });
    }
  
    return {
      updateScreen,
      handleClick,
    };
  }
  
  const gboard = gameboard();
  const game = gamePlay();
  const screen = screenController();
  
  let start = document.getElementById("start");
  start.addEventListener("click", () => {
    screen.updateScreen();
  });
  
  
  screen.updateScreen();
  screen.handleClick();
  
  
  