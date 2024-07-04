// 스코프
// 전역 스코프, 지역 스코프
// -> 전역 스코프 : 전체영역
// -> 지역 스코프 : 특정 영역

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  function funcB() {} // 함수 선언식은 함수안에서만 지역스코프가 있다
}

funcA();

if (true) {
  let c = 1;
}

console.log(c)

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {}
}
funcB();