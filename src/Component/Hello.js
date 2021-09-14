import World from "./Template";
import { useState } from "react";

export default function Hello(props) {
  const [age, setAge] = useState(props.age);
  const [value, setvalue] = useState("");

  function changeAge() {
    setAge(age + 1);
  }

  function minusAge() {
    setAge(age - 1);
  }

  const Handle = (e) => {
    setvalue(e.nativeEvent.target.value);
  };
  const Change = () => {
    alert(`현재 값은 ${value}입니다.`);
  };

  return (
    <div>
      <p></p>
      <p>{age}</p>
      <button onClick={changeAge}>나이바꾸기</button>
      <button onClick={minusAge}>숫자내리기</button>
      <input type="text" onChange={Handle}></input>
      <button onClick={Change}>보내기</button>
      <World />
    </div>
  );
}
