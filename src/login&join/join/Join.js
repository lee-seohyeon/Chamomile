import Back from "../../back/Back";
import styles from "./css/Join.module.css";
import Input from "./Input";
import Snslogin from "../Snslogin";
import Navbar from "../../nav/Navbar";
function Join(){
    return(
        <div className={styles.b}>
            <div className={styles.container}>
            <div className={styles.head}>
            <Back></Back>
            <div className={styles.text}><p>맛있는 디저트와</p><p>더 가까워져요 :)</p></div>
            </div>
            <hr></hr>
            <Snslogin></Snslogin>
            <hr></hr>
            <div className={styles.startemail}>
            <div className={styles.text2}>이메일로 시작하기</div>
            <Input data="nickname"></Input>
            <Input data="email"></Input>
            <Input data="password"></Input>
            <Input data="check"></Input>
            </div>
            <div className={styles.submit}>
                확인
                <Navbar>g</Navbar>
            </div>
        </div>
        </div>
    )

}

export default Join;
