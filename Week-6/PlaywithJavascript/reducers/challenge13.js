/**
 8️⃣ Swiggy/Zomato - Total Order Value per Restaurant

📝 Problem:
Ek user ne kitne different restaurants se order kiya hai, aur kis restaurant ka total bill kitna hai?
*/

// input: 

const orders = [
  { restaurant: "Dominos", amount: 500 },
  { restaurant: "KFC", amount: 700 },
  { restaurant: "Dominos", amount: 300 }
];

const totalBill = orders.reduce((acc, curr) => {
  acc[curr.restaurant] = (acc[curr.restaurant] || 0) + curr.amount;
  return acc;
}, {})

console.log(totalBill);

// output: { "Dominos": 800, "KFC": 700 }