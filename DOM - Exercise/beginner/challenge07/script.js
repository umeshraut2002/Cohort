const addButton = document.getElementById("addItem");
const ul = document.getElementById("list");

addButton.addEventListener("click", () =>{
    let newList = document.createElement("li");
    let count = 0;

    ul.appendChild(newList);

    newList.innerText = `item: ${++count}`;
});