 const text = document.getElementById("display");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");

let timer;
let startTime;
elapsedTime = 0;
startTime = 0;
let isRunning = false;
stopBtn.disabled = true;

function start(){
 if(!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
}
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    text.textContent = "00:00:00:00"
}

function updateDisplay() {
    const CT = Date.now();
    elapsedTime = CT - startTime;

    const hours = String(Math.trunc(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.trunc((elapsedTime / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.trunc((elapsedTime / 1000) % 60)).padStart(2, '0');
    const milliseconds = String(Math.trunc((elapsedTime % 1000) / 10)).padStart(2, '0');

    
    text.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}