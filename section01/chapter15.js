// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name : "kimjinwoo", // key : value
  age : 28,
  hobby : "running",
  job : "FE Developer",
  extra : {},
  10 : 20, // Number 도 가능
  "like cat" : true, // 띄어쓰기가 있을 땐 ""로 감싸야함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄표 표기법)
let name = person.name;
console.log(name) // 점표기법, 특정프로퍼티 꺼내오기

let age = person["age"] // 괄표 표기법(대괄호안에 "key")
console.log(age)

let property = "hobby"
let hobby = person[property]
console.log(hobby)

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer"
person["favoriteFood"] = "고기"
person.anything = "i love this"
person.anythingNumber = 20

console.log(person)

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person['favorateFood'] = "아무거나"

// 3.4 프로퍼티를 삭제하는 방법
delete person.job
delete person['favorateFood']

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person
let result2 = "cat" in person
console.log(result1)
console.log(result2)