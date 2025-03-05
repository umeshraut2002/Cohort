/*
Social Media User Profile Analysis:
Ek userProfile object hai jisme username, followersCount, followingCount, aur bio diya gaya hai. Tumhe for...in loop ka use karke ye check karna hai ki profile me koi empty value toh nahi hai.
*/

const userProfile = {
    username: "@vihaan123",
    followers: 610,
    following: 45,
    bio: ""
}

for(let k in userProfile){
    if(userProfile[k] === ""){
        console.log(`Mising value found in : ${k}`);
    }
    else{
        console.log("No Value Missing!");
    }
}

// output: Missing value found in : bio