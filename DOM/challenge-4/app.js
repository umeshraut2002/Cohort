// Elements select karna
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTask = document.getElementById("completedTasks");


let count = 0;
let completedCount = 0;

addButton.addEventListener("click", (e) => {

    let taskText = taskInput.value.trim();

    if(taskText !== ""){
      let li = document.createElement("li");
      li.innerText = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
      count++;
      updateTotalTask();
      deleteButton(li);
  }
})

function updateTotalTask(){
  totalTasks.innerText = `Total Tasks: ${count}`;
}

function updateCompletedTasks(){
  completedTask.innerText = `Completed Task: ${++completedCount}`;
}


function deleteButton(li){
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.innerText = "Delete";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
    count--;
    updateCompletedTasks();
    updateTotalTask();
  })
}