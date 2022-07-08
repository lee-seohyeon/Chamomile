import styles from "./css/Filterpage.module.css"
import Navbar from "../nav/Navbar";
import Back from "../back/Back";

function Boss(){
    const path = "./img/";
    return(
        <> 
        <Navbar></Navbar>
        <div className={styles.background}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <Back className={styles.fake}></Back>
                    <div className={styles.title}>필터</div>
                    <div className={styles.fake}></div>
                </div>

                <div className={styles.subtitle}>종류</div>

                <div className={styles.infobox}>
                    <div className={styles.info}>초코</div>
                    <div className={styles.info}>말차</div>
                    <div className={styles.info}>플레인</div>
                    <div className={styles.info}>얼그레이</div>
                    <div className={styles.info}>레드벨벳</div>
                    <div className={styles.info}>화이트</div>
                    <div className={styles.info}>오트밀</div>
                    <div className={styles.info}>아몬드</div>
                </div>
                    
                    <div className={styles.subtitle}>가격</div>
                    <img src={require("./img/pricebar.png")} alt="alt"></img>

                    <div className={styles.subtitle}>거리</div>
                    <img className={styles.mbar} src={require("./img/mbar.png")} alt="alt"></img>

                    

                    <div className={styles.floor}>
                        <img className={styles.reset} src={require("./img/reset.png")} alt="alt"></img>
                        <div className={styles.select}>선택 완료</div>
                    </div>



            </div>
        </div>

        </> 
    );
}

export default Boss;