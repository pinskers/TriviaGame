
// Creating an array of objects to store our questions, answers, and correct answers.
var cephaQuestions = [
    {
        question: "Cephalopod means what in Latin?",
        answers: {
            a: "foot-hand",
            b: "hand-foot",
            c: "head-foot",
            d: "head-hand"
        },
        correctAnswer: "head-foot"
    },
    {
        question: "Over how many species of cephalopods are there?",
        answers: {
            a: "800",
            b: "300",
            c: "500",
            d: "1000"
        },
        correctAnswer: "800"
    },
    {
        question: "What phlyum is the class Cephalopoda part of?",
        answers: {
            a: "Porifera",
            b: "Coelenterata",
            c: "Gastrotricha",
            d: "Mollusca"
        },
        correctAnswer: "Mollusca"
    }

]

// Variable for how much time we want in the timer per question
var timeLeft = 5;

// Variable to count our incorrect questions
var correctQuestions;
var countdownTimer;

// Setting up a function for a timer
function timer (){
    // Making the time count down by one second
    countdownTimer = setInterval(function(){
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
    $("#q1a1").text(cephaQuestions[0].answers.a);
    $("#q1a2").text(cephaQuestions[0].answers.b);
    $("#q1a3").text(cephaQuestions[0].answers.c);
    $("#q1a4").text(cephaQuestions[0].answers.d);
    timer ();
}

// Upon document startup display timer, and question and corresponding answers in their
// respective divs.
$(document).ready(function() {
    reset ();

    // Putting our second question and answers set into their respective places
    $("#question2").text(cephaQuestions[1].question);
    $("#q2a1").text(cephaQuestions[1].answers.a);
    $("#q2a2").text(cephaQuestions[1].answers.b);
    $("#q2a3").text(cephaQuestions[1].answers.c);
    $("#q2a4").text(cephaQuestions[1].answers.d);

    // Putting our third question and answers set into their respective places
    $("#question3").text(cephaQuestions[2].question);
    $("#q3a1").text(cephaQuestions[2].answers.a);
    $("#q3a2").text(cephaQuestions[2].answers.b);
    $("#q3a3").text(cephaQuestions[2].answers.c);
    $("#q3a4").text(cephaQuestions[2].answers.d);

    // Checking if user click equals a correct answer for question 1
    $("input[name=question1]").click(function() {
        var questionOneString = $("input[name=question1]:checked").next().text();
        if (questionOneString === cephaQuestions[0].correctAnswer){
            correctQuestions++;
            console.log("Correct!");
        } 
    });

    // Checking if user click equals a correct answer for question 2
    $("input[name=question2]").click(function() {
        var questionOneString = $("input[name=question2]:checked").next().text();
        if (questionOneString === cephaQuestions[1].correctAnswer){
            correctQuestions++;
            console.log("Correct!");
        } 
    });

    // Checking if user click equals a correct answer for question 3
    $("input[name=question3]").click(function() {
        var questionThreeString = $("input[name=question3]:checked").next().text();
        if (questionThreeString === cephaQuestions[2].correctAnswer){
            correctQuestions++;
            console.log("Correct!");
        }
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

