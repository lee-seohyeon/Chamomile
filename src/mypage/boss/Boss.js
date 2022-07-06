import styles from "./css/Boss.module.css"
import Navbar from "../../nav/Navbar"
import Back from "../../back/Back";

function Boss(){
    const path = "./img/";
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

                <div className={styles.subtitle}>영업 관리</div>

                    <div className={styles.floor}>
                        <div className={styles.subtext}>가게 이름</div>
                        <div className={styles.info}>카모마일</div>
                    </div>

                    <div className={styles.floor}>
                        <div className={styles.subtext}>전화번호</div>
                        <div className={styles.info}>02-123-4567</div>
                    </div>
                    
                    <div className={styles.subtext}>주소</div>
                    <div className={styles.info}>서울시 동작구 흑석동 123-45</div>

                    <div className={styles.subtext}>영업일</div>
                    <div className={styles.info}>
                        월~금 11:00 ~ 22:00 <br></br>
                        토 11:00 ~ 22:00 <br></br>
                        일요일 휴무
                    </div>

{/* 메뉴 등록 수정 */}
                <div className={styles.subtitlebox}>
                    <div className={styles.subtitle}>메뉴 등록/수정</div>
                    <div className={styles.addbox}>
                        <img src={require(`${path}addicon.png`)} className={styles.addiconimg} alt="noimg"></img>
                        <div className={styles.add}>추가하기</div>
                    </div>
                </div>

                <div className={styles.imgbox}>
                    <img src={require(`${path}boss1.png`)} className={styles.bossimg} alt="noimg"></img>
                    <img src={require(`${path}boss2.png`)} className={styles.bossimg} alt="noimg"></img>
                    <img src={require(`${path}boss3.png`)} className={styles.bossimg} alt="noimg"></img>
                    <img src={require(`${path}boss4.png`)} className={styles.bossimg} alt="noimg"></img>
                    <img src={require(`${path}boss5.png`)} className={styles.bossimg} alt="noimg"></img>
                    <img src={require(`${path}boss6.png`)} className={styles.bossimg} alt="noimg"></img>
                </div>

            </div>
        </div>

        </> 
    );
}

export default Boss;