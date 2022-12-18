/*
Warrior Wizard Archer
Array that holds the options
3 buttons, one for each option
When the user selects one of those options, I need the computer to do the same randomly
Options to weigh up which is greater
Display which option is greater, announce who is winner, user or computer
Make counter for whichever user first gets to 5 wins, announce them as winner
Give button to restart game
*/


let playerChoice;
let computerChoice;
// Random selection for computer
const options = ['Warrior', 'Wizard', 'Archer'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


//Player arrow shooting from Archer
let playerArrow = document.getElementById('playerArrow');
playerArrow.style.display = 'none';
computerArrow.style.display = 'none';

document.getElementById('playerArcher').addEventListener('click', function() {
  playerChoice = 'Archer';
  playerArrow.style.display = 'inline-block';
  playerArrow.classList.add('shoot');

  computerChoice = getComputerChoice();
  

  let target = document.getElementById(`computer${computerChoice}`);
  let targetX = target.offsetLeft;
  let targetY = target.offsetTop;

  target.classList.remove('hit');

  let arrowAnimation = getComputedStyle(playerArrow).animation;
  playerArrow.style.setProperty('--target-left', `${targetX}px`);
  playerArrow.style.setProperty('--target-top', `${targetY}px`);

  playerArrow.addEventListener('animationend', function() {
    playerArrow.style.display = 'none';
    target.classList.add('hit');
  });
  handleRetaliation(computerChoice, playerChoice);
});

//Player magic spell shooting from Wizard
let playerSpell = document.getElementById('playerSpell');
playerSpell.style.display = 'none';
computerSpell.style.display = 'none';

document.getElementById('playerWizard').addEventListener('click', function() {
  playerChoice = 'Wizard';
  playerSpell.style.display = 'inline-block';
  playerSpell.classList.add('spell');

  computerChoice = getComputerChoice();

  let target = document.getElementById(`computer${computerChoice}`);
  let targetX = target.offsetLeft;
  let targetY = target.offsetTop;

  target.classList.remove('hit');

  let spellAnimation = getComputedStyle(playerSpell).animation;
  playerSpell.style.setProperty('--target-left', `${targetX}px`);
  playerSpell.style.setProperty('--target-top', `${targetY}px`);

  playerSpell.addEventListener('animationend', function() {
    playerSpell.style.display = 'none';
    target.classList.add('hit');
    });
    handleRetaliation(computerChoice, playerChoice);
});

//Player axe slash from Warrior
let playerAxe = document.getElementById('playerAxe');
playerAxe.style.display = 'none';
computerAxe.style.display = 'none';

document.getElementById('playerWarrior').addEventListener('click', function() {
  playerChoice = 'Warrior';
  playerAxe.style.display = 'inline-block';
  playerAxe.classList.add('slash');

  computerChoice = getComputerChoice();

  let target = document.getElementById(`computer${computerChoice}`);
  target.classList.remove('hit');

  let slashAnimation = getComputedStyle(playerAxe).animation;
  playerAxe.addEventListener('animationend', function() {
    playerAxe.style.display = 'none';
    target.classList.add('hit');
  });
  handleRetaliation(computerChoice, playerChoice);
});



//retaliation function
function handleRetaliation(computerChoice, playerChoice) { 

    let playerTarget = document.getElementById(`player${playerChoice}`);
    let playerTargetX = playerTarget.offsetLeft;
    let playerTargetY = playerTarget.offsetTop;

    playerTarget.classList.remove('hit');

//Archer retaliate
    if (computerChoice === 'Archer') {
    computerArrow.style.display = 'inline-block';
    computerArrow.classList.add('compShoot');
    
    let compArrowAnimation = getComputedStyle(computerArrow).animation;
    computerArrow.style.setProperty('--target-left', `${playerTargetX}px`);
    computerArrow.style.setProperty('--target-top', `${playerTargetY}px`);


    computerArrow.addEventListener('animationend', function() {
      computerArrow.style.display = 'none';
      playerTarget.classList.add('hit');
    });
  } else {
    computerArrow.style.display = 'none';
    computerArrow.classList.remove('compShoot');

//Wizard retaliate
  } if (computerChoice === 'Wizard') {
    computerSpell.style.display = 'inline-block';
    computerSpell.classList.add('compSpell');
    
    let compSpellanimation = getComputedStyle(computerSpell).animation;
    computerSpell.style.setProperty('--target-left', `${playerTargetX}px`);
    computerSpell.style.setProperty('--target-top', `${playerTargetY}px`);


    computerSpell.addEventListener('animationend', function() {
      computerSpell.style.display = 'none';
      playerTarget.classList.add('hit');
    });
  } else {
    computerSpell.style.display = 'none';
    computerSpell.classList.remove('compSpell');

//Warrior retaliate

  } if (computerChoice === 'Warrior') {
    computerAxe.style.display = 'inline-block';
    computerAxe.classList.add('compSlash');
    
    let compSlashAnimation = getComputedStyle(computerAxe).animation;
    computerAxe.style.setProperty('--target-left', `${playerTargetX}px`);
    computerAxe.style.setProperty('--target-top', `${playerTargetY}px`);


    computerAxe.addEventListener('animationend', function() {
      computerAxe.style.display = 'none';
      playerTarget.classList.add('hit');
    });
  } else {
    computerAxe.style.display = 'none';
    computerAxe.classList.remove('compSlash');

// rock paper scissors logic
} if (playerChoice === computerChoice) {
    alert("It's a draw!")
        } else if (
            (playerChoice == 'Warrior' && computerChoice == 'Archer') ||
            (playerChoice == 'Wizard' && computerChoice == 'Warrior') ||
            (playerChoice == 'Archer' && computerChoice == 'Wizard')
    ){ 
        alert(`You win! ${playerChoice} beats ${computerChoice}`)
    } else {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`)
    }
}

/*
let result = handleRetaliation(playerChoice, computerChoice);

function playRound(playerChoice, computerChoice) {
    if (result == "Draw") {
        console.log("It's a draw!")
    }
    else if(result == "Player") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
    }
}
*/
/*
1. if player selection is X and computer selection is Y, add point to player, else add point to computer, display message of who beats who
2. display points on board
3. Whichever side first reaches 5, display winner
*/