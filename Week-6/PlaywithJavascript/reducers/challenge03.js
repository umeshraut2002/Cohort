/*
✅ Problem 3: Orders with Status 'Delivered'
Problem:
Order list me se sirf "Delivered" status wale order IDs ka array banao.
*/

// input: 

let orderList = [
  { id: 101, status: "Pending" },
  { id: 102, status: "Delivered" },
  { id: 103, status: "Delivered" },
  { id: 104, status: "Shipped" }
];

let orderDelivered = orderList.reduce((acc, order) => {
  if(order.status === "Delivered"){
    acc.push(order.id)
  }
  return acc;
}, [])

console.log(orderDelivered)

// output: [102, 103]