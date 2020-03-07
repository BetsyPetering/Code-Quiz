var current = 0; //set question index to 0
var timer;
var time = 75;
var winners = [];
var winList = document.querySelector("#winList");

const startButton = document.getElementById("start-btn");
const keepInitials = document.getElementById("add-btn");
const highScore = document.getElementById("highScore-btn");
const status = document.getElementById("status");
const winnerGrid = document.getElementById("win-list");
const initialsElement = document.getElementById("initials");
const clockElement = document.getElementById("clock");
const timerElement = document.getElementById("timer");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

startButton.addEventListener("click", startGame);
keepInitials.addEventListener("click", addInitials);
highScore.addEventListener("click", showScores);

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

  startButton.classList.add("hide");
  clockElement.classList.add("hide");
  initialsElement.classList.add("hide");
  winnerGrid.classList.remove("hide");

  winList.innerHTML = "";
  winners = JSON.parse(localStorage.getItem("winners"));
  
  for(i = 0; i < winners.length; i++) {
      var name =winners[i].name;
      var score = winners[i].score;      
      var li = document.createElement("li");
      li.innerText = name + "    " + score;
      li.setAttribute("winIndex", i);
      winList.appendChild(li);       
    setTimeout(function() {
        winnerGrid.classList.add("hide");
      }, 4000);  
      
  restart();
}

function addInitials() {
    clockElement.classList.add("hide");
    winnerGrid.classList.remove("hide");
    initialsElement.classList.remove("hide");

    getInitials = document.querySelector("#winner").value;
    winners.push(name: getInitials, score: time);
    console.log(winners);
    localStorage.setItem("winners", JSON.stringify(winners));
    
    setTimeout(function() {
        winnerGrid.classList.add("hide");        
      }, 4000);  
      restart();
  }

  
function nextQuestion() {
  questionElement.innerText = questions[current].title;
  answerA.innerText = questions[current].choices[0];
  answerB.innerText = questions[current].choices[1];
  answerC.innerText = questions[current].choices[2];
  answerD.innerText = questions[current].choices[3];
  status.innerText = "";
}

function checkAnswer(index) {
  var chosen = index; 
  var x = current; 
  if (questions[x].choices[chosen] === questions[x].answer) {
    correct();
  } else {
    time = time - 15;
    incorrect();
  }
}

function correct() {
  setTimeout(function() {
    status.innerText = "CORRECT, Yesss";
  }, 1000);
  current++;
  more();
}

function incorrect() {
  setTimeout(function() {
    status.innerText = "WRONG, So sad";
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
  initialsElement.classList.remove("hide");
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

function restart() {
  initialsElement.classList.add("hide");
  time = 75;
  startButton.classList.remove("hide");
  highScore.classList.remove("hide");
  clockElement.classList.remove("hide");
}
