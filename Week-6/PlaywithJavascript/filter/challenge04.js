/*
4️⃣ Swiggy/Zomato - Get Only Vegetarian Dishes

📝 Problem:
Swiggy/Zomato ke ek menu list me sirf vegetarian dishes ka list chahiye.
*/

// input: 

const menu = [
  { dish: "Paneer Tikka", isVeg: true },
  { dish: "Chicken Biryani", isVeg: false },
  { dish: "Dal Tadka", isVeg: true }
];

const vegetarianDishes = menu.filter(item => item.isVeg === true);

console.log(vegetarianDishes);

// output:[{ dish: "Paneer Tikka", isVeg: true }, { dish: "Dal Tadka", isVeg: true }]
