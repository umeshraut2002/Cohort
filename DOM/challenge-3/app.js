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

// function for real time name input
function realTimeNameInput(){
    nameDisplay.innerText = nameInput.value;
}

// function for real time job input 
function realTimeJobInput(){
    jobDisplay.innerText = jobInput.value;
}


// function for the real time age input 
function realTimeAgeInput(){
    ageDisplay.innerText = ageInput.value;
}

// function for the real time bio input 
function realTimeBioInput(){
    bioDisplay.innerText = bioInput.value;
}

// display real time name 
nameInput.addEventListener("input", realTimeNameInput);

// display real time job
jobInput.addEventListener("input", realTimeJobInput);

// display real time age 
ageInput.addEventListener("input", realTimeAgeInput);

// display real time bio 
bioInput.addEventListener("input",realTimeBioInput);
