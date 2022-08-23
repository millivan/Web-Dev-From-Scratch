let home = 0,
  away = 0,
  score = 0,
  homeScore = document.getElementById("home-score"),
  awayScore = document.getElementById("away-score"),
  awayButton = ["away-one", "away-two", "away-three"],
  homeButton = ["home-one", "home-two", "home-three"];

awayButton.forEach((a) => {
  document.getElementById(a).addEventListener("click", () => {
    away += score;
    awayScore.textContent = away;
    score = 0;
  });
});

homeButton.forEach((h) => {
  document.getElementById(h).addEventListener("click", () => {
    home += score;
    homeScore.textContent = home;
    score = 0;
  });
});

function addOne() {
  score++;
}
function addTwo() {
  score += 2;
}
function addThree() {
  score += 3;
}
