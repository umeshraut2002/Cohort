Array.prototype.myMap = function(callbak){
    let result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callbak(this[i], i, this));
    }
    return result;
}

const arr = [1, 2, [3, 4], [5, [6, 7], 8], 9];

const res = arr.myMap().flat(Infinity);

console.log(res);