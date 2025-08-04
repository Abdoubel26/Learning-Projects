console.log("it's working!")


const incbtn = document.getElementById("incbtn");
const rstbtn = document.getElementById("rstbtn");
const dicbtn = document.getElementById("dicbtn");
let count = 0;


incbtn.onclick = function(){
    count++;
    document.getElementById("countlabel").textContent = count;

}

dicbtn.onclick = function(){
    count--;
    document.getElementById("countlabel").textContent = count;

}

rstbtn.onclick = function(){
    count = 0;
    document.getElementById("countlabel").textContent = count;

}
