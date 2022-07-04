import styles from "./css/Mypage.module.css";
import Navbar from "../nav/Navbar";
import Mypagemenu from "./Mypagemenu";
// import { Link } from "react-router-dom";
import Back from "../back/Back";

function Mypage() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>마이페이지</div>
          <div className={styles.fake}></div>
        </div>

        <Navbar></Navbar>
        <Mypagemenu></Mypagemenu>
      </div>
    </div>
  );
}

export default Mypage;
