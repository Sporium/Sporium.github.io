
const secondHand = document.querySelector(`.second-hand`);
const minHand = document.querySelector(`.min-hand`);
const hourdHand = document.querySelector(`.hour-hand`);
 var el = document.querySelector(".clock");
 console.log(el)
function setDate(){
  const now = new Date();

  //seconds Clock_hand transform
  const seconds = now.getSeconds(); //get Seconds
  const secondsDegrees = ((seconds / 60) * 360)+90; //calculate Degrees
 document.getElementById("second-hand").style.transform = 'rotate(' +secondsDegrees + 'deg)'; // make it Rotating!
 // console.log(seconds);

//minutes Clock_hand transform
 const mins = now.getMinutes();
 const minsDegrees = ((mins / 60) * 360)+90;
 document.getElementById("min-hand").style.transform = 'rotate(' +minsDegrees + 'deg)';
  // console.log(mins);

//Hours Clock_hand transform
 const hours = now.getHours();
 const hoursDegrees = ((mins / 12) * 360)+90;
 document.getElementById("hour-hand").style.transform = 'rotate(' + hoursDegrees + 'deg)';
 // console.log(hours);

 //fixing bug when all hands turn 0 deg for a split second
const hands = document.querySelectorAll('.hand');
    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
      hands.forEach(hand => hand.style.transitionDuration = '0.05s');
}﻿

}
setInterval(setDate, 1000);