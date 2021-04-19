var startButton = document.getElementById('start-btn')
var questionContainer = document.getElementById('questionContainer')
let currentQuestion = 0
let randomQuestion
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var nextButton = document.getElementById('next-btn')
let secondsLeft = 30
var timeEl = document.querySelector(".timerSec")
var userScoreEl = document.querySelector(".userScore")
var timerInterval;
let userScore = 0
var finalScoreElement = document.getElementById('finalScore')
var submitButtonElement = document.getElementById('submit')
var inputBoxElement = document.getElementById('userNameInput')




// Function to start the quiz
function startQuiz() 
{
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide')
    nextQuestion()
    setTime()
    userScoreEl.textContent = 0
    questionElement.classList.remove('hide')
    answerButtonsElement.classList.remove('hide')
    submitButtonElement.classList.add('hide')
    inputBoxElement.classList.add('hide')
    userNameInput.style.display='none'
    finalScoreElement.style.display='none'
}

// Moving to the next question
function nextQuestion() 
{
    reset()
  showQuestion(randomQuestion[currentQuestion])
}

//Adding questions to the question box
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//Resetting the answer boxes after each question
function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//Setting the answers and bringing up the end game options
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion.length > currentQuestion +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        clearInterval(timerInterval);
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        submitButtonElement.classList.remove('hide')
        inputBoxElement.classList.remove('hide')
        userNameInput.style.display='block'
        finalScoreElement.style.display='block'
    }
}

//Setting the button and background color according to correct or wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        userScore++;
        userScoreEl.textContent = userScore;
    } else {
        element.classList.add('wrong')
    }
}

//Clearing the wrong or correct function to reset buttons and background
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Starting the timer for the game
function setTime() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}


function gameOver() {
    var frontPage = document.getElementById('frontPage')
    frontPage.style.display='block'
    questionContainer.style.display='none'
    startButton.classList.remove('hide')
}

//Removing the Front page when start is clicked and bringing up questions and answers
startButton.addEventListener('click', function(event){
    event.preventDefault();
    var frontPage = document.getElementById('frontPage')
    frontPage.style.display='none'
    questionContainer.style.display='block'
    startQuiz();
    clearInterval(timerInterval);
    secondsLeft = 30
    setTime();
});
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

//List of questions and answers
const questions = [
    {   question: "What is an object?",
        answers: [
            { text: 'a collection of vases', correct: false},
            { text: 'a band name', correct: false},
            { text: 'a group of properties', correct: true},
            { text: 'an array', correct: false}
    ]
    },

    {   question: "What does JS stand for?",
        answers: [
            { text: "JavaScript", correct: true}, 
            { text: "Just Saying", correct: false},
            { text: "Joe Schilling", correct: false},
            { text: "Java Show", correct: false}
    ],
    },

    {   question: "What does CSS stand for?",
        answers: [
            { text: "Coded Script Sheet", correct: false},
            { text: "Cascading Style Sheet", correct: true},
            { text: "Concurrent Script Styling", correct: false},
            { text: "None of the above", correct: false}
    ],
    },

    {   question: "Which of these is NOT a programming language?",
        answers: [
            { text: "Python", correct: false},
            { text: "Ruby", correct: false},
            { text: "Java", correct: false},
            { text: "Asus", correct: true}
    ],
    },

    {   question: "Inside which HTML element do you put the JavaScript?",
        answers: [
            { text: "<script>", correct: true},
            { text: "<javascript>", correct: false},
            { text: "<js>", correct: false},
            { text: "<scripting>", correct: false}
    ],
    },

]