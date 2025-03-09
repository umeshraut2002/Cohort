/*
9️⃣ Flipkart - Category-wise Sales Analysis

📝 Problem:
Flipkart ki sales data ko category-wise total revenue me convert karna hai.
*/

// input: 

const sales = [
  { category: "Electronics", revenue: 50000 },
  { category: "Fashion", revenue: 20000 },
  { category: "Electronics", revenue: 30000 }
];

const totalRevenue = sales.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + curr.revenue;
  return acc;
}, {})

console.log(totalRevenue);

// output: { "Electronics": 80000, "Fashion": 20000 }
