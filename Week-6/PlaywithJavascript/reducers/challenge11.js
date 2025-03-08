/*
6️⃣ LinkedIn - User Endorsement Count for Skills
📝 Problem:
LinkedIn par ek user ke skills ka total endorsement count nikalna hai.
*/

// input: 

const skills = [
  { skill: "JavaScript", endorsements: 15 },
  { skill: "React", endorsements: 10 },
  { skill: "Node.js", endorsements: 8 }
];

const totalEndorsement = skills.reduce((acc, curr) => (acc + curr.endorsements),0);

console.log("Total Endorsements: ",totalEndorsement);

// output // Total Endorsements: 3