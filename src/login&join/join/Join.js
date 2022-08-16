import Back from "../../back/Back";
import styles from "./css/Join.module.css";
import Input from "./Input";
import Snslogin from "../Snslogin";
import Navbar from "../../nav/Navbar";
import { Link } from "react-router-dom";
import Header from "../../header/Header";

function Join() {
  return (
    <div className={styles.b}>
      <div className={styles.container}>
      <Header headerName="회원가입"/>
   
        <hr></hr>
        <div className={styles.startemail}>
          <div className={styles.smalltitle}>이메일</div>

         
          {/* <div className={styles.but}>
              <button className={styles.check}>중복확인</button>
          </div> */}
          <Input data="email"></Input>
          <div className={styles.smalltitle}>비밀번호</div>
          <Input data="password"></Input>
          <Input data="check"></Input>

          <div className={styles.smalltitle}>닉네임</div>
          <Input className={styles.mom} data="nickname"></Input>
        </div>


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
