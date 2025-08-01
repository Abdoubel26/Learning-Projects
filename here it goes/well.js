

const checkbox = document.getElementById("mycheckbox");
const checklabel = document.getElementById("mychecklabel");
const visa = document.getElementById("visa");
const MC = document.getElementById("mastercard");
const PP = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");


mysubmit.onclick = function(){
    if(checkbox.checked){
     checklabel.textContent = "checked!";
     P1.textContent = "you did check it!";
     console.log('GG')
    }
    else {
        P1.textContent = "please check it,  Pleaaaaaaaaaaase!"
    }
    if(visa.checked){
        P2.textContent = "you are paying via a Visa card";
    }
    else if(MC.checked){
        window.alert("I love Pizza!")
        P2.textContent = "you are paying via a Mastercard"
    }
    else if(PP.checked){
        P2.textContent = "you are paying via Paypal! (i love paypal)"
    }
    else {
        P2.textContent = "you must select a payment method"
    }

}

