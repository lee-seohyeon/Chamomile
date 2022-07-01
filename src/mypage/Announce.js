import Navbar from "../nav/Navbar";
import styles from "./css/Announce.module.css";
import Back from "../back/Back";


function Announce() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.header}>
                <Back className={styles.fake}></Back>
                <div className={styles.title}>공지사항</div>
                <div className={styles.fake}></div>
            </div>
            <hr></hr>

            <div className={styles.postcontainer}>
                <p className={styles.posttitle}>개인정보처리방침 개정 안내</p>
                <p className={styles.postdate}>2022.06.23</p>
                <hr className={styles.postline}></hr>
            </div>

        </div>
        <Navbar></Navbar>
    </div>
  );
}
export default Announce;