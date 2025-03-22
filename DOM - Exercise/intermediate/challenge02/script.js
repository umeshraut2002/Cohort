const dragContainer = document.getElementById("drag-container");
const dragBox = document.getElementById("drag-box");

dragBox.style.backgroundColor = "yellow";

dragContainer.style.backgroundColor = "black";

let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;

function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    dragBox.style.top = (dragBox.offsetTop - newY) + 'px';
    dragBox.style.left = (dragBox.offsetLeft - newX) + 'px'; 
}

function mouseUp(){
    document.removeEventListener('mousemove', mouseMove);
}


dragBox.addEventListener('mousedown', mouseDown);