const result = document.getElementById("result");

let choices = ['rock', 'paper', 'scissors'];

let PST = document.getElementById("win-score");
let CST = document.getElementById("lose-score");


let Pscore = 0;
let Cscore = 0;


function playGame(playerchoice) {
    let value = choices[Math.floor(Math.random() * 3)];
    console.log(value);

    switch(playerchoice + value){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result.textContent = "You Win! 🎉"
            PST.textContent = Pscore++;
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            result.textContent = "You Lose! 😔"
            CST.textContent = Cscore++;
            break;
        default:
            result.textContent = "It's a Tie!";
    }



}






 //   if(playerchoice === 'rock' && value === 'scissors') {
      /*  result.textContent = "You Win! 🎉"
        PST.textContent = Pscore++;
    }
    else if(playerchoice === 'rock' && value === 'paper'){
        result.textContent = "You Lose! 😔"
        CST.textContent = Cscore++;
    } 
    else if(playerchoice === 'paper' && value === 'rock'){
        result.textContent = "You Win! 🎉"
        PST.textContent = Pscore++;
    }
     else if(playerchoice === 'paper' && value === 'scissors'){
        result.textContent = "You Lose! 😔"
        CST.textContent = Cscore++;
    }
     else if(playerchoice === 'scissors' && value === 'rock'){
        result.textContent = "You Lose! 😔"
        CST.textContent = Cscore++;
    }
     else if(playerchoice === 'scissors' && value === 'paper'){
        result.textContent = "You Win! 🎉"
        PST.textContent = Pscore++;
    }
    else if(playerchoice === value){
        result.textContent = "It's a Tie!"
    } */
