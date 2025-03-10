/*
6️⃣ Simple Promise Execution

👉 Task: Ek function createPromise(flag) likh, jo agar flag === true ho toh "Success" return kare, warna "Error" return kare using .then/.catch.
*/

const promise = new Promise((resolve, reject) => {
  let flag = true;

  if (flag) {
    resolve("Sucess");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then((result) => {
    console.log("Promise Resolve and result: ", result);
  })
  .catch((err) => {
    console.log("Something went wrong: ", err);
  })
  .finally(() => {
    console.log("All Done");
  });

console.log(promise);
