"use strict";

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

const a = camelize("background-color"); // == 'backgroundColor';
const b = camelize("list-style-image"); // == 'listStyleImage';
const c = camelize("-webkit-transition"); // == 'WebkitTransition';

console.log(a);
console.log(b);
console.log(c);

{
  const filterRange = (arr, a, b) => {
    return arr.filter((item) => a <= item && b >= item);
  };

  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  // a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열

  console.log(filtered); // 3,1 (조건에 맞는 요소)

  console.log(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
}

{
  // a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성, 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

  const filterRangeInPlace = (arr, a, b) => {};

  let arr = [5, 3, 8, 1];

  filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

  console.log(arr); // [3, 1]
}

{
  let arr = [5, 2, 1, -10, 8];

  arr.sort((a, b) => b - a);

  // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.

  console.log(arr);
} // 8, 5, 2, 1, -10

{
  const copySorted = (arr) => {};

  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);

  console.log(sorted); // CSS, HTML, JavaScript
  console.log(arr); // HTML, JavaScript, CSS (no changes)
}
{
  function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
    };

    this.calculate = function (str) {
      let splict = str.split(" "),
        a = +splict[0],
        op = splict[1],
        b = +splict[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }
  const calc = new Calculator();
  console.log(calc.calculate("3 + 7")); // 10

  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  let result = powerCalc.calculate("2 ** 3");
  console.log(result); // 8
}

{
  const camelize = (str) => {
    return str
      .split("-")
      .map((word, index) => {
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
      })
      .join("");
  };

  const a = camelize("background-color");
  const b = camelize("list-style-image");
  const c = camelize("-webkit-transition");

  console.log(a);
  console.log(b);
  console.log(c);
}
{
  const filterRange = (arr, a, b) => {
    return arr.filter((item) => a <= item && b >= item);
  };
  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  console.log(filtered);
  console.log(arr);
}

{
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

  let arr = [5, 3, 8, 1];

  filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

  console.log(arr); // [3, 1]
}
{
  let arr = [5, 2, 1, -10, 8];

  arr.sort((a, b) => b - a);

  console.log(arr);
}
{
  const copySorted = (arr) => {
    return arr.slice().sort();
  };

  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);

  console.log(sorted); // CSS, HTML, JavaScript
  console.log(arr); // HTML, JavaScript, CSS (no changes)
}

{
  function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };

    this.calculate = (str) => {
      let split = str.split(" "),
        a = +split[0],
        op = split[1],
        b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };

    this.addMethod = (name, func) => {
      return (this.methods[name] = func);
    };
  }

  let calc = new Calculator();
  console.log(calc.calculate("3 + 7")); // 10

  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  let result = powerCalc.calculate("2 ** 3");
  console.log(result); // 8
}
{
  let fruits = ["사과", "배", "오렌지"];

  // 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
  let shoppingCart = fruits;
  shoppingCart.push("바나나");

  // fruits에 어떤 값이 들어 있을까요?
  console.log(fruits.length); // ?
}
{
  let styles = ["Jazz", "Blues"];
  console.log(styles);

  styles.push("Rock-n-Roll");
  console.log(styles);

  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  console.log(styles);

  styles.shift();
  console.log(styles);

  styles.unshift("Rap", "Reggae");
  console.log(styles);

  // Jazz, Blues
  // Jazz, Blues, Rock-n-Roll
  // Jazz, Classics, Rock-n-Roll
  // Classics, Rock-n-Roll
  // Rap, Reggae, Classics, Rock-n-Roll
}
