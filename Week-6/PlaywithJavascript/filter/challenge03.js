/*
3️⃣ Twitter - Get Tweets With More Than 100 Likes

📝 Problem:
Twitter par sirf popular tweets chahiye jisme 100 se zyada likes hain.
*/

// input: 
const tweets = [
  { text: "Hello World!", likes: 90 },
  { text: "JavaScript is awesome!", likes: 150 },
  { text: "Follow me for more updates", likes: 120 }
];

const popularTweets = tweets.filter(item => item.likes > 100);

console.log(popularTweets);

// output:[{ text: "JavaScript is awesome!", likes: 150 }, { text: "Follow me for more updates", likes: 120 }]
