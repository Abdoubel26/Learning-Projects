console.log('hey!'); 

const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const min = 1;
const max = 6;
let ranum1;
let ranum2;

mybutton.onclick = function(){
    ranum1 = Math.floor((Math.random() * max) + min);
    label1.textContent = ranum1;
    ranum2 = Math.floor((Math.random() * max) + min);
    label2.textContent = ranum2;
}

