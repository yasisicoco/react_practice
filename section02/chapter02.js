// 단락평가 활용 사례

function printName(person) {
  const name = person && person.name
  console.log(name || "person의 값이 없음")
}

printName()
printName({name: "jinwoo"})

// T || T -> 앞 T
// T && T -> 뒤 T 