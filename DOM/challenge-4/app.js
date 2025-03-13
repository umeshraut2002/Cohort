/**
 * Write your challenge solution here
 */

// task input add 
// total task = 1
// after check box completed task = 1
// delete task then task input = 0 again 

const inputTask = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");

addButton.addEventListener("click", ()=> {
    let taskValue = inputTask.value;

    if(taskValue !== ""){
        let newList = document.createElement("li");
         newList.innerText = taskValue;
         taskList.appendChild(newList);
         taskValue.value = " ";
    }
    else{
        alert("NHai ab kuch soch!");
    }

    // alert("abe ueh chal rha hai kya ");
})
