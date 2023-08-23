// import Hello from "./component/Hello";
// import Welcome from "./component/Welcome";

// useState 사용하기 위해서 import하기
// import { useState } from "react";
import Hello from "./component/Hello";
import styles from './App.css';
import { useState } from "react";

const heavyWork = () =>{
  console.log("heavyWork");
}

function App() {
 
  // function showName() {
  //   console.log("hong");
  // }
  // function showGender(gender){
  //   console.log(gender);
  // }

  // // 이벤트로 변수값이 변경되어도 화면에 적용되지 않는다 (갱신안됨)
  // let name = "kim";
  // function showName2(params) {
  //   name = 'kang';
  //   console.log(name);
  //   return name;
  // }

  // function showText(e){
  //   console.log(e.target.value);
  // }

  // // 변수
  // const name = "Hong";
  // let age = 30;
  // let gender = true;
  // // 객체
  // const naver = {
  //   name: "네이버",
  //   url: "https://www.naver.com",
  //   target: "_blank"
  // }

  // let count = 0;
  // // const [변수,변경시킬 함수] = useState(0);
  // const [count2,setCount2] = useState(0);
  // function countUp(){
  //   count = count + 1;
  //   setCount2(count2 + 1);
  //   console.log(count);
  //   console.log(count2);
  // }

  // let name = 'hong';
  // const [changeName2,setChangeNmae2] = useState('kim');
  // function changeName(){
  //   name = name === 'hong' ? 'kim' : 'hong';
  //   console.log(name);
  //   const changeName2 = changeName2 === 'hong' ? 'kim' : 'hong'
  //   setChangeNmae2(changeName2);

  const[names, setNames] = useState(['홍길동','임꺽정']);
  const[input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleUpload = () => {
    // 이전 상태값에 현재값을 추가한다
    // prevState: 이전 state 상태값을 기억하고 있는 변수
    setNames((prevState) => {
      return ([...prevState, input])
    });
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>upload</button>
      {/* 배열 출력 */}
      {/* 배열 하나씩 호출하기 */}
      {names.map((name,idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>

    // <div className="App">
    //   <Hello/>
    //   <Hello/>
    //   <Hello/>
    // </div>
    
    // useState (state = 컴포넌트의 상태)
    // state를 간편하게 생성하고, 변경시켜주는 도구
    // state가 변경되면 화면이 변경된다
    // const[state,setState] = useState(초기값)
    // 사용하는 이유: 변수가 변하면 화면 렌더링을 하지않는데 state가 변하면 화면도 바뀐다

    // <div className="App">
    //     <div>{count2}</div>
    //     <button onClick={countUp}>증가</button>
    //     <h2></h2>
    //     <button onClick={changeName}>changeName</button>
    //     <div>{changeName2}</div>
    // </div>

    //   <h1>Hello</h1>
    //   {/* () 넣으면 이벤트를 원할 때 실행이 안되고 시작과 동시에 실행돼서 변수 전달이 안된다 */}
    //   {/* <button onClick={showName()}>Show name</button> */}
    //   <button onClick={showName}>Show name</button>

    //   {/* 매개변수 전달 */}
    //   <button onClick={function(){
    //     console.log(35);
    //   }}>Show age</button>

    //   <button onClick={()=>{
    //     console.log("거구장");
    //   }}>Show addr</button>

    //   {/* 주로 사용하는것 */}
    //   <button onClick={()=>{
    //     // 함수호출
    //     showGender("남자");
    //   }}>Show gender</button>

    //   {/* return이 있는 함수 */}
    //   <button onClick={showName2}>Show name2</button>
    //   <div>name = {name}</div>

    //   <input type="text" onChange={showText} />
    //   <input type="test" onChange={(e)=>{
    //     // e-> 이벤트, target -> 이벤트가 발생한 요소
    //     console.log(e.target.value);
    //   }} />
    //    </div>


    // <div className="App">
    //   {/* 컴포넌트 */}
    // <Hello />
    // <Welcome />
    // <h1>{'이름: '} {name} {"나이: "} {age} </h1>
    // {/* {변수 숫자 문자열} 사용가능 {boolean} 사용불가 */}
    // {/* 스타일 적용: 인 라인 방식 객체처럼 {}사용한다, 카멜표기법 단어-단어 사용안함 */}
    // {/* 스타일 적용: 각 컴포넌트에 전용 css 만들기 */}
    // <h1 style={{
    //   color:"red",
    //   backgroundColor:"skyblue"}}>이름: {name} 나이: {age} 성별: {gender}</h1>
    // {/* 객체 {객체이름.속성} */}
    // <h2><a href={naver.url} target={naver.target}>{naver.name}</a></h2>
    // <Hello />
    // </div>
    
  );
}

export default App;
