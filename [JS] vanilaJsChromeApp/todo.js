const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const ToDos_LS = 'toDos'
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(ToDos_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(ToDos_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        // parsedToDos가 가지고 있는 값마다 함수를 실행시켜 준다.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}


init();

