
var current = 0; //set index to 0
var sayCorrect = "Correct";
var score = 0;
var userList = [];
var checkChoice = []; //set checkChoice as an array
const startButton = document.getElementById('start-btn')
const questionElement = document.getElementById('question')
const highScore = document.getElementById('highScore-btn')
var containerHighScores = document.getElementById('containerHighScores')
var container = document.getElementById('container')
var answerA = document.getElementById('answerA')
var answerB = document.getElementById('answerB')
var answerC = document.getElementById('answerC')
var answerD = document.getElementById('answerD')

answerA.addEventListener('click',checkAnswer(0)) //checkChoice is not defined
answerB.addEventListener('click',checkAnswer(1))//what was this intended to be?
answerC.addEventListener('click',checkAnswer(2))//needs to say "this is which answer
answerD.addEventListener('click',checkAnswer(3))//was chosen"

var secondsLeft = 0; //initialize secondsLeft as 0 - should be set to 75 as
                                    //game begins
var currentSelection = false;  //set this to false so it will check the choice and 
                                                  //determine if answer is true or false - checkAnswer()

startButton.addEventListener('click', clock) //can I set var secondsLeft = 75 here?
                                                                       //what does "clock" do here?
highScore.addEventListener('click', highScore)

containerHighScores.setAttribute('class', 'hide')


//this function begins the game, sets index to 0
function startGame() {
    console.log('Started')
    startButton.classList.add('hide') //this was not working
    current = 0  //question index
    questionElement.classList.remove('hide')
    // secondsLeft = 75;  set this to 75 before this function is called? 
    secondsLeft = 75;
    clock()
}

//begins the timer and goes to the nextQuestion (the first one)
//how do I come here to deduct 15 seconds when answered incorrectly?
function clock() {
    console.log("before check for wrong answer " + secondsLeft);
    if (currentSelection === true) {
        secondsLeft = secondsLeft - 15;  
        console.log("when answer wrong " + secondsLeft);
    }
        //subtract 15  from secondsLeft and continue
        //where does this go?
    var timeEl = document.querySelector(".time");
   
        var timerInterval = setInterval(
        function() {
            secondsLeft--;
            console.log('after secondsLeft-- ' + secondsLeft)
            timeEl.innerText = secondsLeft;
    
            if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            lose();
            }
        }
        , 1000);    
    nextQuestion()
}

//check the answer chosen against the question's answer
//TODO answerChoice is coming up as undefined
function checkAnswer(currentSelection) {    
        //check if anwer is correct
    if (questions[current].choices[answerChoice] === questions[current].answer) {
        sayCorrect = "Correct"; //Flash "Correct" on screen for 1 second
    }
    else {
        // TODO:  subtract 15 second from the clock
        sayCorrect = "Incorrect";
        currentSelection = true;
        //Flash "Incorrect" on screen for 1 second
    }
    nextQuestion()
}

function nextQuestion() {
    //is there time left?
    if(secondsLeft > 0){
        //check array to see if there is another question
        if (current < questions.length) {
            questionElement.innerText = questions[current].title;
            answerA.innerText = questions[current].choices[0];
            answerB.innerText = questions[current].choices[1];
            answerC.innerText = questions[current].choices[2];
            answerD.innerText = questions[current].choices[3];
            current++;
            //clear old question and put up new question and answers
         } 
        else {
            win()
        }
    }
    else {
        lose()
    }
}

function win() {
    //This is the winning function
    //Clear questions and answers.     
    score = secondsLeft;  //score is just the seconds remaining
    //ask them to put in their initials and join the top scorers 
    addName();
    startGame();
}
    //store initials with the score in the LocalStorage

function renderUsers() {
// Render a new li for each user and their score
    for (var i = 0; i < userList.length; i++) {
        var rUser = userList[i].user;
        var rScore = userList[i].score;

        var li = document.createElement("li");
        li.textContent =rUser;
        var ls = document.createElement("ls");
        ls.textContent =rScore;
        userList[i].user.appendChild(li);
        userList[i].score.appendChild(ls);
    }
}
//Once the current high scorers are listed, ask the user to add their inits
//TODO How Does This Get Asked?
function addName(){
        event.preventDefault();    
        containerHighScores.removeAttribute;
        container.setAttribute("class","hide");//'hide' is from css - display none
        var userText = userInput.value.trim();        
        // Return from function early if submitted userText is blank
        if (userText === "") {
            return;
        }
        // Add new userText to users array, clear the input
        userList[i].user.push(userText);
        userListscore.push(score);
        userInput.value = "";      
        // Render the list
        renderUsers();
        }

// set new submission
// localStorage.setItem("player", JSON.stringify(player));
    
// get most recent submission
// var lastUser = JSON.parse(localStorage.getItem("user"));
// user.textContent = lastUser.firstName;
// userinitSpan.textContent = lastUser.password;

function lose() {
    //Display "You Lost" 
    startGame();
}


//----------HERE DOWN IS COMMENTED OUT----------------
// function setNextQuestion() {
    //test to see if there is a next question, if not go to WIN funciton
    //if there is a new question, pull it and go to showQuestions
// }

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
