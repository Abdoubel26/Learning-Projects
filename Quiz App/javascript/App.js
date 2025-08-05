import { questions } from "./questions.js";


let currentQuestion = null;
let quizCategory = "history";

const ul = document.querySelector('.answerOptions');
const nextQuestionbtn = document.querySelector('.nextQuestionbtn');

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});


const getRandomQuestions = () => {
    const categoryQuestions =  questions.find(cat => cat.category === quizCategory).questions;
    const randomQuestion = categoryQuestions[Math.trunc(Math.random() * categoryQuestions.length)]
    console.log(randomQuestion);
    return randomQuestion;

}

const displayQuestion = () => {
    currentQuestion = getRandomQuestions();
    const questionText = document.querySelector('.questionText');
    if(!currentQuestion) return;
    questionText.textContent = currentQuestion.question;

    ul.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answerOption");
        ul.appendChild(li);
        li.textContent = option;
        li.addEventListener('click', () => handleAnswer(li, index));
})
}

function handleAnswer(option, AnswerIndex){
    const isCorrect = AnswerIndex === currentQuestion.correctAnswer;
    !isCorrect ? highlightCorrectAnswer() : "";
    option.classList.add( isCorrect ? 'correct' : 'wrong');
    document.querySelectorAll('.answerOption').forEach(ansOpt => {
        ansOpt.style.pointerEvents = 'none';
    })
    
    
}

function highlightCorrectAnswer() {
    const correctOption = document.querySelectorAll('.answerOption').forEach((ansOpt, index) => {
        if()
    })
}


nextQuestionbtn.addEventListener('click', displayQuestion);