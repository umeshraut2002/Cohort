const button = document.getElementById("changeBg");
const text = document.getElementById("text");

button.addEventListener("click", ()=>{
    text.style.backgroundColor = "black";
    text.style.color = "white";
})