var word = ["IRON MAN", "CAPTAIN AMERICA", "MIGHTY THOR", "INCREDIBLE HULK", "BLACK WIDOW", "NICK FURY", "HAWKEYE"]
var computerChoice = Math.floor(Math.random()*7);
var answer = word[computerChoice];
var wordLength = answer.length;
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
        console.log(answer);
        directionsText.textContent = "";
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
    }
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