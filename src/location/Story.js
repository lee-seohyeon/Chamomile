import styles from "./css/Story.module.css";

function Story() {
  const path = "./img/";
  return (
    <>
        <div className={styles.subtitle}>지금 여기!</div>
        <div className={styles.heretext}>200m 이내 먹을 수 있는 인기 디저트</div>

        <div className={styles.imgbox}>
            <img src={require(`${path}here-1.png`)} className={styles.hereimg} alt="noimg"></img>
            <img src={require(`${path}here-2.png`)} className={styles.hereimg} alt="noimg"></img>
            <img src={require(`${path}here-3.png`)} className={styles.hereimg} alt="noimg"></img>
        </div>

        <div className={styles.subtitle}>이번 달 우리 동네 이야기</div>
        <div className={styles.cucubox}>
            <img src={require(`${path}story.png`)} className={styles.storyimg} alt="noimg"></img>
            <div className={styles.cucutextbox}>
                <div className={styles.cucutext}>2022.07</div>
                <div className={styles.cucutext2}>쿠쿠와 시작한 새로운 삶</div>
                <div className={styles.cucutext}> [ Hi, there ] 의 김마일 사장님</div>
                <div className={styles.cucutext3}> 베이커리 [ Hi, there ] 의 인기스타 쿠쿠!</div>
                <div className={styles.cucutext4}> 쿠쿠와 인연을 시작하게 된 사장님의 이야기를 들어보세요 :)</div>
            </div>
        </div>

        <hr></hr>
        <div className={styles.newimgbox}>
            <img src={require(`${path}new1.png`)} className={styles.newimg} alt="noimg"></img>
            <img src={require(`${path}new2.png`)} className={styles.newimg} alt="noimg"></img>
        </div>
        
    </>
  )
}

export default Story;
