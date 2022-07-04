import styles from "./css/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactus}>Contact Us!</div>
      <div className={styles.firstfloor}>
        <div className={styles.join}>내 카페 등록하기</div>
      </div>

      <div className={styles.firstfloor}>
        <div className={styles.footermenu}>2022 All rights reserved.</div>
      </div>
    </div>
  );
}
export default Footer;
