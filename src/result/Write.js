import styles from "./css/Write.module.css";
import Back from "../back/Back";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Write(){
    const path = "./img/";
// 누르면 색깔 바뀌게
    const [color, setcolor] = useState("white");
    const [like, islike] = useState(false);
    useEffect(() => {
        like ? setcolor("#F9E183 ") : setcolor("white");
      }, [like]);

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

{/* 식감 */}
                    <div className={styles.subtitle}> 식감 </div>
                    <div className={styles.contentbox}>
                        <div className={styles.content} style={{ backgroundColor: `${color}` }} onClick={() => {like ? islike(false) : islike(true);}}># 꾸덕 </div>
                        <div className={styles.content}># 바삭 </div>
                        <div className={styles.content}># 촉촉 </div>
                        <div className={styles.content}># 겉바속촉 </div>
                        <div className={styles.content}># 살살녹음 </div>
                        <div className={styles.content}># 쫀득 </div>
                        <div className={styles.content}># 말랑 </div>
                        <div className={styles.content}># 탱글 </div>
                        <div className={styles.content}># 부드러움 </div>
                    </div>
{/* 맛 */}
                    <div className={styles.subtitle}> 맛 </div>
                    <div className={styles.contentbox}>
                        <div className={styles.content}># 안 달아요 </div>
                        <div className={styles.content}># 독특해요 </div>
                        <div className={styles.content}># 취향저격 </div>
                        <div className={styles.content}># 조화로움 </div>
                        <div className={styles.content}># 쌉싸름 </div>
                        <div className={styles.content}># 고소 </div>
                        <div className={styles.content}># 담백 </div>
                        <div className={styles.content}># 새콤 </div>
                        <div className={styles.content}># 달달 </div>
                    </div>
{/* 재료 */}
                    <div className={styles.subtitle}> 재료 </div>
                    <div className={styles.contentbox}>
                        <div className={styles.content}># 비건 </div>
                        <div className={styles.content}># 유기농 </div>
                        <div className={styles.content}># 수제 </div>
                        <div className={styles.content}># 견과류 </div>
                        <div className={styles.content}># 토핑맛집 </div>
                    </div>
{/* 기타 */}
                    <div className={styles.subtitle}> 기타 </div>
                    <div className={styles.contentbox}>
                        <div className={styles.content}># 가성비 </div>
                        <div className={styles.content}># 고급짐 </div>
                        <div className={styles.content}># 비쥬얼 </div>
                        <div className={styles.content}># 시원 </div>
                        <div className={styles.content}># 따뜻 </div>
                    </div>
                    
{/* 사진추가 */}
                    <div className={styles.addpic2}>
                    <div className={styles.addpic}>
                        <img className={styles.camera} src={require("./img/camera.png")} alt="noimg"></img>
                        <div className={styles.text1}> 사진 추가 </div>
                        <div className={styles.text2}> 최대 5장 </div>
                    </div>
                    </div>

                    <div className={styles.addtext}>
                        <p className={styles.text3}> 디저트에 대해 더 자세한 리뷰를 남기고 싶다면 적어 주세요. <br></br>(최소 5자 이상)</p>
                    </div>

                    <Link to={"/"} className={styles.submit}>
                        리뷰 등록
                    </Link>

                    <div className={styles.likebutton} style={{ backgroundColor: `${color}` }} onClick={() => {like ? islike(false) : islike(true);}}> 
                        가나다라마바사
                    </div>

                </div> {/* container 끝 */}
            </div>

           
        </>
    );
}

export default Write;