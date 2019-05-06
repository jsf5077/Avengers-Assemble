var word = ["IRON MAN", "CAPTAIN AMERICA", "MIGHTY THOR", "INCREDIBLE HULK", "BLACK WIDOW", "NICK FURY", "HAWKEYE"]
var computerChoice = Math.floor(Math.random()*7);
var answer = word[computerChoice];
var wordLength = answer.length;
var display = [wordLength];
var victory = wordLength;
var letters = answer.split('');
var GuessesLeft = wordLength + 5;
var output = "";
var userLetter = "";
var wins = 0;
var losses = 0;

// variables that hold references to places in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    // alert to start game by key press 
    if (userChoice === "enter") {
        // hide directions
        directionsText.textContent = "";
        // for loop that initiates game elements
        // generates placeholders that matches the length of the chosen word 
        for (var i=0; i < answer.length; i++) {
            display[i] = "_ ";
            output = output + display[i];
        }
    // inserts the placeholders on page
    document.getElementById("game").innerHTML = output;
    output ="";
    // displays wins and losses
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    }
        console.log(answer);
        console.log(wordLength);
        console.log(GuessesLeft);
        console.log("wins: " + wins);
        console.log("losses: " + losses);
}

// ***Start Game***
//     computer picks a random name from Array
//     placeholders populate with the amount of letters in the chosen word

// ***user has to guess word***

// when user guess correct letter in word 
//     placeholder for word populates with appropriate letter

// when user guess wrong letter in word
//     letter appears at the bottom in a list 
//     chances decrease by 1 

// when user runs out of guesses 
//     end game
//     add one to losses
//     play again

// when users guesses all letters
//     end game
//     add one to wins 
//     play again