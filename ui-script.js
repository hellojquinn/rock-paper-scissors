let playerChoice;
let computerChoice;

// Random selection for computer
const options = ['Warrior', 'Wizard', 'Archer'];

//Added in afterward so I didn't have the same two sides versing each other, and changing the array/variables broke the code in relation to the playerChoice.
const computerChoiceMap = {
    Warrior: 'Goblin',
    Wizard: 'Dragon',
    Archer: 'Centaur'
  };


  window.onload = () => {
    const battleButton = document.getElementById('battleBtn');
    const nonClickContainer = document.getElementById('nonClickContainer');
  
    battleButton.addEventListener('click', () => {
    nonClickContainer.style.pointerEvents = 'auto';
    playHow.classList.add('fade-out');
    challengerMessage.style.display = 'block';
    });
  };

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
    document.getElementById('roundMessage').textContent = "Draw!";
        } else if (
            (playerChoice == 'Warrior' && computerChoice == 'Archer') ||
            (playerChoice == 'Wizard' && computerChoice == 'Warrior') ||
            (playerChoice == 'Archer' && computerChoice == 'Wizard')
    ){ 
        document.getElementById('roundMessage').textContent = (`You win! ${playerChoice} beats ${computerChoiceMap[computerChoice]}`);
        computerCounter.textContent = parseInt(computerCounter.textContent) - 1;

    } else {
        document.getElementById('roundMessage').textContent = (`You lose! ${computerChoiceMap[computerChoice]} beats ${playerChoice}`);
        playerCounter.textContent = parseInt(playerCounter.textContent) - 1;
    }

    document.getElementById('roundMessage').classList.add('textFade');

    document.getElementById('roundMessage').addEventListener('animationend', function() {
        this.classList.remove('textFade');
        this.style.opacity = 0;


        const playerCounter = document.getElementById('playerCounter');
        const computerCounter = document.getElementById('computerCounter');

        if (parseInt(playerCounter.textContent) <= 0) {
          nonClickContainer.style.pointerEvents = 'none';
          document.getElementById('endGame').style.display = 'block';
          document.getElementById('victory').style.display = 'none';
          document.getElementById('defeat').style.display = 'block';
          document.getElementById('playAgain').style.display = 'block';

          setTimeout(function() {
            document.getElementById('endGame').classList.add('fade-in');
          }, 400);

        } else if (parseInt(computerCounter.textContent) <= 0) {
          nonClickContainer.style.pointerEvents = 'none';
          document.getElementById('endGame').style.display = 'block';
          document.getElementById('defeat').style.display = 'none';
          document.getElementById('victory').style.display = 'block';
          document.getElementById('playAgain').style.display = 'block';

          setTimeout(function() {
            document.getElementById('endGame').classList.add('fade-in');
          }, 400);
        }
});

}

function resetGame() {
  playerChoice = null;
  computerChoice = null;

  document.getElementById('playerCounter').textContent = '3';
  document.getElementById('computerCounter').textContent = '3';
  document.getElementById('endGame').classList.add('fade-out');
  document.getElementById('endGame').classList.remove('fade-in');
  nonClickContainer.style.pointerEvents = 'auto';

  setTimeout(function() {
    document.getElementById('endGame').classList.remove('fade-out');
    document.getElementById('endGame').style.display = 'none';
  }, 400);
}

document.getElementById('playAgain').addEventListener('click', function() {
  resetGame();
});



