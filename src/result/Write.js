import styles from "./css/Write.module.css";
import Back from "../back/Back";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
import Tagbutton from "./Tagbutton";

function Write() {
  // 누르면 색깔 바뀌게
  const texture = [
    "# 꾸덕",
    "# 바삭",
    "# 촉촉",
    "# 겉바속촉",
    "# 살살녹음",
    "# 쫀득",
    "# 말랑",
    "# 탱글",
    "# 부드러움 ",
  ];
  const taste = [
    "# 안 달아요",
    "# 독특해요",
    "# 취향저격",
    "# 조화로움",
    "# 쌉싸름",
    "# 고소",
    "# 담백",
    "# 새콤",
    "# 달달",
  ];
  const etc = ["# 가성비", "# 고급짐", "# 비쥬얼", "# 시원", "# 따뜻"];
  const source = ["# 비건", "# 유기농", "# 수제", "# 견과류", "# 토핑맛집"];
  return (
    <>
      <div className={styles.background}>
        <Navbar></Navbar>
        <div className={styles.container}>
          <div className={styles.header}>
            <Back className={styles.fake}></Back>
            <div className={styles.title}>리뷰 작성</div>
            <div className={styles.fake}></div>
          </div>

          <div className={styles.info}>
            디저트와 어울리는 키워드를 골라주세요. (최대 5개)
          </div>

          {/* 식감 */}
          <div className={styles.subtitle}> 식감 </div>
          <div className={styles.contentbox}>
            {texture.map((t) => (
              <Tagbutton text={t}></Tagbutton>
            ))}
          </div>
          {/* 맛 */}
          <div className={styles.subtitle}> 맛 </div>
          <div className={styles.contentbox}>
            {taste.map((t) => (
              <Tagbutton text={t}></Tagbutton>
            ))}
          </div>
          {/* 재료 */}
          <div className={styles.subtitle}> 재료 </div>
          <div className={styles.contentbox}>
            {source.map((t) => (
              <Tagbutton text={t}></Tagbutton>
            ))}
          </div>
          {/* 기타 */}
          <div className={styles.subtitle}> 기타 </div>
          <div className={styles.contentbox}>
            {etc.map((t) => (
              <Tagbutton text={t}></Tagbutton>
            ))}
          </div>

          <div className={styles.contentbox}>
            <div className={styles.content}> + 태그 추가 건의하기</div> 
          </div>

          {/* 사진추가 */}
          <div className={styles.addpic2}>
            <div className={styles.addpic}>
              <img
                className={styles.camera}
                src={require("./img/camera.png")}
                alt="noimg"
              ></img>
              <div className={styles.text1}> 사진 추가 </div>
              <div className={styles.text2}> 최대 5장 </div>
            </div>
          </div>

          <div className={styles.addtext}>
            <p className={styles.text3}>
              {" "}
              디저트에 대해 더 자세한 리뷰를 남기고 싶다면 적어 주세요.{" "}
              <br></br>(최소 5자 이상)
            </p>
          </div>

          <Link to={"/"} className={styles.submit}>
            리뷰 등록
          </Link>
        </div>{" "}
        {/* container 끝 */}
      </div>
    </>
  );
}

export default Write;
