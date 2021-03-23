//자료 구조
/*

토끼 : 귀 두개, 뛴다, 먹는다 - Object 
당근 : 주황색, 먹는다 - Object

토끼 토끼 토끼 토끼 토끼 - 자료구조
딩근 당근 딩근 당근 딩근 - 자료구조 

자료구조와 알고리즘
검색, 삽입, 정렬, 삭제

0, 1, 2, 3, 4
*/

//Array

"use strict";

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ["🍎", "🌽"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.clear();

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

//push:
fruits.push("🍞", "🥩");
console.log(fruits);

//pop"
fruits.pop();
fruits.pop();
console.log(fruits);

//
fruits.unshift("🍞", "🥩");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.push("🧄", "🧈", "🫒", "🦴", "🍖", "🍗");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍤");
console.log(fruits);

const fruits2 = ["💘", "💓", "❣️"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🫒"));
console.log(fruits.includes("🫒"));

//
console.clear();
fruits.push("🧈");
console.log(fruits);
console.log(fruits.indexOf("🧈"));
console.log(fruits.lastIndexOf("🧈"));
