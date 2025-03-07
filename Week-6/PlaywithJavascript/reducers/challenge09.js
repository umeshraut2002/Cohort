/*
4️⃣ YouTube - Video Watch Time Analytics

📝 Problem:
Ek user ke sabhi videos ka total watch time (in minutes) calculate karna hai.
*/

// input:

const watchHistory = [
  { videoId: "a1", watchTime: 15 },
  { videoId: "b2", watchTime: 30 },
  { videoId: "c3", watchTime: 20 }
];

let totalWatchTime = watchHistory.reduce((acc, time) => {
    return acc + time.watchTime;
},0);

console.log("Total Watch Time: ", totalWatchTime,"minute")

// output: Total Watch Time: 65 minutes
