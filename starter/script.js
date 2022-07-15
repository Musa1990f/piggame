'use strict';

// selecting Elements
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


let currentScore = 1;

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
current1EL.textContent =currentScore; // change later
  }else {

  }
})

