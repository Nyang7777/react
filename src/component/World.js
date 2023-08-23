// 각 컴포넌트가 사용할 css를 만들기
import styles from "./World.module.css";
export default function World(){
    return (
        <div>
            <h2 className={styles.fg}>World</h2>
            <div className={styles.box}>1</div>
        </div>
    )
}