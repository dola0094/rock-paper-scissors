//Start Game
const myArray = [ "Rock", "Paper",  "Scissors" ] ;
function getComputerChoice (myArray){   //Computer randomly returns Rock, Paper, or Scissors
    return myArray[Math.floor(Math.random() * myArray.length)];
    //console.log(getComputerChoice(moves))
}
function playRound(playerSelection, computerSelection) {

    if(playerSelection = myArray) {
        getComputerChoice(myArray)
    }
}   
const playerSelection = "rock";
const computerSelection = getComputerChoice(myArray);
console.log(playRound(playerSelection, computerSelection));                            //Ask player to choose Rock, Paper, or Scissors
//Rock Beats Paper
//Rock Beats Scissors
//Scissors Beat Paper
//Paper Beats Rock
//If player beats computer, you win!
//If computer beats player, you lose!
//Declare a winner of the round, display what beats what
//Repeat game for 5 rounds 
//Display winner or loser of 5 rounds
//Try again button