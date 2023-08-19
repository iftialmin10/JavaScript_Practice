'use strict';
/*console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '80s game';
// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.guess').value = 20)); //by it we can fill the box
console.log((document.querySelector('.guess').textContent = 20)); //by it we only manipulate the console value not fill the box
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
let message = 'Start guessing...';
//refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when player input empty value
  if (!guess) {
    displayMessage('⛔ No Number');
  }
  //when player input same value
  else if (guess === secretNumber) {
    displayMessage('You Win 🎉🍾🎊');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //extra
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //player input wrong number with refactoring
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low 🤦‍♀️ 📉' : 'Too High 😔 📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost 80s game 💣💣💣');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  }
  // //when player input bigger value
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High 😔 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost 80s game 💣💣💣';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#DC143C';
  //   }
  // }
  // //when player input smaller value
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 🤦‍♀️ 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost 80s game 💣💣💣';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#DC143C';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  displayMessage(message);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
