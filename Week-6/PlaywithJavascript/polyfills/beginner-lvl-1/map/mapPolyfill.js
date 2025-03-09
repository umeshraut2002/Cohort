// Polyfill for map()

// map - callbak le ta hai 
// map ek new array return krta hai 

Array.prototype.myMap = function(callbak){
    let result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callbak(this[i], i, this));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myMap(x => x * 2))