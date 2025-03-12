/**
 * Write your challenge solution here
 */

const colorButton = document.querySelector(".color-buttons"); // color button -- div 

colorButton.addEventListener("click", (event) => {
    let heading = document.getElementById("mainHeading");
    let clickButton = event.target;

    switch(clickButton.id){
        case "redButton":
            heading.style.color = "red";
            break;
        case "greenButton":
            heading.style.color = "green";
            break;
        case "blueButton":
            heading.style.color = "blue";
            break;
        case "purpleButton":
            heading.style.color = "purple";    
            break;
        case "resetButton":
            heading.style.color = "white";
            break;
        default:
            alert("Unknown Button Click");
        }
})

