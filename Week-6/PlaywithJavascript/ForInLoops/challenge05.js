/*
E-commerce Order Summary:
Ek orderDetails object diya gaya hai jisme har item ka naam aur uska price store hai. Tumhe for...in loop ka use karke total bill amount calculate karna hai.
*/


const orderDetails = {
    soyabeanOil: 540,
    ghee: 714,
    sugar: 430,
} 

let totalBill = 0;

for(let key in orderDetails){
    totalBill += orderDetails[key];
}

console.log(`Total Bill Amount:₹ ${totalBill}`)