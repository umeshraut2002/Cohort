/**
 * Write your challenge solution here
 */

const formContainer = document.querySelector("form-container");
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");


// for the display of live preview 
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

// for display in ral time to name
function realTimeNameInput(){
    nameDisplay.innerText = nameInput.value;
}

function realTimeJobInput(){
    jobDisplay.innerText = jobInput.value;
}

function realTimeAgeInput(){
    ageDisplay.innerText = ageInput.value;
}

function realTimeBioInput(){
    bioDisplay.innerText = bioInput.value;
}

nameInput.addEventListener("input", realTimeNameInput);

jobInput.addEventListener("input", realTimeJobInput);

ageInput.addEventListener("input", realTimeAgeInput);

bioInput.addEventListener("input",realTimeBioInput);
