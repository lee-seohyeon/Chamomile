import Navbar from "../nav/Navbar";
import styles from "./css/Announce.module.css";


function Announce() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            공지사항
            <Navbar></Navbar>
        </div>
    </div>
  );
}
export default Announce;