import styles from "./css/Mypagemenu.module.css";
import { Link } from "react-router-dom";

function Mypagemenu() {
  const path = "./img/";
  return (
    <div className={styles.container}>

        <div className={styles.menu}>
            <div className={styles.content}>내가 쓴 리뷰</div>
            <div className={styles.postgo}> &gt; </div>
        </div>
        <hr className={styles.line}></hr>

        <div className={styles.menu}>
            <div className={styles.content}>회원정보 수정</div>
            <div className={styles.postgo}> &gt; </div>
        </div>
        <hr className={styles.line}></hr>
        

        <div className={styles.menu}>
            <div className={styles.content}>이벤트</div>
            <div className={styles.postgo}> &gt; </div>
        </div>
        <hr className={styles.line}></hr>

        <Link to="/Announce">
            <div className={styles.menu}>
            <div className={styles.content}>공지사항</div>
            <div className={styles.postgo}> &gt; </div>
            </div>
        </Link>
        <hr className={styles.line}></hr>

        <Link to="/Service">
            <div className={styles.menu}>
            <div className={styles.content}>고객센터</div>
            <div className={styles.postgo}> &gt; </div>
            </div>
        </Link>
        <hr className={styles.line}></hr>


        <Link to="/login">
            <div className={styles.menu}>
            <div className={styles.content}>로그아웃</div>
            <div className={styles.postgo}> &gt; </div>
            </div>
        </Link>
    </div>
  );
}

export default Mypagemenu;
