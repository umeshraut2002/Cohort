/*
✅ Problem 5: Employees with Salary Above 50k and Total of Their Salaries
Problem:
Employee list me se sirf unke names aur total salary chahiye jinki salary 50,000 se upar hai.
*/

let employeeList = [
  { name: "Ankit", salary: 60000 },
  { name: "Priya", salary: 45000 },
  { name: "John", salary: 70000 },
  { name: "Sara", salary: 52000 }
];


let salaryMorethanFifty = employeeList.reduce((acc, employee) => {
  if(employee.salary > 50000){
    acc.name.push(employee.name);
    acc.totalsalery += employee.salary;
  }

  return acc;

}, {name: [], totalsalery: 0})

console.log(salaryMorethanFifty)

/*
output: 
{
  names: ["Ankit", "John", "Sara"],
  totalSalary: 182000
}
*/