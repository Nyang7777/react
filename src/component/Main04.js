import { useState } from "react";
import styles from './Main04.module.css';

export default function Main04(){
    const[number, setNumber] = useState(1);
    return(
        <div id={styles.container}>
           <h1>Root: {number}</h1>
           <div id={styles.grid}>
                {/* 변수값을 전달하기 위해서 props를 사용한다 
                                            컴포넌트에 속성 붙이기*/}
                <Left1 number={number}></Left1>
                <Right1 plus={()=>{
                    setNumber(number+1);
                }}/>
           </div>
        </div>
    );
}

function Left1(props){
    return(
        <div>
            <h1>Left1: {props.number}</h1>
            <Left2 number={props.number}/>
        </div>
    )
}

function Left2(props){
    return(
        <div>
            <h1>Left2: {props.number}</h1>
            <Left3 number={props.number}/>
        </div>
    )
}

function Left3(props){
    return(
        <div>
            <h1>Left3: {props.number}</h1>
        </div>
    )
}

function Right1(props){
    return(
        <div>
            <h1>Right1</h1>
            <Right2 plus={()=>{
                props.plus();
            }}/>
        </div>
    )
}

function Right2(props){
    return(
        <div>
            <h1>Right2</h1>
            <Right3 plus={()=>{
                props.plus();
            }}/>
        </div>
    )
}

function Right3(props){
    return(
        <div>
            <h1>Right3</h1>
            <input type='button' value='+' onClick={()=>{
                // setNumber(number++);
                props.plus();
            }}/>
        </div>
    )
}