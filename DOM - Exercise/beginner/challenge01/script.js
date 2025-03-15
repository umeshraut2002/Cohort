document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  body.appendChild(div);
  h1.innerText = "hello world";
  div.appendChild(h1);
});
