/* 
Employee Data Processing:
Tumhe ek employee object diya gaya hai jisme name, age, designation, aur salary hain. for...in loop ka use karke har property aur uski value ko console par print karo.
*/

const employee = {
    name: "Umesh Raut",
    age: 23,
    designation: "Front End Developer",
    salary: 250000
}

for(let key in employee){
    console.log(`${key} : ${employee[key]}`);
}