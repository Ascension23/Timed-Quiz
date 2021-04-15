var startBtn = document.getElementById('start-btn')
// var question = document.getElementById('question')
var choices = document.getElementById('answer-btn')
var questionContainer = document.getElementById('questionContainer')
let currentQuestion = 0
let randomQuestion
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


// Function to start the quiz
function startQuiz() {
    console.log('click')
    randomQuestion = questions.sort(() => Math.random() - .5)
    nextQuestion()   
}
// Moving to the next question
function nextQuestion() {
    // resetState()
    showQuestion(randomQuestion[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function answer() {

}





//
startBtn.addEventListener('click', function(event){
    event.preventDefault();
    var frontPage = document.getElementById('frontPage')
    frontPage.style.display='none'
    questionContainer.style.display='block'
    startQuiz();
});

const questions =[
    { title: "What is an object?",
    choices: ["a collection of vases", "a band name", "a group of properties", "an array"],
    answer:"a group of properties"
    },

    {title: "What does JS stand for?",
    choices: ["JavaScript", "Just Saying", "Joe Schilling", "Java Show"],
    answer:"JavaScript"
    },

    {title: "How do you move a box to the right with CSS?",
    choices: ["Justify-content: End", "Float: Left", "Align-content: Right", "All of the above"],
    answer:"All of the above"
    },

    {title: "Which of these is NOT a programming language?",
    choices: ["Python", "Ruby", "Java", "Asus"],
    answer:"Asus"
    },

    {title: "Inside which HTML element do you put the JavaScript?",
    choices: ["<script>", "javascript", "<js>", "<scripting>"],
    answer:"<script>"
    },

]