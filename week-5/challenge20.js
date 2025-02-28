function filterHealthy(foodList){
    return foodList.filter(item => item !== "B");
}

let foodList = ["A", "B", "C"];

console.log(filterHealthy(foodList))