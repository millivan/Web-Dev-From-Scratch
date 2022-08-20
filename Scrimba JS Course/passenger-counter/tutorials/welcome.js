let welcomeEl = document.getElementById("welcome-el");
let name = "Alvin";
let greeting = "Welcome back ";

function renderWelcome() {
  welcomeEl.innerText = greeting + name;
  welcomeEl.innerText += " 🤯";
  console.log(welcomeEl.innerText);
}
renderWelcome();
