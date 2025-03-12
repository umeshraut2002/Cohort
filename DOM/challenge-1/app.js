/**
 * Write your challenge solution here
 */

const togleBtn = document.getElementById("toggleButton");
// let bulb = document.getElementByClassName("bulb off");

togleBtn.addEventListener("click", () => {
    let bulb = document.getElementByClassName("bulb off");
    bulb.style.backgroundColor = "yellow";
})