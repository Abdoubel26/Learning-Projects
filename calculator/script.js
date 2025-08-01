 const display = document.getElementById("display");
 const keys = document.getElementById("keys");

 function appendToDisplay(value) {
     display.textContent += value;
 }


 function clearDisplay() {
    display.textContent = "";
 }

 function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error!";
    }
}

 function deleteLastCharacter() {
    if (display.textContent === "Error!") {
        display.textContent = "";
    }
    else if (display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
 }


