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

//Player arrow shooting from Archer
let playerArrow = document.getElementById('playerArrow');
playerArrow.style.display = 'none';
computerArrow.style.display = 'none';



document.getElementById('playerArcher').addEventListener('click', function() {
  playerChoice = 'Archer';
  playerArrow.style.display = 'inline-block';
});

document.getElementById('playerArcher').addEventListener('click', function() {
  playerArrow.classList.add('shoot');

  const computerChoice = getComputerChoice();

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

    handleRetaliation(computerChoice, playerChoice);
  });
});

   function handleRetaliation(computerChoice, playerChoice) {
    //retaliation /////////////////////////////

        let playerTarget = document.getElementById(`player${playerChoice}`); //FIX this to be based on players selection, not archer.
        let playerTargetX = playerTarget.offsetLeft;
        let playerTargetY = playerTarget.offsetTop;

        playerTarget.classList.remove('hit');

///////////// Archer retaliate
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

///////////// Wizard retaliate
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
    }
}
 
  
  
//ability hits target, and target fires its ability back at clicked element

//Player magic spell shooting from Wizard
let playerSpell = document.getElementById('playerSpell');
playerSpell.style.display = 'none';
computerSpell.style.display = 'none';


document.getElementById('playerWizard').addEventListener('click', function() {
  playerChoice = 'Wizard';
  playerSpell.style.display = 'inline-block';
});

document.getElementById('playerWizard').addEventListener('click', function() {
  playerSpell.classList.add('spell');

  const computerChoice = getComputerChoice();

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

    handleRetaliation(computerChoice, playerChoice);
});
});
/*
        //retaliation /////////////////////////////
        function handleRetaliation(computerChoice, playerChoice) {
            //retaliation /////////////////////////////
        
                let playerTarget = document.getElementById(`player${playerChoice}`); //FIX this to be based on players selection, not archer.
                let playerTargetX = playerTarget.offsetLeft;
                let playerTargetY = playerTarget.offsetTop;
        
                playerTarget.classList.remove('hit');
        
                if (computerChoice === 'Wizard') {
                computerSpell.style.display = 'inline-block';
                computerSpell.classList.add('compSpell');
                
                let compSpellAnimation = getComputedStyle(computerSpell).animation;
                computerSpell.style.setProperty('--target-left', `${playerTargetX}px`);
                computerSpell.style.setProperty('--target-top', `${playerTargetY}px`);
        
        
                computerSpell.addEventListener('animationend', function() {
                  computerSpell.style.display = 'none';
                  playerTarget.classList.add('hit');
                });
              } else {
                computerSpell.style.display = 'none';
                computerSpell.classList.remove('compSpell');
              } 
            }

            */


//Player axe slash from Warrior
let playerAxe = document.getElementById('playerAxe');
playerAxe.style.display = 'none';

document.getElementById('playerWarrior').addEventListener('click', function() {
  playerAxe.style.display = 'inline-block';
});

document.getElementById('playerWarrior').addEventListener('click', function() {
  playerAxe.classList.add('slash');

  const computerChoice = getComputerChoice();

  let target = document.getElementById(`computer${computerChoice}`);
  target.classList.remove('hit');

  let slashAnimation = getComputedStyle(playerAxe).animation;
  playerAxe.addEventListener('animationend', function() {
    playerAxe.style.display = 'none';
    target.classList.add('hit');
  });
});

// Random selection for computer
const options = ['Warrior', 'Wizard', 'Archer'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}