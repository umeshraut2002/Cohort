// Elements select karna
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

// "Add" button click event
addButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  // Agar "No tasks yet" wala message hai, toh use hatao
  let emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Naya <li> create karo
  let li = document.createElement("li");
  li.textContent = taskText;

  // Delete button create karo
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete-btn");

  // Delete button ka click event
  deleteButton.addEventListener("click", function () {
    li.remove(); // Task remove
    updateTaskCount(); // Count update
    checkEmptyList(); // Agar list empty ho gayi, toh message wapas lao
  });

  // <li> ke andar delete button add karo
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Input field clear karo
  taskInput.value = "";

  // Task count update karo
  updateTaskCount();
});

// ✅ Function: Task count update karne ke liye
function updateTaskCount() {
  let count = taskList.getElementsByTagName("li").length;
  totalTasks.textContent = `Total tasks: ${count}`;
}

// ✅ Function: Agar list empty ho gayi toh "No tasks yet" dikhana
function checkEmptyList() {
  if (taskList.children.length === 0) {
    let emptyMessage = document.createElement("li");
    emptyMessage.textContent = "No tasks yet. Add one above!";
    emptyMessage.classList.add("empty-list");
    taskList.appendChild(emptyMessage);
    totalTasks.textContent = `Total tasks: 0`;
  }
}
