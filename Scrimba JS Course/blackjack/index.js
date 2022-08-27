let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el"),
  // sumEl = document.getElementById("sum-el");
  sumEl = document.querySelector("#sum-el"),
  cardsEl = document.querySelector("#cards-el"),
  playerEl = document.querySelector("#player-el");

let player = {
  name: "Alvin",
  chips: 145,
};
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard(),
    secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 11) return 11;
  else if (card > 10) return 10;
  return card;
}

function renderGame() {
  if (sum <= 20) message = "Do you want to draw a new card?";
  else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
