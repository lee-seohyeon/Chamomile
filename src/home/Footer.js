import styles from'./css/Footer.module.css';
function Footer(){
    return (      
    <div className={styles.footer}>
      <div className={styles.join}>내 가게 등록하기</div>
      <div className={styles.firstfloor}>
        <div className={styles.footermenu}>개인정보처리방침</div>
        <div className={styles.footermenu}>이용약관</div>
      </div>
    </div>
      );
}
export default Footer;