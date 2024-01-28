/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
function addNumbers(addNumber1, addNumber2) {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// subtraction
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let minuend = parseInt(document.querySelector("#minuend").value);
    let subtrahend = parseInt(document.querySelector("#subtrahend").value);
    let result = subtract(minuend, subtrahend);
    document.querySelector("#difference").value = result;
}

document
.querySelector("#subtractNumbers")
.addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    let result = multiply(factor1, factor2);
    document.querySelector("#product").value = result;
};

document
.querySelector("#multiplyNumbers")
.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
  
function divideNumbers() {
    let dividend = parseInt(document.querySelector("#dividend").value);
    let divisor = parseInt(document.querySelector("#divisor").value);
    let result = divide(dividend, divisor);
    document.querySelector("#quotient").value = result;
}
  
document
.querySelector("#divideNumbers")
.addEventListener("click", divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
