/*

for in loop - 
 - this loop use to iterate on objects key
 - it is possible to use in arrays but it returns the index/indices 
 - it is best for the objects 

*/


// syntax 

const employee = {
    name : "Vihaan Raut",
    possition : "Front End ENgineer",
    salary : 60000
}

for(let key in employee){
    console.log(`${key} : ${employee[key]}`);
}
