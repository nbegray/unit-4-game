$(document).ready(function () {

// GLOBAL VARIABLES
// =================================================================


// Scores (Current and Target)
var currentScore = 0;


var targetScore = Math.floor(Math.random() *102) + 19;
//logging your target score so you can see what it is and that its working
console.log(targetScore);
//Populating your target score to the screen
$("#target-score").html(targetScore);

// Wins and Losses
var winCount = 0;
var lossCount = 0;


var crystalValue1 = Math.floor(Math.random() *12) + 1;
console.log(crystalValue1);

var crystalValue2 = Math.floor(Math.random() *12) + 1;
console.log(crystalValue2);

var crystalValue3= Math.floor(Math.random() *12) + 1;
console.log(crystalValue3);

var crystalValue4 = Math.floor(Math.random() *12) + 1;
console.log(crystalValue4);

  // FUNCTIONS
  // =================================================================

  

  // function that Starts the Game (and restarts the game)
function reset() {
  //reset current score
  currentScore = 0;
  //get new target score
  targetScore = Math.floor(Math.random() *102) + 19;

  //Populating your target score to the screen
  $("#target-score").html(targetScore);

  //Get new random numbers for crystals
  crystalValue1 = Math.floor(Math.random() *12) + 1;
  crystalValue2 = Math.floor(Math.random() *12) + 1;
  crystalValue3= Math.floor(Math.random() *12) + 1;
  crystalValue4 = Math.floor(Math.random() *12) + 1;

  }

// function to Check if User Won or Lost and Reset the Game named checkWin

function checkForWin () {
  //checks if target score is = to currentscore
  if (targetScore === currentScore) {
    //increases the win count if it is
    winCount++
    //displays the win count to the screen
    $("#win-count").html(winCount);
    //alerts to uer you won
    alert("You won!");
    //calls the reset function to reset the game
    reset();
  }
  //checks if current score is greater than target score
   else if (currentScore > targetScore) {
     //increases the loss count if it is
     lossCount++
     //displays the loss count to the screen
     $("#loss-count").html(lossCount);
     //alerts to user they lost
     alert("Sorry you lost");
     //calls the reset function to reset the game
     reset();
   }
  };
   //On Click functions
   //when user clicks on blue crystal it adds the crystal value 1 to the current score and displays it to the screen.  Then it calls the checkForWinFunction and runs that.
   $("#blue1").on("click", function () {
     $("#your-score").html(currentScore = currentScore + crystalValue1);
     checkForWin();
   });

   $("#green2").on("click", function () {
    $("#your-score").html(currentScore = currentScore + crystalValue2);
    checkForWin();
  });


  $("#red3").on("click", function () {
    $("#your-score").html(currentScore = currentScore + crystalValue3);
    checkForWin();
  });

  $("#yellow4").on("click", function () {
    $("#your-score").html(currentScore = currentScore + crystalValue4);
    checkForWin();
  });






});
    
