/*
3️⃣ Twitter - Format Tweet Text With Character Count

📝 Problem:
Twitter ke sabhi tweets ko formatted object me convert karna hai jisme tweet ka text aur character count ho.
*/

//input: 

const tweets = [
  "Hello Twitter!",
  "JavaScript is awesome!",
  "Follow me for updates."
];

const tweetObj = tweets.map((obj) => ({
  text: obj,
  length: obj.length
}))
console.log(tweetObj);

// output: 
// [
//   { text: "Hello Twitter!", length: 14 },
//   { text: "JavaScript is awesome!", length: 22 },
//   { text: "Follow me for updates.", length: 23 }
// ]
