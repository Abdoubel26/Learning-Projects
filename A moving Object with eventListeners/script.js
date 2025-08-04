 const message = document.getElementById("message");
const container = document.getElementById("container");

let y = 0;
let x = 0;
let moveAmount = 10;



document.addEventListener("keydown", event => {

    event.preventDefault(); 

    if(event.key.startsWith("Arrow")){
            switch(event.key){
                case "ArrowUp":
                    y -= moveAmount;
                    break;
                case "ArrowDown":
                    y += moveAmount;
                    break;
                case "ArrowLeft":
                    x -= moveAmount;
                    break;
                case "ArrowRight":
                    x += moveAmount;
                    break;
            }
            container.style.top = `${y}px`;
            container.style.left = `${x}px`;
        }
    
});


