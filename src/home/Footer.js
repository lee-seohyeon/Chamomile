import styles from'./css/Footer.module.css';
function Footer(){
    return (      
    <footer>
        <div className={styles.contactus}>
          Contact us
        </div>
        <div className={styles.aboutus}>
          About us
        </div>
      </footer>
      );
}
export default Footer;