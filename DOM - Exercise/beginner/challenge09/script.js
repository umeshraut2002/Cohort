const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

inputField.addEventListener("input", (e) => {
    output.innerText = e.target.value;
})