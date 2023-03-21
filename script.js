'use strict';

let secretNumber = Math.round(Math.random() * 20) + 1;

let score = document.querySelector('.score').textContent;
let highscore = 0;

const displaymessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displaymessage('NO number');
  } else if (guess === secretNumber) {
    displaymessage('You Win');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess > secretNumber ? 'Too High' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('YOu loose');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('hello');
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
