import styles from "./css/Join.module.css";
import Input from "./Input";
import Navbar from "../../nav/Navbar";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Terms from "./Terms";

function Join() {
	return (
		<div className={styles.b}>
			<div className={styles.container}>
				<Header headerName="회원가입" />

				<div className={styles.startemail}>
					<div className={styles.smalltitle}>이메일</div>

					{/* <div className={styles.but}>
              <button className={styles.check}>중복확인</button>
          </div> */}
					<Input data="email"></Input>
					<div className={styles.smalltitle2}>비밀번호</div>
					<Input data="password"></Input>
					<Input data="check"></Input>

					<div className={styles.smalltitle2}>닉네임</div>
					<Input className={styles.mom} data="nickname"></Input>
                    <div className={styles.sametest}>중복확인</div>
				</div>
				<Terms />
				<Link to="/mypage" className={styles.link}>
					<div className={styles.submit}>
						가입하기
						<Navbar></Navbar>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Join;
