const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElemeentById("toggleText");


toggleBtn.addEventListener("click", () =>{
    toggleText.style.displplay = toggleText.style.display === "none" ? "block" : "block";
});