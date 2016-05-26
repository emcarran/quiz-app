$(document).ready(function () {

    var questions = [

        {
            question: "What is the largest continent on planet Earth?",
            choices: ["Africa", "Asia", "America", "Australia"],
            correct: 1,
            correctDetails: "Asia has an overall area of 43,820,000 (km2) which constitute 8.7% of the total surface area of Earth, 30% of the total landmass and a population of over 4 billion people (60% of the human population of the world)."
                },

        {
            question: "Which continent has the most amount of countries?",
            choices: ["Africa", "Europe", "Asia", "America"],
            correct: 0,
            correctDetails: "The continent of Africa has a total of 54 countries."
                },

        {
            question: "How many countries are there on the planet?",
            choices: ["78", "116", "154", "196"],
            correct: 3,
            correctDetails: "There are 196 countries, including Taiwan."
                },

        {
            question: "What is the largest country (in surface area) in the world?",
            choices: ["Australia", "India", "Russia", "China"],
            correct: 2,
            correctDetails: "Russia has a land mass of 17,075,200 (km2)."
                },
        {
            question: "What continent is home to the world's largest desert?",
            choices: ["Australia", "Asia", "America", "Africa"],
            correct: 3,
            correctDetails: "Africa is home to the Sahara Desert, which occupies 25% of the total area of Africa."
        },

        {
            question: "What continent is home to the world's largest forest?",
            choices: ["America", "Asia", "Australia", "Africa"],
            correct: 0,
            correctDetails: "America is home to the Amazon rainforest, which covers 30% of the total area in South America."
        },

        {
            question: "What country has the largest number of contiguous (not including extended territories) time zones?",
            choices: ["Turkey", "Russia", "China", "Australia"],
            correct: 1,
            correctDetails: "Russia has nine time zones."
        },

        {
            question: "What is the largest ocean on the planet?",
            choices: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
            correct: 1,
            correctDetails: "The Pacific Ocean is the largest of the world's five oceans, covering an area of 155 million km2 (about 60 million m2)."
        },

        {
            question: "What country has the most spoken languages in the world?",
            choices: ["Indonesia", "Nigeria", "Papua New Guinea", "India"],
            correct: 2,
            correctDetails: "Although Papua New Guinea has three official languages, Hiri Motu, Tok Pisin, there are 820 spoken languages."
        },

        {
            question: "Which country has the greates bio-diversity of flora and fauna on Earth?",
            choices: ["Madagascar", "Brazil", "Indonesia", "United States"],
            correct: 1,
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
        $(".question-number").text("Question " + (questionNum + 1) + " of " + questionTotal);
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
        $(".start-section").hide();
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
                correctTotal++;
            }

            //quiz is finished, show result-section
            if ((questionNum + 1) == questionTotal) {
                $("#finalScore").text(correctTotal + "/" + questionTotal);
                //if (finalScore == 10) {
                $(this).text("You've got 10 out of 10, " + feedBack);
            }

            $(".start-button").show();
            $(".start-section").hide;
            $(".quiz-section").hide();
            $(".result-section").show();

        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }

    });

/*--- Load the start section from the result section ---*/
$(".result-section").on("click", "#tryagain", function () {
    $(".start-section").show();
    $(".quiz-section").hide();
    $(".result-section").hide();
    //reset variables to start quiz again
    questionNum = 0;
    correctTotal = 0;
});

});
