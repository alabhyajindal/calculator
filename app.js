// Selecting calculator's elements
const entry = document.querySelector('.entry');
const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const allClear = document.querySelector('.all-clear');

// Declaring the first number entered as a global variable so it can be used across functions
let firstNumber;

const foo = function () {
  console.log(event.target.value);
};

window.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) && entry.value == '') {
    entry.value = e.key;
  } else if (!isNaN(e.key) && entry.value != '') {
    entry.value += e.key;
  }
});

add.addEventListener('click', () => {
  firstNumber = parseInt(entry.value);
  entry.value = '';
});

equals.addEventListener('click', () => {
  let result = firstNumber + parseInt(entry.value);
  entry.value = result;
});

allClear.addEventListener('click', () => {
  entry.value = '';
});
