import styles from "./css/Review.module.css";

function Review(){
    const path = "./img/";
    return(
        <>
            <div className={styles.titlebox}>
                <p className={styles.title}>후기</p>
                <div className={styles.writebox}>
                    <img src={require(`${path}pencil.png`)} className={styles.pencilimg} alt="noimg"></img>
                    <p className={styles.write}>작성하기</p>
                </div>
            </div>


            <p className={styles.title}>이 가게 다른 메뉴 보기</p>

        </>
    );
}

export default Review;