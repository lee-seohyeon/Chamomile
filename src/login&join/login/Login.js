import Back from "../../back/Back";
import styles from "./css/Login.module.css";
import Input from "./Input";
import Snslogin from "../Snslogin";
import { Link } from "react-router-dom";
import Navbar from "../../nav/Navbar";
import Header from "../../header/Header";

function Login() {
	return (
		<div className={styles.b}>
			<div className={styles.container}>
                <Header headerName="로그인"/>
				
				<div className={styles.smalltitle}>이메일</div>
				<div className={styles.input}>
					<Input data={"inemail"}></Input>
				</div>
				<div className={styles.smalltitle}>비밀번호</div>
				<div className={styles.input}>
					<Input data={"inpassword"}></Input>
				</div>

				<div className={styles.emailsave}>
					<input type="checkbox" id="emailcheck"></input>
					<label htmlFor="emailcheck">이메일 저장</label>
				</div>
				<div className={styles.submit}>로그인</div>
				<div className={styles.find}>
					<div className={styles.findemail}>이메일 찾기</div>|{" "}
					<div className={styles.findpassword}>비밀번호 찾기</div> |{" "}
					<Link to="/join" className={styles.link}>
						<div className={styles.findpassword}>회원가입</div>
					</Link>
				</div>

				<Snslogin inner={"login"}></Snslogin>
				<hr></hr>
				<div className={styles.text}>
					<Navbar></Navbar>
					<div className={styles.join}>
						<Link to="/join" className={styles.link}></Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
