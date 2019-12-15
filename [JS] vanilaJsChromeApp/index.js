const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    title.style.color  "red";
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick)
}
init();
