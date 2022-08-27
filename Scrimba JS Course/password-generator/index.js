const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * @type HTMLInputElement
 */
let lengthInput = document.getElementById("number-input");

let length = 15,
  hasSymbols = false,
  hasNumbers = false;
let pw1 = document.querySelector("#password-recommendations1");
let pw2 = document.querySelector("#password-recommendations2");

console.log(length);
console.log(hasSymbols);
console.log(hasNumbers);

function storeLength() {
  length = lengthInput.value;
}
function toggleHasSymbols() {
  hasSymbols = !hasSymbols;
  console.log(hasSymbols);
  return hasSymbols;
}
function toggleHasNumbers() {
  hasNumbers = !hasNumbers;
  console.log(hasNumbers);
  return hasNumbers;
}

function generatePassword() {
  let password = "";
  for (let i = 0; i < length; i++) {
    let charType = Math.floor(Math.random() * 3);
    if (charType === 1 && hasSymbols) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    } else if (charType === 2 && hasNumbers) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
  }
  return password;
}

function renderPasswords() {
  pw1.textContent = generatePassword();
  pw2.textContent = generatePassword();
}

function copyPassword1() {
  navigator.clipboard.writeText(pw1.textContent);
  alert("Copied password: " + pw1.textContent);
}
function copyPassword2() {
  navigator.clipboard.writeText(pw2.textContent);
  alert("Copied password: " + pw2.textContent);
}
