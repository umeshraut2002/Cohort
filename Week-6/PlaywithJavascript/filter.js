let inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 120},
    {name: "Widget C", stock: 45},
    {name: "Widget D", stock: 70},
];

let lowStockItems = inventory.filter((item) => {
    return item.stock < 50;
});

console.log(lowStockItems);