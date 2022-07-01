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
        </div>
    </div>
  );
}
export default Announce;