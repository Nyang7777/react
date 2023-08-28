// redux 설치하기 npm install react-redux
// redux 설치하기 npm install redux react-redux
// 설치 후 실행 -> dom 오류 -> npm install react-router-dom --save
// import { createStore } from "react-redux";
// store 생성
// store 들어갈 reducer 함수 만들기 현재state 상태와 acrion을 인자로 받는다
// reacr-redux 사용을 위해 impropt
// Provider, useSelector, useDispatch
// 사용할 범위에 지정, 어떤 state 사용할 지 선택, state값 변경

import styles from './Main04.module.css';
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(currentState,action){
    if(currentState === undefined){
        return {number : 5};
    }
    // 현재 상태 복사하기 => newState
    const newState = {...currentState}
    // action으로 인해 정보가 변경된다
    if(action.type === 'PLUS'){
        newState.number ++;
    }else if(action.type === 'MINUS'){
        newState.number --;
    }
    return newState;
}

// createStore 반드시 reducer를 인자로 넣어야 한다
const store = createStore(reducer);
export default function Main05(){
    return(
        <div id={styles.container}>
           <h1>Root </h1>
           <div id={styles.grid}>
                <Provider store={store}>
                    <Left1 />
                    <Right1 />
                </Provider>
           </div>
        </div>
    );
}

function Left1(props){
    return(
        <div>
            <h1>Left1 </h1>
            <Left2 />
        </div>
    )
}

function Left2(props){
    return(
        <div>
            <h1>Left2 </h1>
            <Left3 />
        </div>
    )
}

function Left3(props){
    // function f(state){
    //     return state.number;
    // }
    // const number = useSelector(f);
    const number = useSelector((state)=>state.number);
    return(
        <div>
            <h1>Left3: {number} </h1>
        </div>
    )
}

function Right1(props){
    return(
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    )
}

function Right2(props){
    return(
        <div>
            <h1>Right2</h1>
            <Right3 />
        </div>
    )
}

function Right3(props){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3</h1>
            {/* 버튼 눌렀을 때 reducer의 state 값이 변경된다 */}
            <input type='button' value='+' onClick={()=>{
                // 실행 했을 때 약속
                dispatch({type:'PLUS'});
            }}/>

            <input type='button' value='-' onClick={()=>{
                // 실행 했을 때 약속
                dispatch({type:'MINUS'});
            }}/>
        </div>
    )
}