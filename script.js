/*let questOne = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questTwo = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questThree = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3"
}
let questFour = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questFive = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questSix = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questSeven = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questEight = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questNine = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}
let questTen = {
    Text: "sample",
    correct: "correctTester",
    wrong1: "wrong1",
    wrong2: "wrong2",
    wrong3: "wrong3",
}*/

let questions2 = [
    {text: 'sample1', 
    answers: [{
        correct: 'test'},{
        wrong1: 'test'},{
        wrong2: 'test3'},{
        wrong3: 'test4'
    }
    ]},{text: 'sample2', 
    answers: [{
        wrong2: 'test'},{
        wrong1: 'test'},{
        correct: 'test3'},{
        wrong3: 'test4'
    }
    ]},{text: 'sample3', 
    answers: [{
        wrong1: 'test'},{
        correct: 'test'},{
        wrong2: 'test3'},{
        wrong3: 'test4'
    }
    ]},{text: 'sample4', 
    answers: [{
        correct: 'test'},{
        wrong1: 'test'},{
        wrong2: 'test3'},{
        wrong3: 'test4'
    }
    ]},{text: 'sample5', 
    answers: [{
        wrong3: 'test'},{
        wrong1: 'test'},{
        wrong2: 'test3'},{
        correct: 'test4'
    }
    ]},]

//let questions = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen]

let currentQuestion = 0;
let score = 0;
let timerCount = 60;
let userscore;
let userInitials;
let timeCounter = document.getElementById("timer");
console.log(questions2[currentQuestion].answers[0])

let answerSubmit = document.getElementById("submit-answer")

let welcomeDisplay = document.querySelector(".welcome-screen");
let highscoreDisplay = document.querySelector(".high-score");
let questionDisplay = document.querySelector(".questions");
let userscoreDisplay = document.querySelector(".user-score");

let aOne = document.getElementById("a-one").checked
let aTwo = document.getElementById("a-two").checked
let aThree = document.getElementById("a-three").checked
let aFour = document.getElementById("a-four").checked

let response = document.getElementById("response")

function highScoreSwitcher() {
    welcomeDisplay.style.display = "none";
    questionDisplay.style.display = "none";
    userscoreDisplay.style.display = "none";
    highscoreDisplay.style.display = "block";

//TODO:render the scores?
}

function startQuiz() {
    //start timer
    timerCount = 60;
    startTimer();
    //placeholder code
    console.log("Initialisation failed!")
    //1. change display to questions
    welcomeDisplay.style.display = "none";
    questionDisplay.style.display = "block";
    //2. change question number
let numberDisplay = currentQuestion;
numberDisplay = numberDisplay+1;
//let questNumber = questions.indexOf("questOne")
   // numberDisplay.innerHTML = /*questNumber + 1;*/ 1;
    //3. change text
let questDisplay = document.getElementById("question-info");
    questDisplay.innerHTML = questions2[0].text;

    //4. change questions
let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let answerFour = document.getElementById("answer-four");
    
    answerOne.innerHTML = questions2[currentQuestion].answers[0];
    answerTwo.innerHTML = questions2[currentQuestion].answers[1];
    answerThree.innerHTML = questions2[currentQuestion].answers[2];
    answerFour.innerHTML = questions2[currentQuestion].answers[3];

    
//if (aFour === true) {
    //function nextQuestion()
    //} else if (/* selected = wrong1 2 or 3 */) {
    //timercount = timercount - 5;
    //function nextQuestion();
//}
}

function startTimer() {
 // Sets timer
 timer = setInterval(function () {
    timerCount--;
    timeCounter.innerHTML = timerCount;
}, 1000);
}

function nextQuestion() {
    //TODO: make a function that refills the contents
    //of the answers
}

//TODO: Select one checkbox at a time: copied from http://jsfiddle.net/6Mkde/
var allRadios = document.getElementsByName('answer');
var booRadio;
var x = 0;
for(x = 0; x < allRadios.length; x++){

        allRadios[x].onclick = function(){

            if(booRadio == this){
                this.checked = false;
        booRadio = null;
            }else{
            booRadio = this;
        }
        };

}

/*
TODO: For general:
    - Create link from the highscore button to the highscore card:
        - Make it non-functional after the quiz has started
    TODO: DONE!- Clicking on the button takes you to the highscore card, which has
        the score from previous games saved in local storage
    - Create the code for the timer:
        - Timer starts when start button is clicked
        - Time is taken away every time the user gets a question wrong
        - Switches to .user-score care when timer / questions run out

TODO: For welcome card:
    - code start button:
        - Starts the timer
        - Switches to question card
            - Randomly selects question?
        - Shuts off interaction with highscore button
            (if timeLeft > 0) {
                button = nonetouchable
            }

TODO: For question card:
    - Question number = index number + 1
    - Selecting an answer
        - Interacts with the #response and changed its contents AND
        makes it visible
        - Interacts with the array and sees if the answer is the
        correct one, then either adds to the final score OR takes
        time away
        - Prompts the code to fill the sections of HTML with next
        question
    - Figure out how to tell the card to fill the answers in a random
    order in the sections
    - question card switches away if timer = 0 OR questions run out

TODO: For user score card:
    - Submit button
        - Saves score to localStorage
        - Compares it to other scores, places it in the scores
            if (score < otherScore) {
                store here
            } else if (score < otherOtherScore) {
                store here
            } ETC.
    - Prompts the highscore screen

TODO: for highscore
    - Display scores in order of highest to lowest
        - WITH INITIALS
    - Try again button restarts question function
    - Clear button empties local storage of all values

TODO: Possible extra:
    - Code footer with last score displayed at the bottom
*/

