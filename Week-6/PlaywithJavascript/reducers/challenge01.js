/*
Problem:
Ek user list hai jisme active aur inactive users hain. Sirf active users ko filter karo aur unke names ka array banao.
*/


let users = [
  { name: "Amit", active: true },
  { name: "Raj", active: false },
  { name: "Sana", active: true },
  { name: "Pooja", active: false }
];

let activeUsers = users.reduce((acc, active) => (acc === active.active));

console.log(activeUsers);


// output: ["Amit", "Sana"]
