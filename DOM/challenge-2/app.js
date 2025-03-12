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
            document.querySelector("body").style.backgroundColor = "#FF6666";
            break;
        case "greenButton":
            heading.style.color = "green";
            document.querySelector("body").style.backgroundColor = "#66FF66";
            break;
        case "blueButton":
            heading.style.color = "blue";
            document.querySelector("body").style.backgroundColor = "#66CCFF";
            break;
        case "purpleButton":
            heading.style.color = "purple";    
            document.querySelector("body").style.backgroundColor = "#DAB6FF";
            break;
        case "resetButton":
            heading.style.color = "black";
            document.querySelector("body").style.backgroundColor = "white";
            break;
        default:
            alert("Unknown Button Click");
        }
})

