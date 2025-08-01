

const clock = document.getElementById("display");


function updateclock(){
    
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    if(hours < 12){
        sideText = "AM";
    } else {
        sideText = "PM";    
    }
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeText = `${hours}:${minutes}:${seconds} ${sideText}`;
    clock.textContent = timeText;
 
}






updateclock();
setInterval(updateclock, 1000);
