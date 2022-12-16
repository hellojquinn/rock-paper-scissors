/*
Knight Wizard Archer
Array that holds the options
3 buttons, one for each option
When the user selects one of those options, I need the computer to do the same randomly
Options to weigh up which is greater
Display which option is greater, announce who is winner, user or computer
Make counter for whichever user first gets to 5 wins, announce them as winner
Give button to restart game
*/

//Player arrow shooting from Archer
let playerArrow = document.getElementById('playerArrow');
playerArrow.style.display = 'none';

document.getElementById('playerArcher').addEventListener('click', function() {
  playerArrow.style.display = 'inline-block';
});

document.getElementById('playerArcher').addEventListener('click', function() {
  playerArrow.classList.add('shoot');

  let wizard = document.getElementById('computerWizard');
  let wizardX = wizard.offsetLeft;
  let wizardY = wizard.offsetTop;

  wizard.classList.remove('hit');

  let arrowAnimation = getComputedStyle(playerArrow).animation;
  playerArrow.style.setProperty('--arrow-left', `${wizardX}px`);
  playerArrow.style.setProperty('--arrow-top', `${wizardY}px`);

  playerArrow.addEventListener('animationend', function() {
  playerArrow.style.display = 'none';
  wizard.classList.add('hit');
  });
});


//rock paper scissors logic
const choices = ['warrior', 'wizard', 'archer'];

