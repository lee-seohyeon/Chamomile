import styles from './css/Mypagemenu.module.css';

function Mypagemenu(){
    const path='./img/';
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                    <img src={require(`${path}infoedit.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.content}>회원정보 수정</div>
            </div>

            <div className={styles.menu}>
                    <img src={require(`${path}announce.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.content}>공지사항</div>
            </div>

            <div className={styles.menu}>
                    <img src={require(`${path}call.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.content}>고객센터</div>
            </div>

            <div className={styles.menu}>
                    <img src={require(`${path}review.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.content}>작성한 리뷰</div>
            </div>
        </div>
    )

}

export default Mypagemenu;