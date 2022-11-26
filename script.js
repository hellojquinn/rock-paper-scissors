function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper')
        return "You Win!"
    else if 
        (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock')
        return "You Lose!"
    else if
        (playerSelection == 'rock' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'scissors')
        return "Draw!"
        }

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));