//make out calculator variables [these are global variables]
let firstNumber = "";
let secondNumber = "";
let operation = ""; // relates to + - * / 

//function for the numbers being pressed
function pressNumber(num) {
    if (operation === "") {

        if(num === "." && firstNumber.includes(".")) {
            return;
        }

        firstNumber += num;
        //document.getElementById("calcDisplay").innerHTML = firstNumber;
    }
    else {
        if(num === "." && secondNumber.includes(".")) {
            return;
        }
        secondNumber += num;
        //document.getElementById("calcDisplay").innerHTML = secondNumber;
    }
        updateDisplay();
    //console.log("First # = ", firstNumber, "second # = ", secondNumber);

}

//function for clicking the operation
function setOperation(op){
    operation = op;
    updateDisplay();
    console.log("Operation set to: " + operation);
    
}

//function when clicking the equals sign  [need to add to this one] 
function calculateResult() {
    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);


    //make sure to end with an else 
    if(operation === "+"){
        result = num1 + num2;
    } 
    else if(operation === "-")
    {
        result = num1 - num2;
    }
    else if (operation === "*")
    {
        result = num1 * num2;
    }
    else
    {
        result = num1 / num2;
    }

    document.getElementById("calcDisplay").innerHTML = result;
    console.log("result: ", result);

    //This resets the numbers and allows the user to work with different choices
    firstNumber = "";
    secondNumber = "";
    operation = "";

}

//function when clicking clear
function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operation = "";

    document.getElementById("calcDisplay").innerHTML = "0";

    console.log("calc cleared");

}

//function for updating the display with the operator and second number 
function updateDisplay() {
    let originalDisplay = firstNumber;

    if(operation !== ""){
        originalDisplay += operation;
    }
    if (secondNumber !== ""){
        originalDisplay += secondNumber;
    }

    document.getElementById("calcDisplay").innerHTML = originalDisplay;

}