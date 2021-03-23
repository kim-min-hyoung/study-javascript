//Don't give up

//함수 선언
function doSomething() {
  //함수의 어떤 값을 전달받아 올 건지)
  console.log("hello"); //실제로 어떤 코드가 동작하는지, 코드를 작성하는 부분
}
//함수 호출
doSomething();

function add(a, b) {
  const sum = a + b;
  return sum;
}
const result = add(1, 2);
console.log(result);

//Function
// - fundamental building block in the program
// - subprogeam can be use multiple times
// - performs a task or calcultates a value

//1. Function declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. creatCardAnPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("dkdkdkdkdk");

//2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "min";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");

//4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellile");

//5. Local scope
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the exection reaches it.

const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
