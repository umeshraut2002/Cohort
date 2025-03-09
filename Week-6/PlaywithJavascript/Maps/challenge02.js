/*
2️⃣ Amazon - Convert Prices to Another Currency (INR to USD)

📝 Problem:
Amazon ke product list me sabhi products ki price INR se USD me convert karni hai. (1 INR = 0.012 USD)
*/

// input: 

const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 2000 }
];

const usdToInr = products.map(item => ({
  ...item,  // all properties as it is 
  price: item.price * 0.012 // operation perform 
}));

console.log(usdToInr);

// output: 
// [
//   { name: "Laptop", price: 720 },
//   { name: "Mouse", price: 18 },
//   { name: "Keyboard", price: 24 }
// ]
