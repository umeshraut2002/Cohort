// Elements select karna
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

addButton.addEventListener("click", (e) => {

    let taskText = taskInput.value.trim();

    if(taskText !== ""){
      let li = document.createElement("li");
      li.innerText = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
      totalTask();
  }
})

function totalTask(){
  let count = 0;
  totalTasks.innerText = `Total Tasks: ${count++}`;
}

function taskComleted(){

}

