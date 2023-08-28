// toolkit 설치 npm install @reduxjs/toolkit
// 마찬가지로 오류 생기면 npm install react-router-dom --save, npm install react-redux, npm install redux react-redux
// slice를 만든다 - 하나의 store가 아니라 기능단위의 작은 store
// Toolkit이 작은 store가 합쳐져서 redux가 요구하는 큰 store로 만들어 준다
// slice import

import styles from './Main04.module.css';
// import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';

const plusSlice = createSlice({
    name: 'plusSlice',
    // 초기값
    initialState: {value:100},
    reducers:{
        add :(state,action)=>{
            // state.value = state.value + action.step;
            state.value = state.value + action.payload;
        },
        sub: (state,action)=>{
            // state.value = state.value - action.step;
            state.value = state.value - action.payload;
        }
    }
});

// config store 만들기 reducer 필수
const store = configureStore({
    reducer:{
        add: plusSlice.reducer
    }
});

export default function Main06(){
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

// useSelector
function Left3(props){
    const cnt = useSelector(state => state.add.value);
    return(
        <div>
            <h1>Left3: {cnt} </h1>
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

// 이벤트 발생 const dispatch = useDispatch();
//              dispatch(plusSlice.actions.add(2));
function Right3(props){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3</h1>
            {/* plusSlice step */}
            <input type='button' value='+' onClick={()=>{
                // dispatch({type:'plusSlice/add',step:2});
                // 인자 2는 plusSlice에서는 action.payload라고 지정 돼있다
                dispatch(plusSlice.actions.add(2));
            }}/>
            <input type='button' value='-' onClick={()=>{
                // dispatch({type:'plusSlice/sub',step:2});
                dispatch(plusSlice.actions.sub(5));
            }}/>
        </div>
    )
}