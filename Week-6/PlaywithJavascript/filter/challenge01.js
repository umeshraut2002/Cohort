/*
1️⃣ Instagram - Get Only Active Users

📝 Problem:
Instagram par sirf active users ka list chahiye, jo deactivate nahi hue hain.
*/

// input: 

const users = [
  { name: "Amit", active: true },
  { name: "Neha", active: false },
  { name: "Rahul", active: true }
];

const getActiveUser = users.filter((item) => item.active === true);

console.log(getActiveUser)

// output: [{ name: "Amit", active: true }, { name: "Rahul", active: true }]
