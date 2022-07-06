import styles from "./css/Boss.module.css"
import Navbar from "../../nav/Navbar"
import Back from "../../back/Back";

function Boss(){
    return(
        <> 
        <Navbar></Navbar>
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Back className={styles.fake}></Back>
                    <div className={styles.title}>내 가게 관리</div>
                    <div className={styles.fake}></div>
                </div>
            </div>
        </div>

        </> 
    );
}

export default Boss;