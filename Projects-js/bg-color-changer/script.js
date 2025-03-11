const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let body = document.querySelector("body");

    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    // body.style.color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
})