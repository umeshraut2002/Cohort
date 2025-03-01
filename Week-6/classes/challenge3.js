function Counter(){
    this.count = 0;

    this.increment = function(){
        return ++this.count;
    }

    this.decrement = function(){
        return --this.count;
    }
}

const counter1 = new Counter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());