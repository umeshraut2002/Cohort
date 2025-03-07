/*
Problem:
Product list hai, jisme kuch out of stock products bhi hain. Sirf available products ka total price chahiye.
*/

//input 

let products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 1000, inStock: false },
  { name: "Keyboard", price: 2000, inStock: true }
];

let totalPrice = products.reduce((acc, product) => {
  return product.inStock ? acc + product.price : acc;
},0);

console.log(totalPrice);

// output: 52000
