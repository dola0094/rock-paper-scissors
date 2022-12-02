//Start Game


const myArray = [ "Rock", "Paper",  "Scissors" ] ;
function getComputerChoice (){   //Computer randomly returns Rock, Paper, or Scissors
    return myArray[Math.floor(Math.random() * myArray.length)];
    //console.log(getComputerChoice(myArray))
}
function playerSelection(){
    let playerInput=prompt("Rock,Paper or Scissors:")
    let trimmedInput=playerInput.trim();
    let lowerCaseInput=trimmedInput.toLowerCase();
    let capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    while(!['Rock','Paper','Scissors'].includes(capitalizedInput)){
        trimmedInput=playerInput.trim();
        lowerCaseInput=trimmedInput.toLowerCase();
        capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    }
    return capitalizedInput;
}


function playRound(playerSelection, computerSelection) {
let displayResults = ' ';
if (computerSelection === playerSelection) {
    displayResults = "It's a tie!";
} else if (computerSelection == "rock" && playerSelection == "scissors") {
    displayResults = "You Lose! Rock beats Scissors";
} else if (computerSelection == "paper" && playerSelection == "rock") {
    displayResults = "You Lose! Paper beats Rock";
} else if (computerSelection == "scissors" && playerSelection == "paper") {
    displayResults = "You Lose! Scissors beats Paper";
} else if (computerSelection == "scissor" && playerSelection == "rock") {
    displayResults = "You Win! Rock beats Scissors";
} else if (computerSelection == "rock" && playerSelection == "paper") {
    displayResults = "You Win! Paper beats Rock";
} else if (computerSelection == "paper" && playerSelection == "scissors"){
    displayResults = "You Win! Scissors beats Paper"
} 
 }
   
//const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));       
                   //Ask player to choose Rock, Paper, or Scissors
//Rock Beats Scissors
//Scissors Beat Paper
//Paper Beats Rock
//If player beats computer, you win!
//If computer beats player, you lose!
//Declare a winner of the round, display what beats what
//Repeat game for 5 rounds 
//Display winner or loser of 5 rounds
//Try again button