import Back from "../../back/Back";
import styles from "./css/Join.module.css";
import Input from "./Input";
import Snslogin from "../Snslogin";
import Navbar from "../../nav/Navbar";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div className={styles.b}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Back></Back>
          <div className={styles.text}>
            <p>맛있는 디저트와</p>
            <p>더 가까워져요 :)</p>
          </div>
        </div>
        <hr></hr>
        <Snslogin inner={"join"}></Snslogin>
        <hr></hr>
        <div className={styles.startemail}>
          <div className={styles.text2}>이메일로 시작하기</div>

          <Input data="nickname"></Input>
          <div className={styles.but}>
              <button className={styles.check}>중복확인</button>
          </div>
          <Input data="email"></Input>
          <Input data="password"></Input>
          <Input data="check"></Input>
        </div>
        <Link to="/mypage" className={styles.link}>
          <div className={styles.submit}>
            확인
            <Navbar></Navbar>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Join;
