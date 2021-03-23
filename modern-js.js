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

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  console.log(`n ${i}!`);
  i++;
}

// let num;

// do {
//   num = prompt("100을 초과하는 숫자를 입력", 0);
// } while (num <= 100 && num);

let n = 10;

next: for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }
  console.log(i);
}

switch (browser) {
  case "Edge":
    alert("Edge를 사용하고 계시네요!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
    break;

  default:
    alert("현재 페이지가 괜찮아 보이길 바랍니다!");
}

if (browser === "Edges") {
  alert("edge 사용자");
} else if ((browser === "Chrome" || "Firefox", "Opera", "Safari")) {
  alert("오오오오");
} else {
  alert("휴");
}

let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
