"use strict";

// // 1. String concatenation
// console.log("my" + " cat");
// console.log("1" + 2);
// console.log(`string literals: 1 + 2 = ${1 + 2}`);

// //2. Numeric operators
// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 / 1);
// console.log(1 * 1);
// console.log(1 % 1);
// console.log(5 + 2);
// console.log(2 ** 3);

// //3. Increment and decrement operators
// let counter = 2;
// const preIncrement = ++counter;
// //counter = counter + 1;
// //preIncrement = counter;
// console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);

// const postIncrement = counter++;
// //postIncrement = counter;
// //counter = counter + 1;
// console.log(`postIncrement: ${postIncrement}, counter : ${counter}`);

// //4. Assignment operators
// let x = 3;
// let y = 6;
// x += y; //x=x+y
// x -= y; //x=x+y
// x *= y; //x=x+y
// x /= y; //x=x+y

// //5. Comparison operatiors
// console.log(10 < 6);
// console.log(10 <= 6);
// console.log(10 > 6);
// console.log(10 >= 6);

// //6. Logical operators: || (or), $$ (and), ! (not)
// const value1 = false;
// const value2 = 4 < 2;

// //||(or) : 처음으로 true가 나오면 멈춤! 3개 중에 하나만 true가 나오면 됨. 당연히 심플한 value를 맨 앞에,

// //||(and) : 처음으로 false가 나오면 멈춤! 3개 중에 하나만 false가 나오면 됨. 당연히 심플한 value를 맨 앞에,

// console.log(`or: ${value1 || value2 || check()}`);

// function check() {
//   for (let i = 0; i < 10; i++) {
//     //wasting time
//     console.log("d");
//   }
//   return true;
// }

// //!(not) 반대로 바꿔줌

// //7. Equality
// const stringFive = "5";
// const numberFive = 5;

// // == loose equality, with type conversion
// console.log(stringFive == numberFive);
// console.log(stringFive != numberFive);

// // ===strict equality, no type conversion
// console.log(stringFive === numberFive);
// console.log(stringFive !== numberFive);

// // object equality by reference
// const ellie1 = { name: "ellie" };
// const ellie2 = { name: "ellie" };
// const ellie3 = ellie1;
// console.log(ellie1 == ellie2);
// console.log(ellie1 === ellie2);
// console.log(ellie1 === ellie3);

// // equality - puzzler
// console.log(0 == false); //t
// console.log(0 === false); //f
// console.log(" " == false);
// console.log(" " === false);
// console.log(null == undefined);
// console.log(null === undefined);

// //8. Conditional operators: if
// // if, else if, else
// const name = "dd";
// if (name === "min-hyoun") {
//   console.log("Welcone, min");
// } else if (name === "coder") {
//   console.log("you are amazing coder");
// } else {
//   console.log("unkwnon");
// }

// //9. Ternary operator: ? <간단할 때만>
// // condition ? value1 : value2;
// console.log(name === "ellie" ? "y" : "no");

// //10. Switch statement
// // use for multiple if checks
// // use for enum-like value check
// // use for multiple type checks in TS

// const browser = "IE";
// switch (browser) {
//   case "IE":
//     console.log("go away!");
//     break;
//   case "Chrome":
//   case "Firefox":
//     console.log("love");
//     break;
//   default:
//     console.log("same all");
//     break;
// }

// //11. Loops
// // while loop, while the conditions is truthy,
// // body code is executed.
// let i = 3;
// while (i > 0) {
//   console.log(`while: ${i}`);
//   i--;
// }

// // do wile loop, body code is executed first,
// // then check the condition.
// do {
//   console.log(`do while: ${i}`);
//   i--;
// } while (i > 0);

// // for loop, for(begin; condition; step)
// for (i = 3; i > 0; i--) {
//   console.log(`for:${i}`);
// }

// for (let i = 3; i > 0; i = i - 2) {
//   console.log(`inline variable for: ${i}`);
// }

// // nested loops
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(`i: ${i}, j:${j}`);
//   }
// }

// for (let i = 0; i < 11; i++) {
//   if (i % 2 !== 0) {
//     console.log(`q1. ${i}`);
//   }
// }

// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(`q1: ${i}`);
//   }
// }

// for (let i = 0; i < 11; i++) {
//   if (i > 8) {
//     break;
//   }
//   console.log(`dkdkd: ${i}`);
// }

// function changeName(obj) {
//   obj.name = "coder";
// }
// const ellie = { name: "ellie" };
// changeName(ellie);
// console.log(ellie);

// function showMessage(message, from = "unknown") {
//   console.log(`${message} by ${from}`);
// }
// showMessage("hi");

// function printAll(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
//   for (const arg of args) {
//     console.log(arg);
//   }

//   args.forEach((arg) => console.log(arg))
//   printAll("d", "r", "e");

// function sum(a, b) {
//   return a + b;
// }
// const result = sum(1, 2);
// console.log(`sum: ${sum(1, 2)}`);

// function upgradUser(user){
//   if(user.point > 10){
//   }
// }

// function randomQuiz(answer, printYes, printNo) {
//   if (answer === "love you") {
//     printYes();
//   } else {
//     printNo();
//   }
// }
// const printYes = function () {
//   console.log("yes");
// };
// const printNo = function () {
//   console.log("No");
// };

// randomQuiz("dkdkdk", printYes, printNo);
// randomQuiz("love you", printYes, printNo);

// function calculate(command, a, b) {
//   switch (command) {
//     case "add":
//       return a + b;
//     case "substract":
//       return a - b;
//     case "divide":
//       return a / b;
//     case "multiply":
//       return a * b;
//     case "remainder":
//       return a % b;
//     default:
//       throw Error("Unknown command");
//   }
// }
// console.log(calculate("add", 2, 3));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak() {
//     console.log(`${this.name}: hello!`);
//   }
// }

// const ellie = new Person("ellie", 20);
// console.log(ellie.name);
// console.log(ellie.age);

// ellie.speak();

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get age() {
//     return this.age;
//   }
//   set age(value) {
//     this.age = value;
//   }
// }
// const user1 = new User("Steve", "Job", -1);
// console.log(user1.age);

// class Shape {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   draw() {
//     console.log(`drawing ${this.color} color of!!!!!`);
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// class Rectangle extends Shape {}
// const rectangle = new Rectangle(20, 20, "blue");
// rectangle.draw();

// class Triangle extends Shape {
//   getArea() {
//     return (this.width * this.height) / 2;
//   }
// }
// const triangle = new Triangle(20, 20, "blue");
// triangle.draw();
// console.log(triangle.getArea());

// function print(person) {
//   console.log(person.name);
//   console.log(person.age);
// }

// const ellie = { name: "ellie", age: 4 };
// print(ellie);

// object = { key : value };

//key는 string이고, 사용자에게 key를 받아올 때 obj[key]

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// const person4 = new Person("민형", 20);
// console.log(person4);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log('name' in ellie
// console.log(ellie.random))

// for (let key in ellie) {
//   console.log(key);
// }

// const array = [1, 2, 4, 5];
// for (let value of array) {
//   console.log(value);
// }

// const user = { name: "alalala", age: "20" };
// const user4 = Object.assign({}, user);
// console.log(user4);

// const f1 = { color: "red" };
// const f2 = { color: "blue", size: "big" };
// const mixed = Object.assign({}, f1, f2);
// console.log(mixed.color);
// console.log(mixed.size);

// Array

// 1. Declaration
// const arr1 = new Array();
// const arr2 = [1, 2];

// // 2. Index position
// const fruits = ["dkdkdkd", "qwwqweq", "d", "qqw"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);

// //3.
// console.clear();

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for offscreenBuffering

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit) => console.log(fruit));

// fru

// fruits.push('')
// fruits.splice(1)

// // 5. Searching
// // fund the index

// console.clear();
// console.log(fruits);
/*
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(", ");
console.log(result);

const fruits2 = "a, b, c, d";
const result2 = fruits2.split(",", 2);
console.log(result2);

const array = [1, 2, 3, 4, 5];
const result3 = array.reverse();
console.log(result3);
console.log(array);

const array2 = [1, 2, 3, 4, 5];
const result4 = array2.slice(2, 5);
console.log(result4);
console.log(array2);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

const result5 = students.find((student) => student.score === 90);
console.log(result5);

const result6 = students.filter((student) => student.enrolled);
console.log(result6);

const result7 = students.map((student) => student.score);
console.log(result7);

console.clear();
const result8 = students.some((student) => student.score < 50);
console.log(result8);

// const result8 = students.every((student) => student.score < 50);
// console.log(result8);
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(", ");
  console.log(result);
}

{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}
*/

// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// console.log("3");

// function printImmdiately(print) {
//   print();
// }
// printImmdiately(() => console.log("hello"));

// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }
// printWithDelay(() => console.log("aaaaaaasyn"), 2000);

/*
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("아이디 쳐");
const password = prompt("비밀번호 쳐");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`헬로우 ${userWithRole.name}, you have a ${userWithRole.role}야`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
*/

//promise
// state: pending => fulfilled or rejected
// producer / consumer
// producer vs consumer

// 1. Producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log("doing somthing");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network"));
  }, 2000);
});

//2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3. promise chanining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4.
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 알`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });

getHen() //
  .then(getEgg)
  // .catch((error) => {
  //   return "빵";
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log);
