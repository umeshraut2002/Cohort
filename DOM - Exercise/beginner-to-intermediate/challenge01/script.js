const toggleBtn = document.getElementById('toggleBtn');
const body = document.querySelector('body');
const container = document.querySelector('container');

toggleBtn.addEventListener('click', () => {
    if(body.style.backgroundColor === 'white'){
        body.style.backgroundColor = 'black';
    }
    else{
        body.style.backgroundColor = 'white';
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
    }
})