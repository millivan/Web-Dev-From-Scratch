let Alvin = {
  name: "Alvin",
  age: 20,
  country: "Malaysia",
};
function logData() {
  return (
    Alvin.name + " is " + Alvin.age + " years old and lives in " + Alvin.country
  );
}
console.log(logData());

let age = 15;
if (age < 6) {
  console.log("free");
} else if (age <= 17) {
  console.log("child discount");
} else if (age <= 26) {
  console.log("student discount");
} else if (age <= 66) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("The 5 largest countries in the world: ");
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries2.shift();
largeCountries2.unshift("China");
largeCountries2.pop();
largeCountries2.push("Pakistan");
console.log(largeCountries2.toString());

let dayOfMonth = 13;
let weekday = "Friday";
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
}

let hands = ["rock", "paper", "scissors"];
function randomItem() {
  return hands[Math.floor(Math.random() * 3)];
}
console.log(randomItem());
