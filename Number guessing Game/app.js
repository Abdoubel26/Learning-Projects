const myinput = document.getElementById("myinput");
const mysubmit = document.getElementById("mysubmit");
const myp = document.getElementById("myp");
max = 1000;
min = 1;
console.log("fff")
const ranum = Number(Math.floor(Math.random() * max + min));

let attempts = 0;
let guess;

let running = true;

mysubmit.addEventListener("click", () => {

    guess =  Number(myinput.value);

    if(isNaN(guess)){
        myp.textContent = "Please enter a valid number"
    } else if(guess < 1 || guess > 1000){
        myp.textContent = "Please enter a number between 1000 - 1";
    } else {
        if(guess < ranum){
        myp.textContent = "Too low, try again.";
        attempts++;
        }
        else if(guess > ranum){
        myp.textContent = "Too high, try again.";
        attempts++;
        }
        else{
        myp.textContent = `correct! the answer was ${ranum}, it took you ${attempts} attemps`;
        running = false;
        }
       
    }

});