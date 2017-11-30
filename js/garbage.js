// Setting up a function for incorrect modal box
function incorrectModal (){
    var modal = $("incorrectModal"); // Get incorrectModal div
    var span = document.getElementsByClassName("close")[0];  // When the user clicks on <span> (x), close the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Setting up a function for a correct modal box
function correctModal (){
    var modal = $("correctModal"); // Get correctModal div
    var span = document.getElementsByClassName("close")[0];  // When the user clicks on <span> (x), close the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function timeupModal (){
    var modal = $("timeupModal"); // Get timeupModal div
    var span = document.getElementsByClassName("close")[0];  // When the user clicks on <span> (x), close the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Variable for how much time we want in the timer per question
var timeLeft = 5;

// Variable to count our incorrect questions
var incorrectQuestions;
var userAnswer=[];

// Setting up a function for a timer
function timer (){
    // Making the time count down by one second
    var countdownTimer = setInterval(function(){
        timeLeft--;
         $("#seconds").text(timeLeft);               
        if(timeLeft <= 0)
            clearInterval(countdownTimer);
        },1000);
}

// Setting up a function to reset the game
function reset (){
    console.log(cephaQuestions[0].question);
    $("#question1").text(cephaQuestions[0].question);
    $("#answer1").text(cephaQuestions[0].answers.a);
    $("#answer2").text(cephaQuestions[0].answers.b);
    $("#answer3").text(cephaQuestions[0].answers.c);
    $("#answer4").text(cephaQuestions[0].answers.d);
}

function winLose (){
    console.log( "Handler for .click() called.");
    userAnswer.push();
    console.log(userAnswer);
}

// Upon document startup display timer, and question and corresponding answers in their
// respective divs.
$(document).ready(function() {
    reset ();
    timer ();

    $("#question").text(cephaQuestions[0].question);
    $("#answer1").text(cephaQuestions[0].answers.a);
    $("#answer2").text(cephaQuestions[0].answers.b);
    $("#answer3").text(cephaQuestions[0].answers.c);
    $("#answer4").text(cephaQuestions[0].answers.d);

    $(".button").click(function() {
        winLose();    
    });
});
    

// If user selects the correct answer, display screen that shows "Congratulations! You chose the 
// correct answer!"

// After three seconds have passed, display next question and answer set.

// If user selects the wrong answer, display screen that shows "Incorrect, the answer was [answer]." Add 1 to incorrect answers.

// After three seconds have passed, display next question and answer set.

// If timer reaches zero, display screen that shows "You ran out of time, the answer was [answer]."

// After three seconds have passed, display next question and answer set.

// Once user answers last question and last correct/incorrect screen has been shown, display screen that
// shows correct to incorrect ratio with option to restart the game.

// If user clicks restart, game restarts from the beginning.
