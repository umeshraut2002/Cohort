const openBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const toggleMode = document.getElementById("toggleMode");
const modalBox = document.getElementsByClassName(".modal-box");

openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

toggleMode.addEventListener('click', () => {
    if(modalOverlay.style.backgroundColor === 'black'){
        modalOverlay.style.backgroundColor = 'white';
        modalOverlay.style.color = 'black';
        closeModal.style.color = 'black'
    }else{
        modalOverlay.style.backgroundColor = 'black';
        modalOverlay.style.color = 'white';
        closeModal.style.color = 'white';
    }
})

window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
