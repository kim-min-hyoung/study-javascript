"use strict";

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const elile = { name: "ellie", age: "200" };
print(elile);

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person4 = new Person("djdjdjd", 20);
console.log(person4);

// console.clear();
// for (key in ellie) {
//   console.log(key);
// }

//for(value of iterable)
const array = [1, 2, 3, 4, 5, 6, 7, 8];
for (let value of array) {
  console.log(value);
}

const user = { name: "minn", age: "20" };
const user2 = user;
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);
