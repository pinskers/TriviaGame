
//  ----- VARIABLES ------

// Array of objects to store our questions, answers, and correct answers.
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

// How much time we want in the timer per question
var timeLeft = 3;
var correctQuestions;
var countdownTimer;

// ----- LOGIC ------
$(document).ready(function() {
    reset ();
    resetTimer ();

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
    if (timeLeft <=0){ // This is pseudo code. Don't know why it's not working.
        console.log("test");
        timeUpDialog ();
        $("#dialog-timeup").dialog("open");
        $('.ok').on('click', function(){
            $("#q1wrapper").hide();
            $("#q2wrapper").show();
            timeLeft=16;
            $("#dialog-timeup").dialog("close");
        });
        
    }else { // End pseudo code
    $("input[name=question1]").click(function() {
        var questionOneString = $("input[name=question1]:checked").next().text();
        if (questionOneString === cephaQuestions[0].correctAnswer){
            correctQuestions++;
            correctDialog ();
            $("#dialog-correct").dialog("open");
            $('.ok').on('click',function(){
                $("#q1wrapper").hide();
                $("#q2wrapper").show();
                timeLeft=16;
                $("#dialog-correct").dialog("close");
            });

        }else {
            incorrectDialog ();
            $("#dialog-incorrect").dialog("open");
            $('.ok').on('click',function(){
                $("#q1wrapper").hide();
                $("#q2wrapper").show();
                timeLeft=16;
                $("#dialog-incorrect").dialog("close");    
            });
            $(".actualanswer").text(cephaQuestions[0].correctAnswer);          

        }
    });
}   

    // Checking if user click equals a correct answer for question 2
     if (timeLeft <=0){ // This is pseudo code. Don't know why it's not working.
        console.log("test");
        timeUpDialog ();
        $("#dialog-timeup").dialog("open");
        $('.ok').on('click', function(){
            $("#q2wrapper").hide();
            $("#q3wrapper").show();
            timeLeft=16;
            $("#dialog-timeup").dialog("close");
        });
        
    }else { // End pseudo code
    $("input[name=question2]").click(function() {
        var questionOneString = $("input[name=question2]:checked").next().text();
        if (questionOneString === cephaQuestions[1].correctAnswer){
            correctQuestions++;
            correctDialog ();
            $("#dialog-correct").dialog("open");
            $('.ok').on('click',function(){
                $("#q2wrapper").hide();
                $("#q3wrapper").show();
                timeLeft=16;
                $("#dialog-correct").dialog("close");
            });

        }else {
            incorrectDialog ();
            $("#dialog-incorrect").dialog("open");
            $('.ok').on('click',function(){
                $("#q2wrapper").hide();
                $("#q3wrapper").show();
                timeLeft=16;
                $("#dialog-incorrect").dialog("close");    
            });
            $(".actualanswer").text(cephaQuestions[1].correctAnswer);
        } 
    });
}

    // Checking if user click equals a correct answer for question 3
    if (timeLeft <=0){ // This is pseudo code. Don't know why it's not working.
    console.log("test");
    timeUpDialog ();
    $("#dialog-timeup").dialog("open");
    $('.ok').on('click', function(){
        $("#correctnumber").text(correctQuestions);
        $("#counter").show();
        $("#reset").show();   
        timeLeft=16;
        $("#dialog-timeup").dialog("close");
    });

    }else { // End pseudo code    
    $("input[name=question3]").click(function() {
        var questionThreeString = $("input[name=question3]:checked").next().text();
        if (questionThreeString === cephaQuestions[2].correctAnswer){
            correctQuestions++;
            correctDialog ();
            $("#dialog-correct").dialog("open");
            $('.ok').on('click',function(){
                $("#dialog-correct").dialog("close");
                $("#correctnumber").text(correctQuestions);
                $("#counter").show();
                $("#reset").show();                   
            });

        }else {
            incorrectDialog ();
            $("#dialog-incorrect").dialog("open");
            $('.ok').on('click',function(){
                $("#dialog-incorrect").dialog("close"); 
                $("#correctnumber").text(correctQuestions);
                $("#counter").show();
                $("#reset").show();   
            });
            $(".actualanswer").text(cephaQuestions[2].correctAnswer);
        }
    });
}
});



// ----- FUNCTIONS ------

// Setting up a function for a timer
function timer (){
    countdownTimer = setInterval(function(){
        timeLeft--;
         $("#seconds").text(timeLeft);               
        if(timeLeft <= 0)
            clearInterval(countdownTimer);
        },1000);
}

function resetTimer (){
    timeLeft = 15;
    timer ();
}


// Function to reset the game
function reset (){
    console.log(cephaQuestions[0].question);
    $("#question1").text(cephaQuestions[0].question);
    $("#q1a1").text(cephaQuestions[0].answers.a);
    $("#q1a2").text(cephaQuestions[0].answers.b);
    $("#q1a3").text(cephaQuestions[0].answers.c);
    $("#q1a4").text(cephaQuestions[0].answers.d);
    $("#q2wrapper").hide();
    $("#q3wrapper").hide();
    $("#counter").hide();
    $("#reset").hide();
    hideDialog();
    correctQuestions = 0;    
}

// Function to hide dialog boxes
function hideDialog (){
    $("#dialog-correct").hide();
    $("#dialog-incorrect").hide();
    $("#dialog-timeup").hide();
}

// Dialog box functions
function correctDialog() {
    $( "#dialog-correct" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
  }

function incorrectDialog() {
    $("#dialog-incorrect").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
  }

  function timeUpDialog() {
    $("#dialog-timeup").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
  }

