function calculateWaterAmount(waterAmount){
    let sum = 0;
    for(let i = 0; i < waterAmount.length; i++){
        sum += waterAmount[i];
    }
    return sum;
}

const wa = [1,2,3,4];

console.log(calculateWaterAmount(wa))