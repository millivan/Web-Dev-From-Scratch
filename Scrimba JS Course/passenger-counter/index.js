let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  count++;
  countEl.innerText = count;
}
function save() {
  let saveLog = (count += " - ");
  saveEl.textContent += saveLog;
  count = 0;
  countEl.textContent = count;
}
