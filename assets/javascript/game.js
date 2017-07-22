$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Random number selected
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var userScore= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userScore= 0;
      $('#finalScore').text(userScore);
      } 
//adds the wins to the userScore
function win(){
alert("You WIN!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userScore
function lose(){
alert ("You LOSE!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//clicks for jewels
  $('#purple').on ('click', function(){
    userScore = userScore + num1;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
        if (userScore == Random){
          win();
        }
        else if ( userScore > Random){
          lose();
        }   
  })  

  $('#white').on ('click', function(){
    userScore = userScore + num2;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
        if (userScore == Random){
          win();
        }
        else if ( userScore > Random){
          lose();
        } 
  })  

  $('#red').on ('click', function(){
    userScore = userScore + num3;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore);
          if (userScore == Random){
          win();
        }
        else if ( userScore > Random){
          lose();
        } 
  })  

  $('#blue').on ('click', function(){
    userScore = userScore + num4;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
          if (userScore == Random){
          win();
        }
        else if ( userScore > Random){
          lose();
        }
  });   
}); 