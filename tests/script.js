var clockTime = true; //boolean to see if there's time left
var current = 0; //set question index to 0

const startButton = document.getElementById('start-btn');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const highScore = document.getElementById('highScore-btn');

var containerHighScores = document.getElementById('containerHighScores');

var container = document.getElementById('container');

var questionContainerElement = document.getElementById('question-container');
var answerA = document.getElementById('answerA');
var answerB = document.getElementById('answerB');
var answerC = document.getElementById('answerC');
var answerD = document.getElementById('answerD');

startButton.addEventListener('click', startGame);


function startGame() {
    console.log("started");
          //game is started, so hide the unneeded areas
    startButton.classList.add('hide');
    highScore.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
        //set the question index to the first question
    current = 0;
       //put up the question
    nextQuestion();
        //start the clock
    countDown(1);
}

    // This timer counts down any number of minutes
    // Tried to changes to minutes and seconds - did not work
    // Perhaps can change to seconds and start by 
    //                        breaking seconds to minutes and seconds
function countDown(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1;

        seconds--;
        console.log("seconds " + seconds);

        counter.innerHTML =  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countDown(mins-1);
            }
        }
    }
    tick();
}

    //the function to put a new questions up
function nextQuestion() {
    questionElement.innerText = questions[current].title;

    answerA.innerText = questions[current].choices[0];
    answerB.innerText = questions[current].choices[1];
    answerC.innerText = questions[current].choices[2];
    answerD.innerText = questions[current].choices[3];

        //we stay in this function until an answer is clicked
    answerA.addEventListener('click', checkAnswer(0)); 
    answerB.addEventListener('click', checkAnswer(1));
    answerC.addEventListener('click', checkAnswer(2));
    answerD.addEventListener('click', checkAnswer(3));

    current++;  //set current to the next question's index
}

    //this is run when an answer is chosen
function checkAnswer(index) {    
    var chosen = index;
    var x = current;
    console.log("chosen = " + chosen + "   x = " + x);
    console.log("answer chosen = " + questions[x].choices[chosen]);
    console.log("correct answer = " + questions[x].answer);
    // if (questions[x].choices[chosen] !== questions[x].answer) {
    //     lose();
    // } else {
    //     nextQuestion();
    // }
}

//check if clocktime and if current < questions.length before going to nextQuestion
function more() {
    if (clockTime) {
        if (current < questions.length) {
            nextQuestion();
        } else {
            win();
        }        
    }
    if (!clockTime) {
        lose();
    }
}

function win() {
    console.log("won");
    startGame();
}

function lose() {
    console.log("lost");
    startGame();
}