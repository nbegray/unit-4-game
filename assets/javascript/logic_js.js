// GLOBAL VARIABLES
// =================================================================


// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


  // FUNCTIONS
  // =================================================================

  // Function  called getRandom for getting random numbers that takes in 2 arguements: (min, max) (hint: math.floor(math.random()))


  // function that Starts the Game (and restarts the game)


        // Reset the Current Score


        // Set a new Target Score (between 19 and 120)(use your getRandom funcrion with new arguements)


        // Set different values for each of the crystals (between 1 and 12)(use your get random function with new arguements)
            //blue crystal random value

            //red crystal random value

            //green crystal random value

            //yellow crystal random value


    // Change the HTML to reflect all of these changes ($("#idyouwanttochange")text(variableYouWantItEqualTo);)



    // Testing Console - to make sure the random number function is running correctly

        //console log your target score

        //console log your crystal values


  // function to Check if User Won or Lost and Reset the Game named checkWin


    // Check if currentScore is larger than targetScore (if Statement)

        //alert "you Lost"


        // Add to Loss Counter


        // Change Loss Count HTML


        // Restart the game (call your startGame function)


  //else statement for case where user wins comparing current score with target score


        //alert "you win"


         // Add to the Win Counter


        // Change Win Count HTML


        // Restart the game



  // Function to respond to clicks on the crystals


    // Change currentScore by adding value of the clicked crystal


    // Change the HTML to reflect changes in currentScore


    // Call the checkWin Function


    // Console log current score

  // MAIN PROCESS
  // =================================================================

  // Starts the Game the First Time. by calling startGame function

    //on click event for blue crystal

    //on click event for red crystal

    //on click event for green crystal

    //on click event for yellow crystal
