const keyBox = document.getElementById("key-box");
const keyResult = document.getElementById("key-result");

document.addEventListener('keydown', (e) => {
    keyResult.innerText = `Use press Key: ${e.key}`;
})