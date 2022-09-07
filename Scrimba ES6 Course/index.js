import { add } from "./data.js";
import fetch from "node-fetch";
const student = {
  name: "Kyle",
  age: 24,
  projects: {
    diceGame: "Two player dice game using JavaScript",
  },
};

const {
  name,
  age,
  projects: { diceGame },
} = student;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
// console.log(`Projects: ${projects}`);
console.log(`Dice Game: ${diceGame}`);

function addressMaker(address) {
  const { city, state, country = "United States" } = address;
  const newAddress = `
  City: ${city}
  State: ${state}
  Country: ${country}
  `;
  return newAddress;
}
console.log(addressMaker({ city: "Austin", state: "Texas" }));

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];
for (const student of students) {
  const { name, city } = student;
  console.log(`${name} lives in ${city}`);
}

const shoppingList = ["eggs", "milk", "butter"];
let shoppingBasket = [...shoppingList, "bread", "chicken", "cheese"];
console.log(shoppingBasket);
console.log(JSON.stringify(shoppingBasket));
shoppingBasket.forEach((item) => {
  console.log(`Item: ${item}`);
});

const shopping = (item = "something") =>
  console.log(`I'm going to buy ${item} from the grocery shop`);
shopping("milk");
shopping();

const listIngredients = ["flour", "sugar", "eggs", "butter", "chocolate"];
if (listIngredients.includes("chocolate"))
  console.log("We are going to make a chocolate cake");
else
  console.log(
    "We can't make a chocolate cake because we are missing the ingredient chocolate"
  );

const value = add(3, 46, 893, 2, 21, 42, 19, 213);
console.log(value);

class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  info = () => {
    return `${this.name} was born in ${this.country}`;
  };
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  info = () => {
    return `${this.name} is ${this.age} years old and knows how to play Tennis`;
  };
}

let player1 = new Player("Messi", "Argentina");
let player2 = new Player("CR7", "Portugal");
console.log(player1.info());
console.log(player2.info());
let tennisPlayer1 = new TennisPlayer("Rafael Nadal", "Spain", 34);
console.log(tennisPlayer1.info());

const user = {
  name: "Alvin",
  age: 20,
  location: "Kuala Lumpur",
  single: true,
};
const returnUserData = () => {
  return new Promise((resolve, reject) => {
    let found = false;
    if (found) resolve(user);
    else reject("Could not find user");
  });
};
returnUserData()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
// fetchData();

const postData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments/", {
    method: "POST",
    body: JSON.stringify({
      postId: 1,
      name: "Hi",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
// postData();

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
getData();

const postComment = () => {
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
      postId: 1,
      name: "Lim",
      age: 20,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
postComment();

const apiUrl = "https://api.chucknorris.io/jokes/random";
const fetchJoke = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data.value);
};
fetchJoke();
