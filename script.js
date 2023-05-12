let playerScore = 0;
let computerScore = 0;

const arr = ['rock', 'paper', 'scissors'];

const playerWinRound = "You Win!";
const tie = "It's a tie.";
const computerWinRound = "Sorry, you lose.";
 
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


rock.addEventListener('click', () => playGame("rock", getComputerChoice(arr)));
paper.addEventListener('click', () => playGame("paper", getComputerChoice(arr)));
scissors.addEventListener('click', () => playGame("scissors", getComputerChoice(arr)));

let score = document.querySelector('#currentGame');
let scoreBoard = document.querySelector('#scoreBoard');
scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;

function playGame(playerSelection, computerSelection) {
    if ((playerScore === 5) || (computerScore === 5)) {
      computerScore = 0;
      playerScore = 0;
      scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
      score.innerHTML = "Game Reset.  Please choose again to start a new game."; 
    }
    else if (playerSelection === computerSelection) {
            let result = tie;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
         }
         else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            let result = playerWinRound;
            if (playerScore === 4){
                score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  You were the first to 5 points.  You won the game!  Push any button to reset the game.";
                playerScore += 1;
                scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            }
            else {
               score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
               playerScore += 1;
               scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            }
         }
         else if ((playerSelection === "rock") && (computerSelection === "paper")) {
            let result = computerWinRound;
            if (computerScore === 4){
               score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  The computer was the first to 5 points.  The computer won the game.  Better luck next time!  Push any button to reset the game.";
               computerScore += 1;
               scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
           }
           else {
            computerScore += 1;
            scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
         }}
         else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            let result = playerWinRound;
            if (playerScore === 4){
                score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  You were the first to 5 points.  You won the game!  Push any button to reset the game.";
                playerScore += 1;
                scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            }
            else {
            playerScore += 1;
            scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
         }
      }
         else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            let result = computerWinRound;
            if (computerScore === 4){
               score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  The computer was the first to 5 points.  The computer won the game.  Better luck next time!  Push any button to reset the game.";
               computerScore += 1;
               scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
           }
           else {
            computerScore += 1;
            scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
          }
         }
         else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
            let result = computerWinRound;
            if (computerScore === 4){
               score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  The computer was the first to 5 points.  The computer won the game.  Better luck next time!  Push any button to reset the game.";
               computerScore += 1;
               scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
           }
           else {
            computerScore += 1;
            scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
         }}
         else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            let result = playerWinRound;
            if (playerScore === 4){
                score.innerHTML =  "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  You were the first to 5 points.  You won the game!  Push any button to reset the game.";
                playerScore += 1;
                scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            }
            else {
            playerScore += 1;
            scoreBoard.innerHTML = "Player: " + playerScore +"   Computer: " + computerScore;
            score.innerHTML = "You chose " + playerSelection + ".  The computer chose " + computerSelection + ".  " + result;
         }
      }
}

function getComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let computerSelection = arr[randomIndex];
    return computerSelection;
}
 


 //if (playerScore === 5 || computerScore === 5) {
  //      endGame();
  //  }
    
//}

//function gameScore(roundResult) {
  //  if (roundResult === playerWinRound) {
  //      playerScore++;
  //  }   else if  (roundResult === tie) {
  //      ties++;
  //  }   else if (roundResult === computerWinRound) {
  //      computerScore++;
 //   }

//if (playerScore === 5) {
  //      console.log("You won the game!");
 //       return;
  //  }

  //  if (computerScore === 5) {
  //      console.log("You lost the game!");
  //      return;
 //   }
  ////  console.log(gameScore)
//}


 //game round play
//function playRound(playerSelection, computerSelection) {
  //  if (playerSelection === computerSelection) {
   //     return tie;
  //  }
  //  else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
  //      return playerWinRound;
  //  }
   // else if ((playerSelection === "rock") && (computerSelection === "paper")) {
  //      return computerWinRound;
  //  }
  //  else if ((playerSelection === "paper") && (computerSelection === "rock")) {
  //      return playerWinRound;
  //  }
  //  else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
  //      return computerWinRound;
  //  }
  //  else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
  //      return computerWinRound;
  //  }
   // else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
   //     return playerWinRound;
  //  }
 //   console.log(roundResult);
 //   console.log(gameScore);
//}   


//computer choice

  //  console.log(getComputerChoice(arr));
//player choice
//let player = prompt("Rock, Paper, or Scissors?"); {
  //  const playerSelection = player.toLowerCase();
  //  console.log(playerSelection);
//}

//function endGame() {
 //   playerScore = 0;
 //   computerScore = 0;
 //   console.log("Game Reset!");
//}






//get player input through prompt-
//make player input lowercase-
//get computer input through randomization-
//playround with player input and computer input-
//if inputs are equal "it's a tie"-
//if rock/paper "sorry you lose"-
//if rock/scissors "yay you win"-
//if paper/rock "yay you win"-
//if paper/scissors "sorry you lose"-
//if scissors/rock "sorry you lose"-
//if scissors/paper "yay you win"-
//log results
//loop game
//if playerScore or computerScore reaches 5, display results of game
//reset scores to 0
//show 0 scores

