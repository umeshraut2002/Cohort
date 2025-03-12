/**
 * Write your challenge solution here
 */

const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleButton");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
    if(bulb.classList.contains("off")){
        bulb.classList.remove("off");
        bulb.classList.add("ON");
        button.innerText = "Turn Off";
        statusText.innerText = "Status: ON";
    }
    else{
        bulb.classList.remove("ON");
        bulb.classList.add("off");
        button.innerText = "Turn On";
        statusText.innerText = "Status: Off";
    }
})