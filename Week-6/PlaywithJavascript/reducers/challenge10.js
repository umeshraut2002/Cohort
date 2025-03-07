/*
5️⃣ Facebook - Most Used Reaction on a Post

📝 Problem:
Ek post par kaun sa reaction (Like, Love, Wow, etc.) sabse zyada use hua hai?
*/

// input: 

const reactions = ["Like", "Love", "Like", "Wow", "Love", "Like", "Haha"];

let postReact = reactions.reduce((acc, like) => {
    acc[like] = (acc[like] || 0) + 1;
    return acc;
},{});

let maxReaction = Object.keys(postReact).reduce((a, b) => {
    return postReact[a] > postReact[b] ? a : b;
});

console.log("Most Used Reaction: ",maxReaction)

// output: Most used reaction: "Like"
