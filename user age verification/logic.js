 
const myinput = document.getElementById("myinput");
const mysubmit = document.getElementById("mysubmit");
const myP = document.getElementById("myP");
let age;

mysubmit.onclick = function(){
    age = myinput.value;
    age = Number(age);
    if(age >= 101){
        myP.textContent = 'you are too old grandpa!'
    }
    else if(age == 15) {
        myP.textContent = "Wow your age is 15 and my age is 15 too!";
    }
    else if(age >= 18){
         myP.textContent = "you little big boy!";
    }
    else if(age == 0){
         myP.textContent = "you were just born, i mean, it is impossible to be using this site while being 0, no one is actually 0, in mathmatics zero represents non-existence. Now enter your real age please?";
    }
    else if(age < 0){
        myP.textContent = "nAh, tHis is nOt yoUR AgE"
    }
    else{
        myP.textContent = "you are NOT allowed to enter this site. (secret: you can enter the site if you enter your age incorrectly above 18 haahah)"
    }
}