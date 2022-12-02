//Start Game

let computerScore = 0;
let playerScore = 0;

const myArray = [ "Rock", "Paper",  "Scissors" ] ;
function getComputerChoice (){   //Computer randomly returns Rock, Paper, or Scissors
    return myArray[Math.floor(Math.random() * myArray.length)];
    console.log(getComputerChoice(myArray))
}
function playRound(playerSelection, computerSelection) {
computerSelection = getComputerChoice().toLowerCase();
playerSelection = playerSelection.toLowerCase();
if (computerSelection == playerSelection) {
    displayResults("TieGame");
} else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
)
    if(computerSelection == 1) {
        displayResults ( `You Lost! ${computerSelection} beats ${playerSelection}`)

    } else if (playerSelection ==1 ) {
        displayResults ( `You Won! ${playerSelection} beats ${computerSelection}`)
    }
}   
const playerSelection = "rock";
const computerSelection = getComputerChoice(myArray);
console.log(playRound(playerSelection, computerSelection));                            //Ask player to choose Rock, Paper, or Scissors
//Rock Beats Scissors
//Scissors Beat Paper
//Paper Beats Rock
//If player beats computer, you win!
//If computer beats player, you lose!
//Declare a winner of the round, display what beats what
//Repeat game for 5 rounds 
//Display winner or loser of 5 rounds
//Try again button