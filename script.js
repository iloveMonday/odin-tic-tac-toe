
    const board = [];
  
    for (let i = 0; i < 9; i++) {
      board.push('');
    }
  
    const getBoard = () => board;
  
    function makeMove(x) {
      if (board[x] === "X" || board[x] === "O") {
        console.log("naw man no way");
      } else {
        board[x] = getPlayerTurn().token;
        switchPlayer();
      }
    }
  
    function checkWin() {
      if (
        (board[0] === board[1] && board[1] === board[2]) ||
        (board[3] === board[4] && board[4] === board[5]) ||
        (board[6] === board[7] && board[7] === board[8])
      ) {
        console.log("WINNER");
      }
  
    };
  
  
  
  
  

    const playerOneName = "Toni";
    const playerTwoName = "Botoman";
    // const board = gameboard();
  
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
      makeMove(x);
      console.table(board.getBoard());
      updateScreen();
      checkWin();
    }
  
  
  
  
  
  
  

    function updateScreen() {
      let grid = document.getElementById("grid");
      let buttonWidth = grid.offsetWidth;
      let buttonSize = (buttonWidth / 3 / buttonWidth) * 100 + "%";
      let boardy = getBoard();
  
      grid.innerHTML = "";
    
  
      for (let i = 0; i < boardy.length; i++){
          let newButton = document.createElement("button");
          newButton.className = "board-button";
          newButton.setAttribute("data-index", i);
          newButton.innerHTML = board[i];
          newButton.style.height = buttonSize;
          newButton.style.width = buttonSize;
          grid.appendChild(newButton);
      }
    };
  

    let gridButton = document.querySelectorAll(".board-button")
  
      gridButton.forEach((e) =>{
      e.addEventListener("click", () => {
        console.log("hi");
        //   playRound(e.dataset.index);
          console.log(e.dataset.index);
          // return e.dataset.index
      });});
    

  
  
  
  
  
  
//   const gboard = gameboard();
//   const game = gamePlay();
//   const screen = screenController();
  
  
  
  let start = document.getElementById("start");
  start.addEventListener("click", () =>{
      updateScreen();
  })
  
  
  // game.playRound();
  // screen.updateScreen();
  // screen.handleClick();
  
  // gamePlay();