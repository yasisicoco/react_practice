// function greeting() {
//   console.log("안녕하세요")
// }
// console.log("호출 전")
// greeting()
// console.log("호출 후")

// 함수
let area1 = getArea(10, 20)
console.log(area1)
let area2 = getArea(30, 20)
console.log(area2)
let area3 = getArea(120, 200)
console.log(area3)

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("another")
  }
  
  another()
  let area = width * height
  
  return area
}