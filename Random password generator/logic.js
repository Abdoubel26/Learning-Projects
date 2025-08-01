
const lengthinput = document.getElementById("lengthinput");
const includelowercase = document.getElementById("includelowercase");
const includeuppercase = document.getElementById("includeuppercase");
const includenumbers = document.getElementById("includenumbers");
const includesymbols = document.getElementById("includesymbols");
const generatebtn = document.getElementById("generatebtn");
const resultp = document.getElementById("resultp");


const lowercasech = "azertyuiopqsdfghjklmwxcvbn";     
const uppercasech = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const nums = "1234567890";
const syms = `&é"'(-è_çà)=~#{[|\^@]}^^¨¨£$¤*µù%!§:/.;,?`;

let allowedchars = "";
let password = "";


generatebtn.addEventListener("click", () => {
    document.getElementById("sound").play()
    generatePW();
}
);

function generatePW(){
        if(includelowercase.checked) {
        incLC = true;
    }
    else {
        incLC = false;
    }

    if(includeuppercase.checked) {
        incUC = true;
    }
    else {
        incUC = false;
    }

    if(includenumbers.checked) {
        incNs = true;
    }
    else {
        incNs = false;
    }

    if(includesymbols.checked) {
        incS = true;
    }
    else {
        incS = false;
    }

    
    allowedchars += incLC ? lowercasech : "";
    allowedchars += incUC ? uppercasech : "";
    allowedchars += incNs ? nums : "";
    allowedchars += incS ? syms : "";

    console.log(incNs)
    if(!incLC && !incUC && !incNs && !incS ){
        resultp.textContent = "You have to choose at least one set of characters";
    }
    else {
        for(i = 0; i < lengthinput.value; i++){
            const ranindex = Math.floor(Math.random() * allowedchars.length);
            password += allowedchars[ranindex];
        }
        resultp.textContent = password;
        resultp.style.animation = "none";
        resultp.offsetHeight; 
        resultp.style.animation = null;
        password = "";
        allowedchars = "";
    }

}