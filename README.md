# rock-paper-scissors
The Odin Project - Rock, Paper, Scissors game

27/11/2022:

Initial browser-console version of this game has been completed and it was a lot of fun. I was able to complete the majority of it without having to follow a guide where a round was able to be played out and the winner to be detemined, and then a score point allocated to the winner, but my for loop wouldn't initiate the prompt again to allow the next input choice and so the player was not able to proceed to the 2nd round, requiring a page refresh only to start back at round 1 again.

After much headache, I followed a guide I found on YT by a channel called Coding with Rob, to which I was able to complete the assignment by following the guide.

I have dated this entry above as I am intending to come back and rewrite it again myself without the use of a guide so I can gauge to what my issue was previously.

28/11/2022:

I re-wrote the code from scratch getting up to the same part I was stuck on earlier having trouble with previously regarding getting the prompt to repeatedly occur for each time the Player's entry is needing to be submitted as I couldn't make it occur more than once, and thus the counter could never go above 1. After looking through some other submissions by students of TOP, I came across the 'continue;' statement, which terminates execution in the current iteration of a loop, and then continues with the next interation of the loop until a condition is met, which in this case was 5 rounds.

Making this happen was copied from my fellow student but the biggest point for me is that I can fully understand every aspect of the code compared to only about 90% of my previous submission. Next steps with this project is to create a graphical interface to play the game instead of it being limited to the console.

30/12/2022:

I remade the entire game with a graphical user interface, but changed the entire concept by making the players options to be that of a Warrior, Wizard, or Archer, and the choices of the computer to be Goblin, Dragon, Centaur, all following the exact same logic as Rock Paper Scissors. Upon clicking the player option, the choice will shoot an attack at a randomly selected computer choice, of which the computer will shoot and attack back immediately afterward and both options will flash to give the impression of damage being taken, as well as a message being display who beat who. The first side to lose all their 3 lives will win the game and an option is given to restart the game. I learned a tremendous amount of JavaScript doing this, going above and beyond to redefine the gameplay of a simple game. JavaScript was difficult for me before doing this, but I am much more confident and comfortable with it now, even though it has taken several months to grasp the simple aspects.