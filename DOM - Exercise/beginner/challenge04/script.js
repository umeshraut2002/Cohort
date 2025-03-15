const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const count = document.getElementById("count");
let c = 0;

increment.addEventListener("click", () => {
    count.innerText = c++;
});

decrement.addEventListener("click", ()=>{
    count.innerText = c--;
});