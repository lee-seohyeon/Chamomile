import styles from "./css/Snslogin.module.css";
function Snslogin(){
    const path='./img/';
    return(
    <div>
        <div className={styles.title}>SNS 계정으로 시작하기</div>
        <div className={styles.logos}>
            <div className={styles.kakao}><img src={require(`${path}kakao.png`)} className={styles.img} alt="카카오"></img>카카오</div>
            <div className={styles.naver}><img src={require(`${path}naver.png`)} className={styles.img} alt="네이버"></img>네이버</div>
            <div className={styles.google}><img src={require(`${path}google.png`)} className={styles.img} alt="구글"></img>구글</div>
            <div className={styles.apple}><img src={require(`${path}apple.png`)} className={styles.img} alt="애플"></img>애플</div>
        </div>
    </div>
    );
}
export default Snslogin;