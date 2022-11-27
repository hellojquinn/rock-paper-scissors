const options = ['rock', 'paper', 'scissors'];

// Random selection for computer
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Prompt for user to input their choice
function getPlayerChoice() {
    let check = false;
    while(check == false){
        const choice = prompt("Choose Your Weapon!");
        if (choice == null){
            continue; //To cause prompt to keep occurring after each input
        }
        const choiceLowerCase = choice.toLowerCase();
        if(options.includes(choiceLowerCase)) {
            check == true;
            return choiceLowerCase;
        }
    }
}

// Check who is the winner based on the choices
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    } 
    else if (
       (playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'paper' && computerSelection == 'rock') ||
       (playerSelection == 'scissors' && computerSelection == 'paper')
    ){ 
        return "Player";
    } else {
        return "Computer";
    }
}

// Returns the result of each round
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Draw") {
        return "It's a draw!"
    }
    else if(result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Keeps the score of each round and ends the game after 5 rounds declaring the outcome
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0 ; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("---------Next Round----------")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    console.log("Game Over")
    if (playerScore > computerScore) {
        console.log("Player is the winner!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer is the winner!")
    }
    else {
        console.log("The game is a draw!")
    }
}

game();