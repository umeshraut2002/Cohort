const addButton = document.getElementById("addItem");
const ul = document.getElementById("list");
const removeButton = document.getElementById("removeItem");
const deleteFirst = document.getElementById("firstItemDlt");

let count = 0;

addButton.addEventListener("click", () =>{
    let newList = document.createElement("li");

    ul.appendChild(newList);

    newList.innerText = `item: ${++count}`;
});

removeButton.addEventListener("click", () => {
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
    }
});

deleteFirst.addEventListener("click",() =>{
    if(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})
