/* 
Product Inventory Management:
Ek inventory object diya gaya hai jisme multiple products aur unki stock quantity store hai. Tumhe check karna hai ki for...in loop ka use karke inventory me kaunse products low stock (quantity < 5) hain.
*/

const Inventory = {
    pen: 5,
    pencil: 2,
    notebook: 7,
    eraser: 1,
    shopner: 4
}

console.log("Low Quantity Stock: ");

for(let key in Inventory){
    if(Inventory[key] < 5){
        console.log(`${key} (Quantity: ${Inventory[key]})`)
    }
}