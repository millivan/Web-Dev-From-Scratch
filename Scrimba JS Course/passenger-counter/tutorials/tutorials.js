let firstBatch = 5;
let secondBatch = 7;
let total = firstBatch + secondBatch;

let count = 5;
count = 3;
count++;
count += 5;
console.log(count);

let myAge = 20;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log("myAge: " + myAge);
console.log("myDogAge: " + myDogAge);

let bonusPoints = 50;
console.log(bonusPoints);
bonusPoints += 100 - bonusPoints;
console.log(bonusPoints);
bonusPoints -= bonusPoints - 25;
console.log(bonusPoints);
bonusPoints += 70 - bonusPoints;
console.log(bonusPoints);
console.log("\n");

function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}
countdown();
countdown();

function print42() {
  console.log(42);
}

console.log("\n");

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function totalLapTime() {
  console.log("Total lap time: " + (lap1 + lap2 + lap3));
}
totalLapTime();
console.log("\n");

let lapsCompleted = 0;
function incrementLap() {
  lapsCompleted++;
}
incrementLap();
incrementLap();
incrementLap();

console.log("Laps Completed: " + lapsCompleted);

let username = "per";
let message = "You have tree new notifications";
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

let name = "Alvin";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;
console.log(myGreeting);
