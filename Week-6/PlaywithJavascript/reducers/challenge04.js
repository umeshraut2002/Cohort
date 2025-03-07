/*
✅ Problem 4: Sum of Ratings Above 4 Stars
Problem:
Movie list hai, sirf un movies ki rating ka sum chahiye jinki rating 4 se jyada hai.
*/

let movieList = [
  { title: "Movie A", rating: 4.5 },
  { title: "Movie B", rating: 3.8 },
  { title: "Movie C", rating: 5 },
  { title: "Movie D", rating: 4.2 }
];

let sumRatings = movieList.reduce((acc, ratings) => {
  return ratings.rating >= 4 ? acc + ratings.rating : acc;
},0)

console.log(sumRatings)

// output: 13.7
