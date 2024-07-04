// 묵시적
let num = 10
let str = "20"

const result = num + str

// 명시적
let str1 = "10"
let strToNum = Number(str1)
console.log(10 + strToNum)

let str2 = "10개"
let strToNum2 = parseInt(str2)
console.log(strToNum2)

let num1 = 20
let numToStr1 = String(num1)
console.log(numToStr1 + "입니다")