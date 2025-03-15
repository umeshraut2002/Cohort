const slider = document.getElementById("slider");
const resizeText = document.getElementById("resizeText");

slider.addEventListener("input", (e) => {
    resizeText.style.fontSize = e.target.value + "px";
})