'use strict';

//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions or initial value
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; //player 1=0 & player 2= 1
  playing = true;
  //current value default both player
  current0El.textContent = 0;
  current1El.textContent = 0;
  //score default both player
  score0El.textContent = 0;
  score1El.textContent = 0;
  //display color default
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //switch to 1st player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//refactoring
//select to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. check if dice value is 1 = true
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //switch to next player
    else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add currentscore to active players score
    scores[activePlayer] += currentScore;
    //scores[0] = scores[0] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      //currentscore remain init value again
      //switch the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
