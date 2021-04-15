var startBtn = document.getElementById('start-btn')
var question = document.getElementById('question')
var choices = document.getElementById('answer-btn')
var questionBox = document.getElementById('questionContainer')
let currentQuestion = 0
const randomQuestion, currentQuestionIndex


// Function to start the quiz
function startQuiz() {
    console.log('click')
    nextQuestion()
    randomQuestion = question.sort(() => Math.random() - .5)    
}

function nextQuestion() {

}

function answer() {

}





//
startBtn.addEventListener('click', function(event){
    event.preventDefault();
    var frontPage = document.getElementById('frontPage')
    frontPage.style.display='none'
    questionBox.style.display='block'
    startQuiz();
});

