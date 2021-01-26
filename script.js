'use strict';

//Variables (Highscore, Secret Number & Score)
//Random 'Secret Number' between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score throughout the game
let score = 20;

//HighScore which carries over to new game
let highscore = 0;

//Functions
// Display Message

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for 'Check BTN'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No number in user input?
  if (!guess) {
    displayMessage('← Enter A Number');

    // Correct Guess including background color change CSS
  } else if (guess === secretNumber) {
    displayMessage('Well Done!');

    document.querySelector('body').style.backgroundColor = 'cornflowerblue';
    document.querySelector('.number').textContent = secretNumber;

    // Highscore remains the same unless > greater than previous
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Guess too low or too high (ternary operator) including 'you lost the game' if score drops to 0.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//'AGAIN' Button Functionality - resetting Secret Number, Score, Guess, Display Message, Number & Background (CSS)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
