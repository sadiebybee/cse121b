/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};

function addNumbers(addNumber1, addNumber2) {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
// subtraction
const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    let minuend = parseInt(document.querySelector("#minuend").value);
    let subtrahend = parseInt(document.querySelector("#subtrahend").value);
    let result = subtract(minuend, subtrahend);
    document.querySelector("#difference").value = result;
};

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
const subtotal = document.getElementById('subtotal');
const member = document.getElementById("member");
const getTotal = document.getElementById("getTotal");
const total = document.getElementById("total");

getTotal.addEventListener('click', calculateTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").textContent = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbers.filter(
    (number) => number % 2
);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbers
.map((number) => number * 2)
.reduce((sum, number) => sum + number, 0);