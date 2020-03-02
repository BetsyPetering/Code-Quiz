var current = 0; //set question index to 0
var timer;
var time = 75;
var name;
var score;
var initialsEl = document.querySelector("#winner").value;
if (initialsEl === null) {
  initialsEl = "Be the First!";
}

var highScoreName = document.querySelector("#name");
var highScoreNum = document.querySelector("#score");
const status = document.getElementById("status");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const highScore = document.getElementById("highScore-btn");
const keepInitials = document.getElementById("add-btn");
const initialsElement = document.getElementById("initials");
const clockElement = document.getElementById("clock");
const timerElement = document.getElementById("timer");
const questionContainerElement = document.getElementById("question-container");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

startButton.addEventListener("click", startGame);
highScore.addEventListener("click", showScores);
keepInitials.addEventListener("click", restart);

function startGame() {
  initialsElement.classList.add("hide");
  startButton.classList.add("hide");
  highScore.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  answerButtonsElement.classList.remove("hide");
  current = 0;
  nextQuestion();
  timer = setInterval(countDown, 1000);
}

function countDown() {
  time--;
  timerElement.innerText = time;
  console.log("time is" + time);
  if (time <= 0) {
    lose();
  }
}

function showScores() {
  console.log("inside showScore");
  highScore.classList.remove("hide");
  highScoreName.innerText = localStorage.getItem("name");
  highScoreNum.innerText = localStorage.getItem("score");
  restart();
}

// //the function to put a new questions up
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
  var chosen = index; //chosen answer's index
  var x = current; //questions' index
  if (questions[x].choices[chosen] === questions[x].answer) {
    correct();
  } else {
    time = time - 15;
    incorrect();
  }
}

function correct() {
  setTimeout(function() {
    status.innerText = "CORRECT, Yessssss";
  }, 1000);
  current++;
  more();
}

function incorrect() {
  setTimeout(function() {
    status.innerText = "WRONG, Too Bad";
  }, 1000);
  current++;
  more();
}

function more() {
  if (time > 0) {
    if (current < questions.length) {
      nextQuestion();
    } else {
      win();
    }
  } else {
    console.log("in more with time <= 0");
    lose();
  }
}

function win() {
  score = time;
  setTimeout(function() {
    status.innerText = "WooHoo! You've Won!";
  }, 1000);
  clearInterval(timer);
  questionContainerElement.classList.add("hide");
  answerButtonsElement.classList.add("hide");
  addInitials();
}

function lose() {
  setTimeout(function() {
    status.innerText = "Nice Try, But You Lose";
  }, 1000);
  clearInterval(timer);
  startButton.classList.remove("hide");
  questionContainerElement.classList.add("hide");
  answerButtonsElement.classList.add("hide");
  restart();
}

function addInitials() {
  clockElement.classList.add("hide");
  initialsElement.classList.remove("hide");
  localStorage.setItem("name", initialsEl);
  localStorage.setItem("score", time);
  highScoreName.textContent = initialsEl;
  highScoreNum.textContent = score;
  startButton.classList.remove("hide");
  clockElement.classList.remove("hide");
}

function restart() {
  initialsElement.classList.add("hide");
  time = 75;
  startButton.classList.remove("hide");
  highScore.classList.remove("hide");
}
