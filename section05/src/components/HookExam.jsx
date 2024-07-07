import { useState } from "react"

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(custom Hook) 을 직접 만들 수 있다.

function useInput(){
  const [input, setInput] = useState("")

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return [input, onChange]
}

const HookExam = () => {
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  )
}

export default HookExam