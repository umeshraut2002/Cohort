const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () =>{
    let inputValue = input.value;

    if(input.value !== ""){
    let newList = document.createElement("li");

    newList.innerText = inputValue;

    todoList.appendChild(newList);

    input.value = "";
    }
})