var word = ["IRON*MAN", "CAPTAIN*AMERICA", "MIGHTY*THOR", "INCREDIBLE*HULK", "BLACK*WIDOW", "NICK*FURY", "HAWKEYE*"]
var computerChoice = Math.floor(Math.random()*7);
var answer = word[computerChoice];
var wordLength = answer.length;
var display = [wordLength];
var correct = wordLength;
var letters = answer.split('');
var guessesLeft = wordLength + 5; 
var output = "";
var userLetter = "";
var wins = 0;
var losses = 0;



// variables that hold references to places in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guesses-left");

 //console logs 
 console.log(answer);
 console.log("WordLength: "+wordLength);
 console.log("guessesLeft: "+guessesLeft);
 console.log("wins: " + wins);
 console.log("losses: " + losses);


var layout = function() {
    // displays wins, losses, and guesses left
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses Left: " + guessesLeft;
    // creates underscore placeholders for the length of chosen word
        for (var i=0; i < answer.length; i++) {
            if (answer[i] === "*") {
                //there's probably a better way, but it works. So until I find a better way...
                display[i] = "&nbsp; &nbsp; &nbsp;";
            }
            else {
                display[i] = "_ &nbsp;";

            }
            output = output + display[i];
            
    }  
    // inserts the placeholders on page
    document.getElementById("game").innerHTML = output;
    //reset the output
    output ="";
}
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userKey = event.key.toUpperCase();
        output = "";
        userLetter = userKey;
        console.log("User Letter Chosen: " + userLetter)
        for (var w=0; w < answer.length; w++) {
            if (userLetter == letters[w]) {
                display[w] = userLetter;
                correct--;
                console.log("letters remaining: " + correct);
            }
            output = output + display[w] + " ";
        }
        guessesLeft--;
        if (correct === 1) {
            document.getElementById("victory").innerHTML = "YOU ARE VICTORIUS"
            wins++;
            winsText.textContent = "Wins: " + wins;
            document.getElementById("game").innerHTML = output;
        }
        else if (guessesLeft < 1) {
            document.getElementById("victory").innerHTML = "YOU HAVE BEEN DEFEATED!"
            losses++;
            lossesText.textContent = "Losses: " + losses;
            document.getElementById("game").innerHTML = output;
            guessText.textContent = "Guesses Left: " + 0;
        }
        else {
            guessText.textContent = "Guesses Left: " + guessesLeft;
            console.log("Guesses Left: " + guessesLeft);
        }
    document.getElementById("game").innerHTML = output;
    }
}

window.onload = function() {
    layout();
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