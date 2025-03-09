// Polyfill of filter 
// callback
// operate on conditional base 

const users = [
  { name: "Amit", active: true },
  { name: "Neha", active: false },
  { name: "Rahul", active: true }
];

const activeUser = users.filter(item => item.active === true);

console.log(activeUser)

// output: [{ name: "Amit", active: true }, { name: "Rahul", active: true }]
