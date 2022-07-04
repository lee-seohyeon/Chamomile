import Back from "../../back/Back";
import styles from "./css/Login.module.css";
import Input from "./Input";
import Snslogin from "../Snslogin";
import {Link} from "react-router-dom";
import Navbar from "../../nav/Navbar"

function Login(){
    return(
        <div className={styles.b}>
            <div className={styles.container}>
                <div className={styles.header}>
                <div className={styles.back}><Back></Back></div>
                <div className={styles.title}>카모마일</div>
                <div className={styles.fake}></div>
                </div>
                <div className={styles.input}>
                <Input 
                data={"inemail"}></Input>
                <Input
                data={"inpassword"}></Input>
                </div>
                <div className={styles.emailsave}>
                    <input type="checkbox" id="emailcheck"></input>
                    <label htmlFor="emailcheck">이메일 저장</label>
                </div>
                <div className={styles.submit}>로그인</div>
                <div className={styles.find}>
                <div className={styles.findemail}>
                    이메일 찾기</div>| <div className={styles.findpassword}>비밀번호 찾기</div>
                </div>
                <hr></hr>
                <Snslogin></Snslogin>
                <hr></hr>
                <div className={styles.text}>
                   매일 맛있는 디저트를 즐기고 싶다면?
                   <Navbar></Navbar>
                   <div className={styles.join}><Link to="/join" className={styles.link}>회원가입</Link></div> 
                
                </div>
                
            </div>
        </div>
    )

}

export default Login;
