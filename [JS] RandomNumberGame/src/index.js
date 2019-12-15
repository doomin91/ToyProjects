// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const h3 = document.querySelector("h3");
const range = document.querySelector(".js-range");
const text = document.querySelector(".js-text");
const btn = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
let rangeValue = range.value;

function getRandom() {
  const number = Math.floor(Math.random() * range.value);
  return number;
}

function handleChange() {
  rangeValue = range.value;
  //h3.innerHTML = `Generate a number between 0 and ${rangeValue}`;
}

function handleBtn() {
  let textValue = text.value;
  if (textValue !== "") {
    let randomValue = getRandom();
    result.innerHTML = `You chose: ${textValue} machine chose: ${randomValue}`;
    if (parseInt(textValue) === randomValue) {
      result.innerHTML += `<br> You win`;
    } else {
      result.innerHTML += `<br> You lost`;
    }
  } else {
    result.innerHTML = "Hey kid. give me number...";
  }
}

function init() {
  range.addEventListener("change", handleChange);
  btn.addEventListener("click", handleBtn);
}

init();
