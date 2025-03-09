/* 
🔟 Google Photos - Total Storage Used per File Type

📝 Problem:
Google Photos me ek user ka file type ke hisaab se total storage usage nikalna hai.
*/

// input: 

const files = [
  { type: "Images", size: 5 }, // in GB
  { type: "Videos", size: 15 },
  { type: "Images", size: 3 },
  { type: "Documents", size: 2 }
];

const totalStorageUsage = files.reduce((acc, curr) => {
  acc[curr.type] = (acc[curr.size] || 0) + curr.size;
  return acc;
}, {});

console.log(totalStorageUsage,"(Total GB)");

// output:
// { "Images": 8, "Videos": 15, "Documents": 2 }  (Total GB)
