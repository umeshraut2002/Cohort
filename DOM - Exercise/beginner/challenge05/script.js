const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", ()=>{
    hoverText.innerText = "Mouse Hover";
});

hoverText.addEventListener("mouseout", ()=>{
    hoverText.innerText = "Hover over me!";
})