let firstName = "Alvin";
let lastName = "Lim";
let fullName = firstName + " " + lastName;

console.log(fullName);

let greeting = "Hi there";
function greetUser() {
  console.log(greeting + ", " + fullName + "!");
}
greetUser();

let myPoints = 3;
function add3Points() {
  myPoints += 3;
}
function remove1Point() {
  myPoints--;
}
add3Points();
remove1Point();
remove1Point();
add3Points();
add3Points();
console.log(myPoints);
