$(document).ready(function () {

    var questions = [

        {
            question: "What is the largest continent on planet Earth?",
            choices: ["Africa", "Asia", "America", "Australia"],
            correct: 2,
            correctDetails: "Asia is 30% of the world in area."
                },

        {
            question: "Which continent has the most countries?",
            choices: ["Africa", "Europe", "Asia", "America"],
            correct: 1,
            correctDetails: "The continent of Africa has 53 countries."
                },

        {
            question: "How many countries are there on planet Earth?",
            choices: ["78", "116", "154", "196"],
            correct: 4,
            correctDetails: "There are 196 countries, including Taiwan."
                },

        {
            question: "What is the largest country (in area) in the world?",
            choices: ["Australia", "India", "Russia", "China"],
            correct: 3,
            correctDetails: "Russia has a land mass of 17,075,200 square km."
                },

        {
            question: "Which country has the greates bio-diversity of flora and fauna on Earth?",
            choices: ["Madagascar", "Brazil", "Indonesia", "United States"],
            correct: 2,
            correctDetails: "Brazil has more than....."
                }

            ];

    /*--- Result Message Variable ---*/

    var feedBack = "Great Job!";

    /*--- Variables ---*/
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    /*--- Hide quiz and result section on load ---*/
    $(".quiz-section").hide();
    $(".result-section").hide();

    /*--- Display Questions Function ---*/
    function questionDisplay() {
        //displays the current question
        $("#question-number").text("Question" + (questionNum + 1) + " of " + questionTotal);
        $("#question").text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //loop thru the answer choices and create an dynamically generated row for each of them
            $('#choices').append("<input class='option' type='radio'  name='option' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
        }
    }

    /*--- On start quiz ---*/
    $(".start-button").click(function () { //start the quiz and show the first question
        $("start-section").hide;
        $(".quiz-section").show();
        $(".result-section").hide();
        //empty the result details container
        $("#result-msg").empty();
        questionDisplay();
    });

    /*--- Show quiz questions ---*/
    $(".quiz-section").on("click", ".option", function () {
        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].correct;

        if (answer == correctAnswer) {
            correctTotal += 1;
        }

        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {
            $("#finalScore").text(correctTotal + "/" + questionTotal);

            $(".start-button").show()
            $("start-section").hide;
            $(".quiz-section").hide();
            $(".result-section").show();

        } else {
            //continue to next question
            questionNum += 1;
            questionDisplay();
        }

    });

    /*--- Load the start section from the result section ---*/
    $(".result-section").on("click", "#tryagain", function () {
        $("start-section").show;
        $(".quiz-section").hide();
        $(".result-section").hide();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });

});
