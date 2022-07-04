import styles from "./Snslogin.module.css";
function Snslogin(){
    const path='./img/';
    return(
    <div>
        <div className={styles.title}>SNS 계정 간편 로그인</div>
        <div className={styles.logos}>
            <div className={styles.kakao}><img src={require(`${path}kakao.png`)} className={styles.img} alt="카카오"></img></div>
            <div className={styles.naver}><img src={require(`${path}naver.png`)} className={styles.img} alt="네이버"></img></div>
            <div className={styles.google}><img src={require(`${path}google.png`)} className={styles.img} alt="구글"></img></div>
            <div className={styles.apple}><img src={require(`${path}apple.png`)} className={styles.img} alt="애플"></img></div>
        </div>
    </div>
    );
}
export default Snslogin;