// 자바스크립트에서 변수 설정: var(변수), let(변수), const(상수)

import World from "./World";
import { useState } from "react";

// 속성을 받는다
// props: object
export default function Hello(props) {
    // props는 강제로 변경할 수 없다
    // props.age = 150; 읽기전용 임의 변경 불가능
    const[name, setName]  = useState('hong');
    // useState를 이용해서 peops.age 값을 변경
    const[age,setAge] = useState(props.age);

    const msg = props.age > 19 ? '성인' : '미성년';

    function changeName() {
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
        setAge(age + 5);
    }
    return(
        <div>
            <h1>State</h1>
            <h1>{name}({age}):{msg}</h1>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}

