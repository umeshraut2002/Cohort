/*
5️⃣ Netflix - Get Movies With Ratings Above 4.5

📝 Problem:
Netflix ke ek movie list me sirf woh movies chahiye jinki rating 4.5 se zyada hai.
*/

// input: 

const movies = [
  { title: "Inception", rating: 4.8 },
  { title: "Interstellar", rating: 4.6 },
  { title: "Fast & Furious", rating: 4.2 }
];

const ratingsMore = movies.filter(item => item.rating > 4.5);

console.log(ratingsMore);

// output: [{ title: "Inception", rating: 4.8 }, { title: "Interstellar", rating: 4.6 }]
