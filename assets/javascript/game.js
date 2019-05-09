var word = ["IRON*MAN", "CAPTAIN*AMERICA", "MIGHTY*THOR", "INCREDIBLE*HULK", "BLACK*WIDOW", "NICK*FURY", "HAWKEYE*"];
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var computerChoice = Math.floor(Math.random()*7);
// var answer = word[computerChoice];
// var wordLength = answer.length;
// var display = [wordLength];
// var correct = wordLength - 1;
// var letters = answer.split('');
// var guessesLeft = wordLength + 2; 
// var output = "";
// var userLetter = "";
var wins = 0;
var losses = 0;
var lettersGuessed = "";




// variables that hold references to places in the HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guesses-left");

 
 console.log("wins: " + wins);
 console.log("losses: " + losses);


//  var gameStart = function() {
//     //Declare an array for variable lettersGuessed
//     lettersGuessed = [];
//     // displays wins, losses, and guesses left
//     winsText.textContent = "Wins: " + wins;
//     lossesText.textContent = "Losses: " + losses;
//     guessText.textContent = "Guesses Left: " + guessesLeft;
//     // creates underscore placeholders for the length of chosen word
//         for (var i=0; i < answer.length; i++) {
//             if (answer[i] === "*") {
//                 //there's probably a better way, but it works. So until I find a better way...
//                 display[i] = "&nbsp; &nbsp; &nbsp;";
//             }
//             else {
//                 display[i] = "_ &nbsp;";

//             }
//             output = output + display[i];
            
//     }  
//     // inserts the placeholders on page
//     document.getElementById("game").innerHTML = output;
//     //writes initial letters guessed on page
//     document.getElementById("letters-guessed").innerHTML= "--";
//     //reset the output
//     output ="";
// }

//function determines if the game has been won, lost, or need to continue guessing
//also controls the letters guessed

function keyGuessed() {
    if (lettersGuessed.indexOf(userLetter) > -1) {    
        for (var s = 0; s < wordLength; s++) {
            document.getElementById("guess-message").innerHTML = "you've already guessed this letter!";
            guessesLeft.classList.add("text-warning");   
        }
    }
    else {
        lettersGuessed.push(userLetter);
        document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(', ');
        console.log("Letters guessed: " + userLetter);
    }
}

// function winCalc() {
//     if (correct < 1) {
//         document.getElementById("victory").innerHTML = "YOU ARE VICTORIUS"
//         wins++;
//         winsText.textContent = "Wins: " + wins;
//         document.getElementById("game").innerHTML = output;
//     }
//     else if (guessesLeft < 1) {
//         document.getElementById("victory").innerHTML = "YOU HAVE BEEN DEFEATED!"
//         losses++;
//         lossesText.textContent = "Losses: " + losses;
//         document.getElementById("game").innerHTML = output;
//         guessText.textContent = "Guesses Left: " + 0;
//     }
//     else {
//         guessText.textContent = "Guesses Left: " + guessesLeft;
//         console.log("Guesses Left: " + guessesLeft);
//         if (lettersGuessed === userLetter) {
//             return;
//         }
//         else {
//         keyGuessed();
//         document.getElementById("game").innerHTML = output;
//         }
//     }
// }   

// //function controls when key is pressed  
// document.onkeyup = function(event) {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//         var userKey = event.key.toUpperCase();
//         output = "";
//         userLetter = userKey;
//         // console.log("User Letter Chosen: " + userLetter)
//         for (var w=0; w < answer.length; w++) {
//             if (userLetter == letters[w]) {
//                 display[w] = userLetter;
//                 correct--;
//                 console.log("letters remaining: " + correct);
//             }
//             output = output + display[w] + " ";
//         }
//         guessesLeft--;
//         winCalc();
//     }
//     document.getElementById("game").innerHTML = output;
// }



// window.onload = function() {
//     gameStart();
// }




// if (lettersGuessed.indexOf(userLetter) > -1) {    
//     for (var s = 0; s < wordLength; s++) {
//         if (display[s] = userLetter) {
//             document.getElementById("guess-message").innerHTML = "you've already guessed this letter!";
//             guessesLeft.classList.add("text-warning");   
//         }
//         output = output + display[s] + " ";
//     }



// ***Start Game***
window.onload = function() {
    gameStart();
}
//     computer picks a random name from Array
    //Declare an array for variable lettersGuessed
var gameStart = function() {

    //Declare Variables
    var computerChoice = Math.floor(Math.random()*7);
    var answer = word[computerChoice];
    var wordLength = answer.length;
    var display = [wordLength];
    var correct = wordLength - 1;
    var letters = answer.split('');
    var guessesLeft = wordLength + 2; 
    var output = "";
    var userLetter = "";

    //intial console logs 
    console.log(answer);
    console.log("WordLength: "+wordLength);
    console.log("guesses left: "+guessesLeft);

    if (lettersGuessed.indexOf(userLetter) > -1) {    
        for (var s = 0; s < wordLength; s++) {
            if (display[s] = userLetter) {
                document.getElementById("guess-message").innerHTML = "you've already guessed this letter!";
                guessesLeft.classList.add("text-warning");   
            }
        output = output + display[s] + " ";
        }
    }    

    //Declare an array for variable lettersGuessed
    console.log("gameStart")
    lettersGuessed = [];
    // displays wins, losses, and guesses left
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses Left: " + guessesLeft;
    // creates underscore placeholders for the length of chosen word
        for (var i=0; i < answer.length; i++) {
            //if the index value in answer equals * then displat three spaces.
            if (answer[i] === "*") {
                //then display three spaces.
                display[i] = "&nbsp; &nbsp; &nbsp;";
            }
            //otherwise 
            else {
                //display an underscore with a space
                display[i] = "_ &nbsp;";

            }
            // make output equal the the corresponding underscores and spaces from the for loop
            output = output + display[i];
            
    }  
    // inserts the output back to the div with game id
    document.getElementById("game").innerHTML = output;
    //initialize the letters-guessed id with two dashes before guesses get put in. 
    document.getElementById("letters-guessed").innerHTML= "--";
    //reset the output to equal nothing
    output ="";


    // ***user has to guess word***
    //function controls when key is pressed  
    document.onkeyup = function(event) {

        //if key pressed matches a letter on the keyboard
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            //variable userKey is equal to the letter pressed capitalized
            var userKey = event.key.toUpperCase();
            //output reset
            output = "";
            //global variable userLetter is set to equal local variable userKey
            userLetter = userKey;
            // console.log("User Letter Chosen: " + userLetter)

            //for loop that funs for the length of answer
            for (var w=0; w < answer.length; w++) {
                //if the key pressed by the user equals one of the letters in the answer
                if (userLetter == letters[w]) {
                    //change the index at the same display to equal the user guess
                    display[w] = userLetter;
                    //subtract from letters remaining
                    correct--;
                    console.log("letters remaining: " + correct);
                }
                //change output to the display index value obtained from the if statement
                output = output + display[w] + " ";
            }
            // subtract from guesses left for the user
            guessesLeft--;
            // run winCalc function
            winCalc();
        }
        // update the html with the game id with the new output
        document.getElementById("game").innerHTML = output;
    }


    //this determines in the user has completed the game 
    function winCalc() {
        // if all the letters have been guessed
        if (correct < 1) {
            // display victory in html div id victory
            document.getElementById("victory").innerHTML = "YOU ARE VICTORIUS"
            //update the wins variable by 1
            wins++;
            //update the wins in the html
            winsText.textContent = "Wins: " + wins;
            //updates the value in the game html, but do I have to at this point?///////////////////////////////////////////////////////////
            document.getElementById("game").innerHTML = output;
            gameStart();
        }
        //If the user ran out of guesses left...
        else if (guessesLeft < 1) {
            //update the html id victory to say the user lost
            document.getElementById("victory").innerHTML = "YOU HAVE BEEN DEFEATED!"
            //update losses
            losses++;
            //display update to losses in html
            lossesText.textContent = "Losses: " + losses;
            //updates the value in the game html, but do I have to at this point?/////////////////////////////////////////////////////////// 
            document.getElementById("game").innerHTML = output;
            // update the guesses left to override the fact that there is a * value in the index
            guessText.textContent = "Guesses Left: " + 0;
            gameStart();
        }
        // if the user still has guesses and there are still letters to guess in the word...
        else {
            //update guesses left... but not sure at the moment where its pulling that from/////////////////////////////////////////////////
            guessText.textContent = "Guesses Left: " + guessesLeft;
            console.log("Guesses Left: " + guessesLeft);
            // if user is guessing a letter already guessed
            if (lettersGuessed === userLetter) {
                //return nothing
                return;
            }
            //otherwise...
            else {
            // run keyguessed function. should this be here?///////////////////////////////////////////////////////////////////////////////
            keyGuessed();
            // update the game html
            document.getElementById("game").innerHTML = output;
            }
        }
        
    } 

    //supposed to determine if a letter has already been guessed
    function keyGuessed() {
        //if the userletter matches any letter in the index of lettersGuessed...
        if (lettersGuessed.indexOf(userLetter) > -1) {
            // run for loop cycling through wordLength which is the same thing as answer.length    
            for (var s = 0; s < wordLength; s++) {
                // update html id guess-message to tell them theyve already guessed this letter
                document.getElementById("guess-message").innerHTML = "you've already guessed this letter!";
                // not sure if needed
                // guessesLeft.classList.add("text-warning");   
            }
        }
        // otherwise...
        else {
            // enter the letter guessed by the user into lettersGuessed array
            lettersGuessed.push(userLetter);
            //update the html id 
            document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(', ');
            console.log("Letters guessed: " + userLetter);
        }
    }
}

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
