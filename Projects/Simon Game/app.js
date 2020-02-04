//variable
userSeq =[];
simonSeq = [];
const NUM_OF_LEVELS=20;
var id,color,level=0;
var boardSound =[
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
];
var stricttogl =0;


$(document).ready(function(){
  $(".start").click(function(){
 userSeq =[];
simonSeq = [];
    level=1;
    simonSequence();
  })
  $("#strict").click(function(){
    if (stricttogl ===0){
      $("#strict").addClass("strict-active");
      stricttogl=1;
      console.log(stricttogl+"if");
    }
    else {
       $("#strict").removeClass("strict-active");
      stricttogl=0;
      console.log(stricttogl+"else");
    }
  });
  $(".pad").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userSeq.push(id);
    console.log(id+" "+color);
    addClassSound(id,color);
    //check userSeq
    if(!checkUserSeq()){
      displayError();
    if (stricttogl===1){    userSeq =[];
simonSeq = [];
    level=1; }
    simonSequence();
      userSeq = [];
    }
    //check sequence
    if(userSeq.length=== simonSeq.length && userSeq.length < NUM_OF_LEVELS){
      level++;
      userSeq=[];
      simonSequence();
    }
    //win??
    if(userSeq.length===NUM_OF_LEVELS){
      $(".display").text("Win");
    }
  })

});//ready Func

function checkUserSeq (){
  for(var i=0; i < userSeq.length;i++){
    if (userSeq[i] != simonSeq[i]){
      return false;
    }
  }
  return true;
}

//eror func
function displayError(){
  console.log("error");

var counter=0;
  var myError = setInterval(function(){
  $(".display").text("..");
    counter++;
    if(counter===3){
      $(".display").text(level);
    clearInterval(myError);
      userSeq = [];
      counter=0;
    }
  },500);
}



//simon sequence
function simonSequence(){
  console.log(level);
  $('.display').text(level);
  getRandomNum();
  var i =0;
  var myInterval = setInterval (function(){
     id= simonSeq[i];
    color = $("#"+id).attr('class').split(" ")[1];
    console.log(id+color);
    addClassSound(id, color);
      i++
  if(i ===simonSeq.length){
  clearInterval(myInterval);
  }
  },1000);

}

function getRandomNum (){
  var random = Math.floor(Math.random()*4);
  simonSeq.push(random);
}
function addClassSound(id, color) {
  $("#"+id).addClass(color+"-active");
  playSound(id)
  setTimeout(function(){
    $("#"+id).removeClass(color+"-active");
  }, 500);
}

function playSound(id) {
  var sound = new Audio(boardSound[id]);
  sound.play();
}
