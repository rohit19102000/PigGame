'use strict';

//  SAelecting elements 
const player0El =  document.querySelector('.player--0');
const player1El =  document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--0');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
let scores,currentscore,activePlayer,playing;
const init = function (){

     scores = [0,0];
     currentscore = 0;
     activePlayer = 0;
     playing = true;

    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceE1.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');      

}

init();

//  starting conition 
const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ?  1 : 0 ;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}
// Rolling dice functionality

btnRoll.addEventListener('click',function(){
   if (playing){

   
    //  1. generating a random dice roll
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //  2. display dice 
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;


    //  3. check for rolled 1 
    if (dice !== 1){
    // add dice to current score
    currentscore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentscore;
    // current0El.textContent = currentscore  // change later  
    
    }else {
        //  switch to next player
    switchPlayer();          
    }
   }
}); 


btnHold.addEventListener('click',function () {
  if (playing){

  
    // 1  add current score to acctive player
    scores[activePlayer] += currentscore;
    // scores[1] = scores[1] + currentscore\
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 

    // 2 check if players score is   >= 100
  if(scores[activePlayer] >= 100 ){
      // finish the game 
        playing = false;
    diceE1.classList.add('hidden');    
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
      // Switch to the next player
      switchPlayer();

  }
    
  }
});
btnNew.addEventListener('click',init);