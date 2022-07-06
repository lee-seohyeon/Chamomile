import styles from "./css/Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactus}>Contact Us!</div>
      <div className={styles.firstfloor}>
        <div className={styles.join}>
            <div onClick={() => window.open('https://forms.gle/AVm6kxDwUcvHRP8x8', '_blank')}>내 카페 등록하기</div>
        </div>
      </div>

      <div className={styles.firstfloor}>
        <div className={styles.footermenu}>ⓒ 2022 All rights reserved.</div>
      </div>
    </div>
  );
}
export default Footer;
