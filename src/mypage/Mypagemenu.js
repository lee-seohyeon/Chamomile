import styles from './css/Mypagemenu.module.css';

function Mypagemenu(){
    return(
        <div>
            <div className={styles.content}>회원정보 수정</div>
            <div className={styles.content}>공지사항</div>
            <div className={styles.content}>서비스 이용 약관</div>
            <div className={styles.content}>작성한 리뷰</div>
        </div>
    )

}

export default Mypagemenu;