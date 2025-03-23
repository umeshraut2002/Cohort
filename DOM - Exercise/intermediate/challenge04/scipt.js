const myForm = document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    if(name === ""){
        alert("Please Enter A Name");
        isValid = false;
    } 
    // else{
    //     document.getElementById('name').value = "";
    // }
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(!emailPattern.test(email)){
        alert("Please write a valide Email!");
        isValid = false;
    } 
    // else{
    //     document.getElementById('email').value = "";
    // }

    if(isValid){
        e.target.submit();
    }

});