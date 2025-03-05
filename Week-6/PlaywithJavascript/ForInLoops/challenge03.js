/*
Student Grades Calculation:
Ek studentMarks object hai jisme subjects ke naam keys hain aur marks values hain. for...in loop ka use karke total marks aur average marks calculate karo.
*/

const student = {
    DSA: 90, 
    ML: 78,
    AI: 65,
    CP: 84
}

let total = 0;

for(let key in student){
    total += student[key];
}

const avgMarks = total / 5;

console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${Math.round(avgMarks)}`);
