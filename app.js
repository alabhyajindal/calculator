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
