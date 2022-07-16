'use strict';

// selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl =document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0,0]
let currentScore = 1;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function (){
  // 1: Generating a random dice
  const dice = math.trunc(Math.random() + 6) + 1;

  // 2: Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3: Check for rolled 1: if its true switch to next player
  if (dice !== 1 ){
// add dice to current score
currentScore += dice;

document.getElementById(`current--${activePlayer}`).textContent = currentScore;
// current1EL.textContent =currentScore; // change later
  }else {
// switch to next player
document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
currentScore = 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
  }
});

