const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
    playRound(i);
    }
    logWins();
}   

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice(); 
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
    let input = prompt("Choose Your Weapon!");
    while(input == null) {
        input = prompt("Choose Your Weapon!");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
    input = prompt("Choose Your Weapon!");
    while (input == null) {
        input = prompt("Choose Your Weapon!");
    }
    input = input.toLowerCase();
    check = validateInput(input);
}
    return input;
}


function validateInput(choice) {
    return choices.includes(choice)
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Draw";
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let draws = winners.filter((item) => item == "Draw").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Draws:", draws); 
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round)
    console.log("Player chose: ", playerChoice);
    console.log("Computer chose: ", computerChoice);
    console.log(winner, "won the round");
    console.log("-------------------------")
}