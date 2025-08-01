
const input = document.getElementById("myinput");
const ctf = document.getElementById("ctf");
const ctk = document.getElementById("ctk");
const ftc = document.getElementById("ftc");
const ftk = document.getElementById("ftk");
const ktc = document.getElementById("ktc");
const ktf = document.getElementById("ktf");
const mysubmit = document.getElementById("mysubmit");
const p = document.getElementById("myp");
let temp;

input.addEventListener("input", () => {
    const value = Number(input.value);

    if (value < 0) {
        ktc.disabled = true;
        ktf.disabled = true;

        if (ktc.checked) ktc.checked = false;
        if (ktf.checked) ktf.checked = false;
    } else {
        ktc.disabled = false;
        ktf.disabled = false;
    }
});

function convert(){
    temp = Number(input.value);
    
    if(ctf.checked){
        temp = (temp * 9/5) + 32;
        p.textContent = ` ${temp.toFixed(1)} °F`;
    }

    else if(ctk.checked){
        temp = temp + 273.15;
        p.textContent = ` ${temp.toFixed(1)} °K`; 
    }

    else if(ftc.checked){
        temp = (temp - 30) / 2;
        p.textContent = ` ${temp.toFixed(1)} °C`; 
    }
     
    else if(ftk.checked){
        temp = ((temp - 30) / 2) + 273.15;
        p.textContent = ` ${temp.toFixed(1)} °K`; 
    }

    else if(ktc.checked){
        temp = temp - 273.15;
        p.textContent = ` ${temp.toFixed(1)} °C`; 
    }
    else if(ktf.checked){
        temp = (temp - 273.15) * 9/5 + 32;
        p.textContent = ` ${temp.toFixed(1)} °F`; 
    }
    else {
        p.textContent = "Choose a conversion method."
    }
}