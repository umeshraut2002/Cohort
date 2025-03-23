const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const close = document.getElementById('close-btn');


openBtn.addEventListener("click", () => {
    modalContainer.style.display = 'block';
});

close.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
})