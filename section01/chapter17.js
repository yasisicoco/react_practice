// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3,
  1,
  2,
  3,
  true,
  "hhelo",
  null,
  undefined,
  () => {},
  {},
  [],
]
console.log(arrC)

// 2. 배열 요소 접근
let item1 = arrC[0]
let item2 = arrC[1]

arrC[0] = "hello" // 특정 원소의 값 수정
item1 = arrC[0]

console.log(arrC)
console.log(item1, item2)