let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    storeLeads();
    render(myLeads);
  }
});
inputBtn.addEventListener("click", () => {
  storeLeads();
  render(myLeads);
});
delBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
tabBtn.addEventListener("click", async function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(items) {
  let listItems = "";
  for (let i = 0; i < items.length; i++) {
    listItems += `<li><a href="${items[i]}" target=_blank>${items[i]}</a></li>`;
    // listItems +=
    //   "<li><a href='" +
    //   myLeads[i] +
    //   "' target=_blank>" +
    //   myLeads[i] +
    //   "</a></li>";

    // or

    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  console.log(listItems);
  ulEl.innerHTML = listItems;
}

function storeLeads() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
}
