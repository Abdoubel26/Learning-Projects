import { questions } from "./questions.js";


let currentQuestion = null;
let quizCategory = "programming";
let questionNo = 5;
let rightAnsweredQuestions = 0;

const QuizTimeLimit = 15;
let currentTime = QuizTimeLimit;
let timer = null;
const questionIndexHistory = [];
const ul = document.querySelector('.answerOptions');
const nextQuestionbtn = document.querySelector('.nextQuestionbtn');
const questionStatus = document.querySelector('.question-status');
const numberOfCurrentQuestion = document.querySelector('.questionNumber')
const timerElement = document.querySelector('.timer');
const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.querySelector('.result-container');
const answeredQE = document.querySelector('.answered');
const allquestions = document.querySelector('.allquestions');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const configurationContainer = document.querySelector('.configuration-container');
const starbtn = document.querySelector('.starbtn');
const categoryOption = document.querySelector('.category-option');
const questionNoElement = document.querySelector('.questionNo');

// importing buttons
const progbtn = document.getElementById('progbtn');
const mathbtn = document.getElementById('mathbtn');
const hisbtn = document.getElementById('hisbtn');
const scietechBtn = document.getElementById('scietechBtn');


const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twenty = document.getElementById('twenty');
const twentyFive = document.getElementById('twentyFive');


// config buttons Event Listeners

progbtn.addEventListener('click', () => {
    progbtn.classList.add('active');
    mathbtn.classList.remove('active');
    hisbtn.classList.remove('active');
    scietechBtn.classList.remove('active');
})

mathbtn.addEventListener('click', () => {
    mathbtn.classList.add('active');
    progbtn.classList.remove('active');
    hisbtn.classList.remove('active');
    scietechBtn.classList.remove('active');
})

hisbtn.addEventListener('click', () => {
    hisbtn.classList.add('active');
    mathbtn.classList.remove('active');
    progbtn.classList.remove('active');
    scietechBtn.classList.remove('active');
})

scietechBtn.addEventListener('click', () => {
    scietechBtn.classList.add('active');
    mathbtn.classList.remove('active');
    hisbtn.classList.remove('active');
    progbtn.classList.remove('active');
})

// number of question buttons Event Listeners

five.addEventListener('click', () => {
    five.classList.add('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twenty.classList.remove('active');
    twentyFive.classList.remove('active');
})

ten.addEventListener('click', () => {
    ten.classList.add('active');
    five.classList.remove('active');
    fifteen.classList.remove('active');
    twenty.classList.remove('active');
    twentyFive.classList.remove('active');
})

fifteen.addEventListener('click', () => {
    fifteen.classList.add('active');
    ten.classList.remove('active');
    five.classList.remove('active');
    twenty.classList.remove('active');
    twentyFive.classList.remove('active');
})

twenty.addEventListener('click', () => {
    twenty.classList.add('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    five.classList.remove('active');
    twentyFive.classList.remove('active');
})

twentyFive.addEventListener('click', () => {
    twentyFive.classList.add('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twenty.classList.remove('active');
    five.classList.remove('active');
})






document.addEventListener("DOMContentLoaded", () => {
    starbtn.addEventListener('click', startQuiz);
});



function startTimer() {
    timer = setInterval( () => {
        currentTime--;
        if(currentTime <= 0){

            highlightCorrectAnswer();
            nextQuestionbtn.classList.remove('hidden');
            clearInterval(timer);
        }
        timerElement.innerHTML = `<span class="material-symbols-outlined">timer</span> ${currentTime}s`
        }, 1000)
}

function resetTimer(){
    clearInterval(timer);
    currentTime = QuizTimeLimit;
    timerElement.innerHTML = `<span class="material-symbols-outlined">timer</span> ${currentTime}s`
}


const getRandomQuestions = () => {
    const categoryQuestions =  questions.find(cat => cat.category === quizCategory).questions;
     
    //filter out already asked questions and generate a random one.
    const availableQuestions = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.trunc(Math.random() * availableQuestions.length)];
    console.log(randomQuestion);

    if(questionIndexHistory.length >= Math.min(categoryQuestions.length, questionNo)){
        return showQuizResults();
    }

    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}





const displayQuestion = () => {
    currentQuestion = getRandomQuestions();
    const questionText = document.querySelector('.questionText');
    if(!currentQuestion) return;
    questionText.textContent = currentQuestion.question;
    resetTimer();
    startTimer();


    numberOfCurrentQuestion.textContent = `Question ${questionIndexHistory.length}: `
    questionStatus.innerHTML = `<span class='currentquetionnumber'> ${questionIndexHistory.length}</span>of <span class='allquestions'> ${questionNo}</span> Questions`
    ul.innerHTML = "";
    nextQuestionbtn.classList.add("hidden")

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answerOption");
        ul.appendChild(li);
        li.textContent = option;
        li.addEventListener('click', () => handleAnswer(li, index));
})
}


function handleAnswer(option, AnswerIndex){
    clearInterval(timer);
    const isCorrect = AnswerIndex === currentQuestion.correctAnswer;
    !isCorrect ? highlightCorrectAnswer() : "";
    option.classList.add( isCorrect ? 'correct' : 'wrong');
    document.querySelectorAll('.answerOption').forEach(ansOpt => {
        ansOpt.style.pointerEvents = 'none';

    })
    if(isCorrect && currentTime > 0){
        rightAnsweredQuestions++;
        nextQuestionbtn.classList.remove('hidden');
    }

    nextQuestionbtn.classList.remove('hidden');
}

function highlightCorrectAnswer() {
    const correctOption = document.querySelectorAll('.answerOption')[currentQuestion.correctAnswer];
    correctOption.classList.add('correct');
        document.querySelectorAll('.answerOption').forEach(ansOpt => {
        ansOpt.style.pointerEvents = 'none';

    })
}

function showQuizResults() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    answeredQE.textContent = rightAnsweredQuestions;
    allquestions.textContent = questionNo;
    tryAgainBtn.addEventListener('click', resetQuiz)
}


function resetQuiz() {
    resetTimer();
    resultContainer.classList.add('hidden');
    configurationContainer.classList.remove('hidden');
    rightAnsweredQuestions = 0;
    questionIndexHistory.length = 0;

    progbtn.classList.remove('active');
    mathbtn.classList.remove('active');
    hisbtn.classList.remove('active');
    scietechBtn.classList.remove('active');

    twentyFive.classList.remove('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twenty.classList.remove('active');
    five.classList.remove('active');

}



function startQuiz() {
    switch(true){
        case mathbtn.classList.contains('active'):
            quizCategory = 'mathematics';
            break;
        case hisbtn.classList.contains('active'):
            quizCategory = 'history';
            break;
        case progbtn.classList.contains('active'):
            quizCategory = 'programming';
            break;
        case scietechBtn.classList.contains('active'):
            quizCategory = 'science_and_tech';
            break;
    }
    switch(true){
        case five.classList.contains('active'):
            questionNo = 5;
            break;
        case ten.classList.contains('active'):
            questionNo = 10;
            break;
        case fifteen.classList.contains('active'):
            questionNo = 15;
            break;
        case twenty.classList.contains('active'):
            questionNo = 20;
            break;
        case twentyFive.classList.contains('active'):
            questionNo = 25;
            break;
        default:
            categoryOption.textContent = 'Please select a category'
            questionNoElement.textContent = 'Please Select a Number of questions'
            return;
    }

    configurationContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    displayQuestion();
}


nextQuestionbtn.addEventListener('click', displayQuestion);
