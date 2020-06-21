let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById
('question-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answers-buttons')
startButton.addEventListener('click', startGame)










function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

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
    button.addEventListener('click' , selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
nextButton.classlist.add('hide')
while (answerButtonsElement.firstChild){
  
    answerButtonsElement.removeChild
    (answerButtonsElement.firstchild)

}



}


function selectAnswer(e) {
    const selectedButtom = e.target
    const correct =selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

const questions = [

    {
        question: 'What is 2 + 2 ?' ,
        answers: [
           {text:'4', correct: true },
           {text: '22', correct: false}
        ]
    }

]
