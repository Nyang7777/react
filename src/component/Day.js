import dummy from "../db/data.json"
export default function DayList(){
    console.log(dummy);
    // json처럼 반복 처리 할 때는 주로 map을 사용한다

    // 날짜가 1인것만 출력
    // filter(): 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 떄 사용한다
    // SQL로 치면 where 조건을 행하는 함수이다
    const day = 3;
    const wordList = dummy.words.filter(k => k.day === day);

    return(
        <>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용한다 */}
                    {wordList.map(k => (
                    <tr key={k.id}>
                        <td>{k.eng}</td>
                        <td>{k.kor}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}