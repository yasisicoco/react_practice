// 1. if 조건문
let num = 5

if (num >= 10) {
  // console.log("num은 10이상입니다")
  // console.log("조건이 참 입니다")
} else if (num >=5) {
  // console.log("num은 5 이상입니다.")
}
else {
  // console.log("조건이 거짓입니다")
}

// 2. Switch 조건문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl"
switch (animal) {
  case "cat": {
    console.log("고양이")
    break
  }
  case "dog": {
    console.log("개")
    break
  }
  case "bear": {
    console.log("곰")
    break
  }
  case "snake": {
    console.log("뱀")
    break
  }
  case "tiger": {
    console.log("호랑이")
    break
  }
  default: {
    console.log("그런동물은 모릅니다")
  }
}