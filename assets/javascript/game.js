 //word bank
 var aboutMj = ["thriller", "glove", "moonwalk", "dancer", "neverland", "motown", "kingofpop", "entertainer", "legend", "bubbles"];

 //holds the answer in string
 var answer = "";

 //converts the answer into an array
 var answerLetters = [];

 //Number of blanks in word
 var numBlanks = 0;

 //Shows blanks
 var blanks = [];

 //Holds the guessed letters
 var guessedLetters = [];

 //Number of wins
 var wins = 0;

 //Number of losses
 var losses = 0;

 //Number of guesses left
 var guessesLeft = 10;


 //Start game  
 startGame()

 function startGame() {
     //Choose a random word from the word bank
     answer = aboutMj[Math.floor(Math.random() * aboutMj.length)];

     //Splits the answer string 
     answerLetters = answer.split("");

     //Calculate the length of the answer for the blanks
     numBlanks = answerLetters.length;

     //Reset when new round is started
     guessesLeft = 9;
     guessedLetters = [];
     blanks = [];

     //For loop that determines how many blanks to display
     for (var i = 0; i < numBlanks; i++) {
         blanks.push("_");
     }

     //update the html with game info
     document.getElementById("displayWord").innerHTML = blanks.join(" ");
     document.getElementById("numberOfGuesses").innerHTML = guessesLeft;
     document.getElementById("numberOfWins").innerHTML = wins;
     document.getElementById("numberOfLosses").innerHTML = losses;


 }

//User Key Entries
 document.onkeyup = function(event) {

     //hold user input in a variable and convert to lowercase
     var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase()
     console.log(guessedLetters);

     //runs function to check input
     checkLetters(guessedLetters);

 }

 //This function will check user key input
 function checkLetters(letter) {
     var answerLetters = false;

     //for loop to check if key input is in answer word. If true, console will hold the letter
     for (var i = 0; i < numBlanks; i++) {
       
         if (answer.charAt(i) === letter) {
             answerLetters = true;
             console.log(answer.charAt(i))
         }
     }

//Logged letter will be pushed to the correct spot 

     if (answerLetters) {
         for (var i = 0; i < numBlanks; i++) {
             if (answer[i] === letter) {
                 blanks[i] = letter;

             }
         }
     }


     //if letter not in answer, guess counter will update and push the wrong letter to the guessed letters array
   
     else {
         guessedLetters.push(letter);
         guessesLeft--
     }

     console.log(blanks);

//update html 
     document.getElementById("numberOfGuesses").innerHTML = guessesLeft;
     document.getElementById("displayWord").innerHTML = blanks.join(" ");
     document.getElementById("lettersGuessed").innerHTML = guessedLetters.join(" ");

  //then run the round complete function
    roundComplete();
 }

//function for what happens when round ends
 function roundComplete() {

     //A win will update number of wins and restarts game
     if (answerLetters.toString() == blanks.toString()) {
         wins++
         document.getElementById("numberOfWins").innerHTML = wins;
         startGame()
     }

     //A loss will update number of losses and restarts game
     else if (guessesLeft == 0) {
         losses++
         document.getElementById("numberOfLosses").innerHTML = losses;
         startGame()
     }

 }

