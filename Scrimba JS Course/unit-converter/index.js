const lengthUnits = ["meter", "feet"];
const volumeUnits = ["liter", "gallon"];
const massUnits = ["kilogram", "pound"];

const render = (value) => {
  lengthConversion.textContent = `${value} ${lengthUnits[0]} = ${(
    value * 3.281
  ).toFixed(3)} ${lengthUnits[1]} |  ${value} ${lengthUnits[1]} = ${(
    value / 3.281
  ).toFixed(3)} ${lengthUnits[0]}`;
  volumeConversion.textContent = `${value} ${volumeUnits[0]} = ${(
    value * 0.264
  ).toFixed(3)} ${lengthUnits[1]} |  ${value} ${volumeUnits[1]} = ${(
    value / 0.264
  ).toFixed(3)} ${volumeUnits[0]}`;
  massConversion.textContent = `${value} ${massUnits[0]} = ${(
    value * 2.204
  ).toFixed(3)} ${massUnits[1]} |  ${value} ${massUnits[1]} = ${(
    value / 2.204
  ).toFixed(3)} ${massUnits[0]}`;
};

const numberInput = document.getElementById("number-input");
const convertButton = document.getElementById("convert");
const lengthTitle = document.getElementById("length-title");
const volumeTitle = document.getElementById("volume-title");
const massTitle = document.getElementById("mass-title");

let lengthConversion = document.getElementById("length-conversion");
let volumeConversion = document.getElementById("volume-conversion");
let massConversion = document.getElementById("mass-conversion");
let value = 0;

render(value);

convertButton.addEventListener("click", () => {
  value = numberInput.value;
  render(value);
});
