function getComputerChoice() {

const choice = ['rock', 'paper', 'scissors'];

return choice[Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice())