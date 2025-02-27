// count hoe many chocolate boxes are left 


function chocolateBoxes(totalBars, barsPerBox){
    let countOfBoxes = 0;
    for(let i = 0; i < barsPerBox; i++){
        countOfBoxes = totalBars / barsPerBox;
    }
    return countOfBoxes;
}

console.log(Math.round(chocolateBoxes(17,5)));