// Initial Value Declaraction 

player_one = 0

player_two = 0

win_score = 20

current_score_one = 0;

current_score_two = 0;

active_current_score = 0;

result_status = false;

active = true   // Default Player One is Active

// Game Start 

document.querySelector('.btn-roll').addEventListener('click', function () {

  // is result is published 
  if(result_status){
    return;
  }
  //  Winner Checker 
  winner();




  // active Player 
  if(active){
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  } else{
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
  }

  //  Generate Random Number 
  dice = Math.floor(Math.random() * (+6 - +1)) + +1;


  queryDice = document.querySelector("#dice-1");
  queryDice.src = 'dice-' + dice + '.png';

  active_current_score += dice;

  if (dice == 1) {

    active_current_score = 0;

    if (active) {
      document.querySelector("#score-0").textContent = 0;
    } else {
      document.querySelector("#score-1").textContent = 0;

    }

    // Change Active Player 

    active = !active;

    // console.log(active);

  }


  if (active) {
    document.querySelector("#score-0").textContent = active_current_score;
  } else {
    document.querySelector("#score-1").textContent = active_current_score;
  }



});

// Change Active Player 

document.querySelector(".btn-hold").addEventListener("click", function () {

  // is result is published 
  if(result_status){
    return;
  }

  //  Winner Checker 
  winner();

  if (active) {
    document.querySelector("#score-0").textContent = 0;
  } else {
    document.querySelector("#score-1").textContent = 0;

  }
  // active_current_score save to current 
  if (active) {
    current_score_one += active_current_score;

    document.querySelector("#current-0").textContent = current_score_one;
  } else {
    current_score_two += active_current_score;
    document.querySelector("#current-1").textContent = current_score_two;
  }

  active_current_score = 0;
  active = !active;
  console.log(active);

});


document.querySelector(".btn-new").addEventListener("click",function(){
  result_status = false;

  player_one = 0

player_two = 0

win_score = 20

current_score_one = 0;

current_score_two = 0;

active_current_score = 0;
  // // Player Initial Score 
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;


  //Current Initial  Score 
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;

  document.querySelector("#name-0").textContent="PLayer 1";
  document.querySelector("#name-1").textContent="PLayer 1";


});



function winner() {
  if(current_score_one >win_score ){
    document.querySelector("#name-0").textContent="PLayer One Is Win";
    result_status = true;
  }else if(current_score_two > win_score ){
    document.querySelector("#name-1").textContent="PLayer Two Is Win";
    result_status = true;


  }
}