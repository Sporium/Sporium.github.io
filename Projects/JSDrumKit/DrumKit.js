var ms = 0; //keyCode or div code (if use mouse)
// play sound function
function playSound(e) { 
  ms=e;
  const audio = document.querySelector(`audio[data-key="${ms}"]`);
  const key = document.querySelector(`.key[data-key="${ms}"]`);
//  console.log(audio)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  //console.log(e.keyCode)
}
//change var ms to playCode 
function keydown(x){
	//console.log(x)
	ms=x.keyCode;
//	console.log(ms)
playSound(ms)
}
//delete css playing
function unplayed(e){
//	console.log("up")
const rem = document.querySelector(`.key[data-key="${ms}"]`);
  rem.classList.remove('playing');
  //console.log("removed")
}

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', unplayed);
window.addEventListener('mouseup', unplayed);
