"use strict";

//Player score
let scorePlayer = 20;
console.log("Player Initial Score: ", scorePlayer);

//define high score
let highscore = 0;

//let define the computer random number
const randNumb = () => Math.trunc(Math.random() * 20) + 1;

//display message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

let compNumb = randNumb();
console.log("Computer Guess: ", compNumb);

//logic for guessing the number
document.querySelector(".check").addEventListener("click", () => {
  const playerGuess = Number(document.querySelector(".guess").value);
  console.log("Player Guess: ", playerGuess);

  if (!playerGuess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage("⛔️ No Number!");

    //when player wins
  } else if (playerGuess === compNumb) {
    displayMessage("🎉 Correct Number!!!");

    //Change background color when u wins
    document.querySelector("body").style.backgroundColor = "#60b347";

    //Make the area of guess number wider
    document.querySelector(".number").style.width = "30rem";

    //show computer guess
    document.querySelector(".number").textContent = compNumb;

    //save the high score
    if (scorePlayer > highscore) {
      highscore = scorePlayer;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is higher
    //1
  } else if (playerGuess !== compNumb) {
    if (scorePlayer > 1) {
      displayMessage(playerGuess > compNumb ? "📈 Too high!" : "📉 Too Low!");
      scorePlayer--;
      document.querySelector(".score").textContent = scorePlayer;
    }
  } else {
    displayMessage("🧨 You Lost the Game!");
    document.querySelector(".score").textContent = 0;
  }

  //2
  /*
  } else if (scorePlayer > 1 && playerGuess > compNumb) {
    document.querySelector('.message').textContent = '📈 Too high!';
    scorePlayer--;
    document.querySelector('.score').textContent = scorePlayer;
    console.log('Player Initial Score: ', scorePlayer);

    //when guess is lower
  } else if (scorePlayer > 1 && playerGuess < compNumb) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    scorePlayer--;
    document.querySelector('.score').textContent = scorePlayer;

    //When player lose
  } else {
    document.querySelector('.message').textContent = '🧨 You Lost the Game!';
    document.querySelector('.score').textContent = 0;
  }*/
});

//logic for resting the game
document.querySelector(".again").addEventListener("click", () => {
  scorePlayer = 20;

  //resetting the chance
  document.querySelector(".score").textContent = scorePlayer;
  displayMessage("Start guessing...");
  //Change background color when u wins
  document.querySelector("body").style.backgroundColor = "#222";

  //Make the area of guess number wider
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  //clear the value could have be ''
  document.querySelector(".guess").value = null;

  //reset the readom
  compNumb = randNumb();
  console.log(compNumb);
});

/*Find a way to make it uniq
-make it dynamic to different screen
-have a welcome starting page
-change the color as an option by having setting 
-settings with music
-range number
*/
