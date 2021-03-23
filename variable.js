"use strict";

// 2. Variable rw(read/write)
// let (added in ES6)
// let으로 선언한 뒤 이름을 출력. 가장 대표적인 변수, 이제 var는 절대 쓰지 말 것
// mutable type

let globalName = `global name`;
{
  let name = `ellie`;
  console.log(name);
  name = `hello`;
  console.log(name);
}
console.log(globalName);

// 3. Constant r(read only)
// 한번 할당하면 값이 절대 바뀌지 않는 것
// fovor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefidn, symbol
// object, box container
// function, first-class function

// const cont = 17; //integer
// const size = 17.1; //decimal number
// consol.log(`value: ${count}, type: ${typeof count}`);
// consol.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = `not a number` / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = `c`;
const brendan = `bredan`;
const greeting = `hello` + brendan;
console.log(`value: ${greeting}, ${typeof greeting}`);

// boolean
// false: 0, null, undefined, NaN, ""
// true : any other value
const canRead = true;
const test = 3 < 1;
console.log(`vaule: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undifined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique, identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// 5. Dynamic typing: dynamially typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
