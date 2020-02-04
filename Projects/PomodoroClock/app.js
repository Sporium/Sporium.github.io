$(document).ready(function(){
 var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());

  //console.log(count);
  var buzzer = $("#buzzer")[0];
  //buzzer.play();
  $("#reset").hide();
$("#start").click(function(){
  var counter = setInterval(timer, 1000);
  count*=60;
  breakTime*=60;
  function timer(){
    //hide
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
    $("#timeType").show();
        $("#timeType").html("Session Time");
    count-=1;
   if(count===0){

     buzzer.play();
     clearInterval(counter);

     var startBreak = setInterval(breakTimer,1000);
   $("#num").hide();
   }
    if(count%60>=10){ //WTF???
       $("#num").html(Math.floor(count/60)+":"+count%60);
       }
    else{
      $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
    }
         ///WTF?????
    //$("#num").html(count);

     function breakTimer(){
    $("#timeType").html("Break Time: ");
    $("#breakNum").show();
      // breakTime*=60;
$("#timeType").show();
       breakTime -=1;
    if (breakTime===0){
      clearInterval(startBreak);
      buzzer.play();
    $("#reset").show();
      $("#breakNum, #timeType").hide();
    }
       if(breakTime%60>=10){ //WTF???
       $("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
       }
    else{
      $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
    }
   // $("#breakNum").html(breakTime); dont need anymore
  }
  }


});

  $("#reset").click(function(){
    count=25;
    breakTime=25;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
 $("#reset, #timeType").hide();
  });


  //session time
  $("#minus5Clock").click(function(){
  if (count>0)  {
    count -= 5;
    $("#num").html(count);
    console.log(count);
  }
  });

  $("#add5Clock").click(function(){

    count += 5;
    $("#num").html(count);
    console.log(count);
    });

  $("#minus5Break").click(function(){
  if (breakTime>0)  {
    breakTime -= 5;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
  }
  });

  $("#add5Break").click(function(){

    breakTime += 5;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
    });






});
