class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getFullDetails(){
        return `${this.fname} ${this.lname} ${this.age}`;
    }
}

const person1 = new Person('vihaan', 'Raut', 23);
const person2 = new Person('umesh', 'Raut', 23);

console.log(person1.getFullDetails);
console.log(person2.getFullDetails);