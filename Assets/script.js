
var current = 0;

const startButton = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const highScore = document.getElementById('highScore-btn')
var answerA = document.getElementById('answerA')
var answerB = document.getElementById('answerB')
var answerC = document.getElementById('answerC')
var answerD = document.getElementById('answerD')

startButton.addEventListener('click', startClock)
highScore.addEventListener('click', highScore)

answerA.addEventListener('click',checkAnswer(0))
answerB.addEventListener('click',checkAnswer(1))
answerC.addEventListener('click',checkAnswer(2))
answerD.addEventListener('click',checkAnswer(3))

function startClock() {
    
    var timeEl = document.querySelector(".time");
    var secondsLeft = 75;
       
    //TODO find code error
    function setTime() {
        var timerInterval = setInterval(
        function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft ;
    
            if(secondsLeft === 0) {
            clearInterval(timerInterval);
            noTimeLeft();
            }
        }
        , 1000);
    }
    
    nextQuestion()
}

function checkAnswer(answerChoice) {

        //check if anwer is correct
    if (questions[current].choices[answerChoice] === questions[current].answer) {
        //TODO: show "correct" on screen 
    }
    else {
        // TODO: show "incorrect" on screen, subtract 15 second from the clock and move to next question

    }
          nextQuestion()
}

function nextQuestion() {
    //check array to see if there is another question
    if (current < questions.length) {
        questionElement.innerText = questions[current].title;
        answerA.innerText = questions[current].choices[0];
        answerB.innerText = questions[current].choices[1];
        answerC.innerText = questions[current].choices[2];
        answerD.innerText = questions[current].choices[3];
        current++;
    }
    else {
        noQuestions()
    }

    //if no questions, go to noQuestions
    //else clear display and put up new question
}

function noQuestions() {
    //if answer all questions, show you won, the score
    //then take them to the screen to put in their initials
    //store initials with the score in the LocalStorate
}

function noTimeLeft() {
    //if time runs out, then the person has lost, tell them so
}



//--------------------------------------------------------
//this function puts up the first question
function startGame() {
    console.log('Started')
    startButton.classList.add('hide') //this was not working
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    //test to see if there is a next question, if not go to WIN funciton
    //if there is a new question, pull it and go to showQuestions
}

// function showQuestions(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     });
// }

//-----------------------------------------------------------
 //----------------------------code is from class activity 23(?)
//To Store Initials and High Score  OR to Retrieve them:
// function showHighScores() {
//     //go to the localStorage and look for the gamer and scores
//     //if none, tell user and offer them to be the first
//     //if there are gamer initials and scores, put them on the screen
// }
//     var initialsInput = document.querySelector("#initials");
//     var scoreFromGame = document.querySelector("#score");

//     var userFirstNameSpan = document.querySelector("#user-first-name");
//     var userLastNameSpan = document.querySelector("#user-last-name");

//     function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//     }

    // signUpButton.addEventListener("click", function(event) {
    // event.preventDefault();
  
    // create user object from submission
//     var user = {
//         firstName: firstNameInput.value.trim(),
//         lastName: lastNameInput.value.trim(),
//         email: emailInput.value.trim(),
//         password: passwordInput.value.trim()
//     };

//   console.log(user);
  
//     // validate the fields
//     if (user.firstName === "") {
//         displayMessage("error", "First name cannot be blank");
//     } else if (user.lastName === "") {
//         displayMessage("error", "Last name cannot be blank");
//     } else if (user.email === "") {
//         displayMessage("error", "Email cannot be blank");
//     } else if (user.password === "") {
//         displayMessage("error", "Password cannot be blank");
//     } else {
//         displayMessage("success", "Registered successfully");

//         // set new submission
//         localStorage.setItem("user", JSON.stringify(user));
        
//         // get most recent submission
//         var lastUser = JSON.parse(localStorage.getItem("user"));
//         userFirstNameSpan.textContent = lastUser.firstName;
//         userLastNameSpan.textContent = lastUser.lastName;
//         userEmailSpan.textContent = lastUser.email;
//         userPasswordSpan.textContent = lastUser.password;
//     }
    // });
