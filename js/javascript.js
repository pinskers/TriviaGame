
// Creating an object to store our questions, answers, and correct answers.
var cephaQuestions = [
    {
        question: "Cephalopod means what in Latin?",
        answers: {
            a: "foot-hand",
            b: "hand-foot",
            c: "head-foot",
            d: "head-hand"
        },
        correctAnswer: "c"
    },
    {
        question: "Over how many species of cephalopods are there?",
        answers: {
            a: "800",
            b: "300",
            c: "500",
            d: "1000"
        },
        correctAnswer: "a"
    },
    {
        question: "What phlyum is the class Cephalopoda part of?",
        answers: {
            a: "Porifera",
            b: "Coelenterata",
            c: "Gastrotricha",
            d: "Mollusca"
        },
        correctAnswer: "d"
    }

]
// Variables to store references to these elements
var quizDiv = $("#quiz"); 
var resultsDiv = $("#results");

var timeleft = 15; // Variable for how much time we want in the timer per question

// Setting up a function to build our quiz
function quizBuild (){

}

// Setting up a function to show our results
function resultsBuild (){
    
}
// Setting up a function for a module box
// Upon document startup display timer, and question and corresponding answers in their
// respective divs.
$(document).ready(function() {
    // Figure out how to make this a function so I can use it over and over
    // Making the time count down by one second
    var countdownTimer = setInterval(function(){
        timeleft--;
        $("#seconds").text(timeleft);               
        if(timeleft <= 0)
            clearInterval(countdownTimer);
        },1000);
    });


    
// Start timer.

// If user selects the correct answer, display screen that shows "Congratulations! You chose the 
// correct answer!"

// After three seconds have passed, display next question and answer set.

// If user selects the wrong answer, display screen that shows "Incorrect, the answer was [answer]."

// After three seconds have passed, display next question and answer set.

// If timer reaches zero, display screen that shows "You ran out of time, the answer was [answer]."

// After three seconds have passed, display next question and answer set.

// Once user answers last question and last correct/incorrect screen has been shown, display screen that
// shows correct and incorrect answers with option to restart the game.

// If user clicks restart, game restarts from the beginning.

