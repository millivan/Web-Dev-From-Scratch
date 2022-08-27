let age = 22;
if (age < 21) console.log("You can not enter the club!");
else console.log("Welcome");

let age1 = 100;
if (age1 < 100) console.log("Not eligible");
else if (age1 === 100) console.log("Here is your birthday card from the King!");
else console.log("Not eligible, you have already gotten one");

let alvin = ["Alvin", 20, true];
for (let i = 0; i < alvin.length; i++) {
  console.log(alvin[i]);
}

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages);

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}

let player1Time = 102;
let player2Time = 107;

function totalRaceTime() {
  return player1Time + player2Time;
}
let totalTime = totalRaceTime();
console.log("Total time: " + totalTime);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());

let hasSolvedChallenge = false;
let hasHintsLeft = false;
if (!hasSolvedChallenge && !hasHintsLeft) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};
console.log(course["title"]);

let castle = {
  title: "Live like a King in my Castle",
  description: "Private room in Galway",
  price: 190,
  details: [4, 1, 2],
  hasBath: true,
};
console.log(castle.hasBath);
console.log(castle["description"]);
