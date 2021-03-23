"use strict";

//Promise is a JavaS object for asyn operations.
// state : pending -> fulfilled or rejected
// producer vs Consumer

// 1. producer
// when new promise is created, the exector runs automatically.

const promise = new Promise((resolve, reject) => {
  console.log("doing somthing");
  setTimeout(() => {
    resolve("ellie");
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
