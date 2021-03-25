"use strict";

/*
//  14세 이상 90세 이하 속하는 if문 작성

// if (age >= 14 && age <= 90) {
//   return true;
// }

// if (age < 14 || age > 90)
//   if (!(age >= 14 && age <= 90)) {
//   }

// let id = prompt("아이디를 입력하세요", "");

// if (id === "alsgud") {
//   let pw = prompt("비밀번호를 입력하세요", "");
//   if (pw === "durtk16") {
//     alert("환영합니다");
//   } else {
//     alert("인증 실패입니다");
//   }
// } else if (id !== "alsgud") {
//   alert("확인되지 않은 아이디입니다");
// } else {
//   alert("취소되었습니다");
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`n ${i}!`);
//   i++;
// }

// // let num;

// // do {
// //   num = prompt("100을 초과하는 숫자를 입력", 0);
// // } while (num <= 100 && num);

// let n = 10;

// next: for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue next;
//   }
//   console.log(i);
// }

// switch (browser) {
//   case "Edge":
//     alert("Edge를 사용하고 계시네요!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
//     break;

//   default:
//     alert("현재 페이지가 괜찮아 보이길 바랍니다!");
// }

// if (browser === "Edges") {
//   alert("edge 사용자");
// } else if ((browser === "Chrome" || "Firefox", "Opera", "Safari")) {
//   alert("오오오오");
// } else {
//   alert("휴");
// }

// let a = +prompt("a?", "");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert("2,3");
// }

// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// const checkAge = (age) => {
//   age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
// };
// {
//   const min = (a, b) => {
//     if (a === b) {
//       return a;
//     } else if (a < b) {
//       return a;
//     }
//   };

//   min(2, 5);
//   min(3, -1);
//   min(1, 1);
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// const pow = (x, n) => {
//   let result = x;

//   for (i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// };

// n < 1 ? alert("error") : alert(pow(x, n));

// 질문을 하고, 동의, 취소에 따라 다른 응답을 하기

// const ask = (que, yes, no) => {
//   confirm(que) ? yes() : no();
// };

// ask(
//   "동의함?",
//   () => alert("동의함"),
//   () => alert("취소")
// );
/*
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

const a = camelize("background-color");
console.log(a);
*/

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) => {
      if (index == 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join("");
};

const cam = camelize("my-long-word");
console.log(cam);

//

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  return arr.filter((item) => a <= item && item <= b);
};

// const filterRange = (arr, a, b) => {
//   let newArr = arr;
//   newArr.forEach(() => {
//     a <= arr <= b ? arr.splice(0) : false;
//   });
// };

// newArr.map(() => {
//   if (arr >= a) {
//     return arr.split();
//   }
//   if (arr <= b) {
//     return true;
//   }
// });

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered); // 3 1
// console.log(arr); //5 3 8 1

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

//

let schedule = {};

console.log(isEmpty(schedule)); // true
console.log(schedule);
schedule.name = "get up";
console.log(isEmpty(schedule)); // false
console.log(schedule);

function isEmpty(obj) {
  if (obj === null) {
    return true;
  } else {
    return false;
  }
}

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// let user2 = {
//   name: "jhon",
//   age: 30,
// };

// user2.sayHi = function () {
//   // alert("안녕");
// };

// user2.sayHi();

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user2 = makeUser();

// console.log(user2.ref().name);

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt("c", 0);
//     this.b = +prompt("d", 0);
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//     alert(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep();
