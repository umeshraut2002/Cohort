/*
3️⃣ Amazon - Total Cart Value (Only In-Stock Items)

📝 Problem:
Amazon ke shopping cart me sirf available products ka total price calculate karna hai.
*/

// input

const cart = [
  { name: "Laptop", price: 60000, inStock: true },
  { name: "Headphones", price: 5000, inStock: false },
  { name: "Mouse", price: 1500, inStock: true }
];

let totalPrice = cart.reduce((acc, product) => {
    return product.inStock ? acc + product.price : acc;
},0)

console.log("Total Price: ",totalPrice)

// output: 
// Total Price: 61500
