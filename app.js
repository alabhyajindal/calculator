"use strict";

// Numbers
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

// Operators
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

// Actions
const clear = document.querySelector(".all-clear");
const del = document.querySelector(".delete");
const equals = document.querySelector(".equals");

// Calculator's Screen
const display = document.querySelector(".entry");

// Nodelist of all the digits on the app
const numbers = document.querySelectorAll(".num");
let entryValue = [];
numbers.forEach((e) =>
  e.addEventListener("click", () => {
    if (display.value == "0" || display.value == "") {
      entryValue.push(e.innerHTML);
      display.value = entryValue.join("");
    } else {
      entryValue.push(e.innerHTML);
      display.value = entryValue.join("");
    }
  })
);

// Defining global variables for calculation
let firstNum;
let operator;
let secondNum;

// Listening for the click event on operation buttons
add.addEventListener("click", () => {
  firstNum = parseInt(display.value);
  operator = "add";
  entryValue = [];
  display.value = entryValue.join("");
});

subtract.addEventListener("click", () => {
  firstNum = parseInt(display.value);
  operator = "minus";
  entryValue = [];
  display.value = entryValue.join("");
});

multiply.addEventListener("click", () => {
  firstNum = parseInt(display.value);
  operator = "multiply";
  entryValue = [];
  display.value = entryValue.join("");
});

divide.addEventListener("click", () => {
  firstNum = parseInt(display.value);
  operator = "divide";
  entryValue = [];
  display.value = entryValue.join("");
});

// Defining the operator functions
const addition = function (a, b) {
  return a + b;
};

const subtraction = function (a, b) {
  return a - b;
};

const multiplication = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

// Calling the operator functions based on the sign clicked
equals.addEventListener("click", () => {
  secondNum = parseInt(display.value);
  // display.value = firstNum + secondNum;
  if (operator == "add") {
    display.value = addition(firstNum, secondNum);
  } else if (operator == "minus") {
    display.value = subtraction(firstNum, secondNum);
  } else if (operator == "multiply") {
    display.value = multiplication(firstNum, secondNum);
  } else if (operator == "divide") {
    display.value = division(firstNum, secondNum);
  }
});

const validEntry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const enterValue = function (e) {
  if (e.key in validEntry) {
    // const currentKey = numbers.forEach((e) => e.innerHTML == e.key);
    // console.log(currentKey);
    for (let i = 0; i < 10; i++) {
      if (numbers[i].textContent == e.key) {
        numbers[i].click();
      }
    }
  } else if (e.key == "Backspace") {
    entryValue.pop();
    display.value = entryValue.join("");
  }
};

window.addEventListener("keydown", enterValue);
clear.addEventListener("click", () => {
  entryValue = [];
  display.value = entryValue.join("");
});
