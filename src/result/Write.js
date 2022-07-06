import styles from "./css/Write.module.css";
import Back from "../back/Back";
import Navbar from "../nav/Navbar";


function Write(){
    return(
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.header}>
                    <Back className={styles.fake}></Back>
                    <div className={styles.title}>리뷰쓰기</div>    
                    <div className={styles.fake}></div>
                    </div>
                </div>
                <Navbar></Navbar>
                </div>
        </>
    );
}

export default Write;