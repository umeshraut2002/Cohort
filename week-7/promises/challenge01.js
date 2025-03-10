/*
6️⃣ Simple Promise Execution

👉 Task: Ek function createPromise(flag) likh, jo agar flag === true ho toh "Success" return kare, warna "Error" return kare using .then/.catch.
*/

function createFlag(flag){
    return new Promise((resoleve, reject) => {
        if(flag){
            resoleve("Sucess : Flag is true");
        } else{
            reject("Promise Rejected : Flag is false");
        }
    })
}

createFlag(true)
  .then((result) => {
    console.log("Promise Resolve and result: ", result);
  })
  .catch((err) => {
    console.log("Something went wrong: ", err);
  })
  .finally(() => {
    console.log("All Done");
  });

console.log(createFlag(true));
