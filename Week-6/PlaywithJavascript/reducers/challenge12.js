/*
7️⃣ Netflix - Total Watch Hours per Genre

📝 Problem:
Netflix ke ek user ka genre-wise watch time ka total calculate karna hai.
*/

// input 

const watchHistory = [
  { genre: "Action", hours: 5 },
  { genre: "Drama", hours: 3 },
  { genre: "Action", hours: 2 },
  { genre: "Comedy", hours: 4 }
];

const totalWatchHours = watchHistory.reduce((acc, curr) => {
  acc[curr.genre] = (acc[curr.genre] || 0) + curr.hours;
  return acc;
}, {});

console.log(totalWatchHours);

/*
output: { "Action": 7, "Drama": 3, "Comedy": 4 }
*/
