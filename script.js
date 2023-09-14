// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let firstName = "Sravanthi";
let lastName = "Nandalur";

let fullName = firstName + " " + lastName;

console.log(fullName);
// Create a function that logs out "Hi there, Linda!" when called

function greeting() {
  console.log("Hi there, " + firstName + "!");
}
greeting();
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let myPoints = 2;
function add3Points() {
  myPoints += 3;
  console.log("added 3 point: " + myPoints);
}
function remove1Point() {
  myPoints -= 1;
  console.log("removed 1 point: " + myPoints);
}

// Call the functions to that the line below logs out 10
add3Points();
add3Points();
add3Points();
remove1Point();

// Try to predict what each of the lines will log out
console.log("2" + 2); // 22
console.log(11 + 7); // 18
console.log(6 + "5"); // 65
console.log("My points: " + 5 + 9); // My points: 59
console.log(2 + 2); //  4
console.log("11" + "14"); // 1114

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorEl = document.getElementById("error");
function error1() {
  errorEl.textContent = "Something went wrong, please try again";
  console.log("error");
}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1El = 10;

document.getElementById("num1-el").textContent = num1El;
let num2El = 12;
document.getElementById("num2-el").textContent = num2El;
let sumEl = document.getElementById("sum-el");

function add() {
  sumEl.textContent = num1El + num2El;
}
function subtract() {
  sumEl.textContent = num1El - num2El;
}
function divide() {
  sumEl.textContent = num1El / num2El;
}
function multiply() {
  sumEl.textContent = num1El * num2El;
}
