// const what = "min";
// console.log(what);

// Boolean!
// const wat = false;
// console.log(wat);

// Number
// const wat = 666;

// //Float
// const wat = 55.1;

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// console.log(daysOfWeek)[2];

// const minHyoungInfo = {
//   name: "min",
//   age: 20,
//   gender: "Male",
//   favMovies: ["신과함께", "괴물"],
// };
// console.log(minHyoungInfo.genders);

// function minHyoungInfo(name, age) {
//   console.log("welcome", name, age);
// }
// minHyoungInfo("good big chance", 200000);

// function sayHello(name, age) {
//   console.log(`Hello ${name} you are ${age} years old`);
// }
// sayHello("minhyoung", 20000);

// function minHyoungInfo(name, age) {
//   return `Hello ${name}, you to old, wow ${age} years old`;
// }
// const greatMinHyoung = minHyoungInfo("min", 3000);
// console.log(greatMinHyoung);

// const calculator = {
//   plus: function (a, b) {
//     return a * b;
//   },
// };
// const plus = calculator.plus(5, 6);
// console.log(plus);

/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();

// console.log("click", handleClick);

/*
function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);


/*
if (10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}

if (20 > 5 || "mon" === "min") {
  console.log("yes");
} else {
  console.log("no");
}

/*
true && true = true;
true && false = false;
false && true = false;
false && false = false;

true || true = true;
true || false = true;
false || true = true;
false || false = false;
*/
 /*
function add(num1, num2) {
  return num1 + num2;
}

function suprise(operator) {
  const result = operator(222, 222);
  console.log(result);
}

suprise(add);

// const result = add(3, 5);
// console.log(result);

