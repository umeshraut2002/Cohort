/*
1️⃣ Instagram - Total Likes on a User’s Posts

📝 Problem:
Instagram par ek user ke sabhi posts ke likes ka total count nikalna hai.
*/

// input

const posts = [
  { postId: 1, likes: 120 },
  { postId: 2, likes: 340 },
  { postId: 3, likes: 90 }
];

let totalLikes = posts.reduce((acc, user) => (acc + user.likes),0);

console.log(totalLikes)

// output: // Total Likes: 550