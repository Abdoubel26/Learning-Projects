const keyboard = document.querySelector(".keyboard");
const wordisplay = document.querySelector(".ul");
let currentWord;
let worngguesses = 0;
let progress = [];

import { wordList } from "./word-list.js";

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.classList.add("key");
    keyboard.appendChild(button)
    button.textContent = String.fromCharCode(i)

    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

function getRandomWord() {
    const { word, hint } = wordList[Math.trunc(Math.random() * wordList.length)];
    currentWord = word;

    document.querySelector(".hint b").textContent = hint;
    wordisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}   

function initGame(button, clickedcharacter) {
    const wordchars = [...currentWord];
    
    if(currentWord.includes(clickedcharacter)){

        wordchars.forEach((letter, index) => {
            if(letter === clickedcharacter){
                wordisplay.querySelectorAll('li')[index].innerText = letter; 
                wordisplay.querySelectorAll('li')[index].classList.add("guessed"); 
                button.classList.add('clicked');
                progress.push(letter);
               if(String(progress.sort()) === String([...currentWord].sort())){
                document.getElementById('GMW').classList.remove('hidden');
                document.getElementById('CWord').textContent = currentWord;  
            }  
            } 
        
        }); 

        button.classList.add('clicked');

    }    
    else {
        button.classList.add('clicked');
        worngguesses++;
        document.querySelector('.incorrectGuesses b').textContent = worngguesses;
        document.querySelector('.Hangmandiv img').setAttribute('src', `images/hangman-${worngguesses}.svg`);
    }
    
    if(worngguesses >= 6) {
        document.getElementById('GML').classList.remove('hidden');
        document.querySelector('.CW').textContent = currentWord;
    }

}


function resetGame(){
    document.getElementById('GMW').classList.add('hidden');
    document.getElementById('GML').classList.add('hidden');
    document.querySelectorAll('.key').forEach((element) => {
        element.classList.remove('clicked');
    })
    progress = [];
    worngguesses = 0;
    currentWord = "";
    getRandomWord();
    console.log("it's working!")
    document.querySelector('.Hangmandiv img').setAttribute('src', `images/hangman-${worngguesses}.svg`);
    document.querySelector('.incorrectGuesses b').textContent = 0;


}

document.getElementById('btn1').addEventListener('click', resetGame)
document.getElementById('btn2').addEventListener('click', resetGame)
getRandomWord();

 