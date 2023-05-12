//let playerScore = 0;
//let computerScore = 0;
//let ties = 0;

const arr = ['rock', 'paper', 'scissors'];

const computerSelection = getComputerChoice(arr);

const playerWinRound = "You Win!";
const tie = "It's a tie.";
const computerWinRound = "Sorry, you lose.";

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


rock.addEventListener('click', playGame("rock", computerSelection));
paper.addEventListener('click', playGame("paper", computerSelection));
scissors.addEventListener('click', playGame("scissors", computerSelection));

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            let result = tie;
            console.log(playerSelection);
            console.log(result);
         }
         else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            let result = playerWinRound;
            console.log(playerSelection);
            console.log(result);
         }
         else if ((playerSelection === "rock") && (computerSelection === "paper")) {
            let result = computerWinRound;
            console.log(playerSelection);
            console.log(result);
         }
         else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            let result = playerWinRound;
            console.log(playerSelection);
            console.log(result);
         }
         else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            let result = computerWinRound;
            console.log(playerSelection);
            console.log(result);
          }
         else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
            let result = computerWinRound;
            console.log(playerSelection);
            console.log(result);
         }
         else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            let result = playerWinRound;
            console.log(playerSelection);
            console.log(result);
         }
}


function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const computerSelection = arr[randomIndex];
    return computerSelection;
}
  
//loop
//for (let i=0; i <100; i++) {
  //  const computerSelection = getComputerChoice(arr);
    //let roundResult = playRound(playerSelection, computerSelection);
//    console.log(playerSelection);
  //  console.log(computerSelection);
   // console.log(roundResult);
    //gameScore(roundResult);
    //console.log("Your score is " + playerScore);
    //console.log("The Computer's score is " + computerScore);

 //  if (playerScore === 5 || computerScore === 5) {
   //     endGame();
   //     break;
    //}
    
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

