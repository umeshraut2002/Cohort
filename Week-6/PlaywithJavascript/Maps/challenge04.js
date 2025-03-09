/*
4️⃣ Swiggy/Zomato - Add Delivery Charges to Food Prices

📝 Problem:
Swiggy/Zomato ke ek menu list me har dish ke price me ₹50 delivery charge add karna hai.
*/

//input: 
const menu = [
  { dish: "Paneer Tikka", price: 250 },
  { dish: "Chicken Biryani", price: 350 },
  { dish: "Dal Tadka", price: 200 }
];

const deliveryCharge = menu.map((user) => ({
  ...user,
  price: user.price + 50
}))

console.log(deliveryCharge);


// output:
// [
//   { dish: "Paneer Tikka", price: 300 },
//   { dish: "Chicken Biryani", price: 400 },
//   { dish: "Dal Tadka", price: 250 }
// ]

