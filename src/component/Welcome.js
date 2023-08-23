// 람다식 function
import style from "./Welcome.module.css";
const Welcome = () => {
    return(
        <div>
            <h2 className={style.fg}>Welcome</h2>
            <h2 className={style.box}></h2>
        </div>
    )
}

export default Welcome;