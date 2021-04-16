var startButton = document.getElementById('start-btn')
// var choices = document.getElementById('answer-btn')
var questionContainer = document.getElementById('questionContainer')
let currentQuestion = 0
let randomQuestion
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var nextButton = document.getElementById('next-btn')


// Function to start the quiz
function startQuiz() 
{
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide')
    nextQuestion()   
}
// Moving to the next question
function nextQuestion() 
{
    reset()
  showQuestion(randomQuestion[currentQuestion])
}
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

function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

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
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



//
startButton.addEventListener('click', function(event){
    event.preventDefault();
    var frontPage = document.getElementById('frontPage')
    frontPage.style.display='none'
    questionContainer.style.display='block'
    startQuiz();
});
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

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
            { text: "javascript", correct: false},
            { text: "<js>", correct: false},
            { text: "<scripting>", correct: false}
    ],
    },

]