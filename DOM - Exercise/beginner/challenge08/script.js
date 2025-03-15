const clone = document.getElementById("original");
const cloneBtn = document.getElementById("cloneBtn");
const container = document.getElementById("container");

cloneBtn.addEventListener("click", () => {
    clone.cloneNode(true);
    container.appendChild(clone);
})