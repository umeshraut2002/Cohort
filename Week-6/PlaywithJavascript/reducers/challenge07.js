/*
2️⃣ Twitter - Hashtag Frequency Count

📝 Problem:
Ek user ke tweets me kis hashtag ka kitni baar use hua hai count karna hai.
*/

// input: 
const tweets = [
  "I love #JavaScript and #React",
  "#JavaScript is amazing",
  "#React is powerful",
  "Learning #JavaScript is fun!"
];


let hashTagCount = tweets.reduce((acc, tweet) => {
    const tags = tweet.match(/#\w+/g) || [];

    tags.forEach(tags => {
        acc[tags] = (acc[tags] || 0) + 1;
    })
    return acc;
},{});

console.log(hashTagCount);

// { "#JavaScript": 3, "#React": 2 }
