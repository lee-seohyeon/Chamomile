import styles from "./css/Write.module.css";
import Back from "../back/Back";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";


function Write(){
    const path = "./img/";
    return(
        <>
            <div className={styles.background}>
            <Navbar></Navbar>
                <div className={styles.container}>

                    <div className={styles.header}>
                        <Back className={styles.fake}></Back>
                        <div className={styles.title}>리뷰 작성</div>    
                        <div className={styles.fake}></div>
                    </div>
                
                    <div className={styles.info}>디저트와 어울리는 키워드를 골라주세요. (최대 5개)</div>

                    <div className={styles.texture}> 식감 </div>
                    <div className={styles.contentbox}>
                        <div className={styles.content}># 꾸덕 </div>
                        <div className={styles.content}># 바삭 </div>
                        <div className={styles.content}># 촉촉 </div>
                        <div className={styles.content}># 겉바속촉 </div>
                        <div className={styles.content}># 살살녹음 </div>
                        <div className={styles.content}># 쫀득 </div>
                        <div className={styles.content}># 말랑 </div>
                        <div className={styles.content}># 탱글 </div>
                        <div className={styles.content}># 부드러움 </div>
                    </div>

                    <div className={styles.addpic}>
                        <img className={styles.camera} src={require("./img/camera.png")} alt="noimg"></img>
                        <div className={styles.text1}> 사진 추가 </div>
                        <div className={styles.text2}> 최대 5장 </div>
                    </div>

                    <div className={styles.addtext}>
                        <p className={styles.text3}> 디저트에 대해 더 자세한 리뷰를 남기고 싶다면 적어 주세요. </p>
                        <p className={styles.text3}> (최소 5자 이상) </p>
                    </div>

                    <Link to={"/"} className={styles.submit}>
                        리뷰 등록
                    </Link>

                </div> {/* container 끝 */}
            </div>

           
        </>
    );
}

export default Write;