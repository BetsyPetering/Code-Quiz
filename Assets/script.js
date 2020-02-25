var current = 0; //set question index to 0
var timer
var time = 75;
var seconds = 60;
var mins = 3;

const status = document.getElementById('status');

const startButton = document.getElementById('start-btn');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const highScore = document.getElementById('highScore-btn');
const timeElement = document.getElementById("time");

var containerHighScores = document.getElementById('containerHighScores');

var container = document.getElementById('container');

const questionContainerElement = document.getElementById('question-container');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');

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
    timer = setInterval(countDown,1000);
}

function countDown() {
    time--;
    timeElement.innerText = time;
    console.log(time);
    if (time <= 0) {
        lose();        
    } 
}
    
    //the function to put a new questions up
function nextQuestion() {
    questionElement.innerText = questions[current].title;
    answerA.innerText = questions[current].choices[0];
    answerB.innerText = questions[current].choices[1];
    answerC.innerText = questions[current].choices[2];
    answerD.innerText = questions[current].choices[3];
    status.innerText = "";
}

    //this is run when an answer is chosen
function checkAnswer(index) {    
    var chosen = index;  //chosen answer's index
    var x = current;         //questions' index
    if (questions[x].choices[chosen] === questions[x].answer) {
        correct();
    } else {
        time - 15;
        incorrect();
    }    
}

function correct() {
    setTimeout(function() {status.innerText = "CORRECT" }, 1000);
    current++;  //set current to the next question's index   
    more();
}

function incorrect() {
    setTimeout(function() {status.innerText = "TOO BAD :(" }, 1000);    
    current++;  //set current to the next question's index  
    more(); 
}

//check if time > 0 and if current < questions.length before going to nextQuestion
function more() {
    if (time > 0) {
        if (current < questions.length) {
            nextQuestion();
        } else {
            win();
        }        
    }
    if (time <= 0) {
        lose();
    }
}

function win() {
    score = time;
    setTimeout(function() {status.innerText = "You've Won!" }, 1000);
    clearInterval(timer);
    addInitials();
}

function lose() {
    setTimeout(function() {status.innerText = "So Sad, You Lose" }, 1000);
    clearInterval(timer);    
}

function addInitials() {
    //ask for intials, add them and score to local storage
}

function restart() {
    //hide initials and bring back start button
    startGame();
}