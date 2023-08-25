import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";
export default function DayList(){
    // json처럼 반복 처리 할 때는 주로 map을 사용한다
    
    // 날짜가 1인것만 출력
    // filter(): 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 떄 사용한다
    // SQL로 치면 where 조건을 행하는 함수이다
    // url에 포함된 day값을 가져오기 위해서 userParams()
    // userParams()는 라우터에서 제공
    const day = useParams().day;
    console.log(day);
    const wordList = dummy.words.filter(k => k.day === Number(day));

    return(
        <>
        <h2>Day {day}</h2>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용한다 */}
                    {wordList.map(k => (
                        // 컴포넌트에 속성을 부여하는것 -> props
                        <Word word={k} key={k.id}/>
                    ))}
                </tbody>
            </table>
        </>
        
    );
}