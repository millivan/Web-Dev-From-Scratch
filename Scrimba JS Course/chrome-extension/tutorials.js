const recipient = "James";
const sender = "Alvin";
const email = `
Hey ${recipient}!
How is it going?
Cheers ${sender}`;
console.log(email);

// truthy falsy

console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 4));
console.log(add(9, 102));

function getFirst(arr) {
  return arr[0];
}
console.log(getFirst([false, "true", 0, true, null]));
