import styles from "./css/Story.module.css";

function Story() {
  const path = "./img/";
  return (
    <>
        <div className={styles.subtitle}>지금 여기!</div>
        <div className={styles.heretext}>200m 이내 먹을 수 있는 인기 디저트</div>

        <img src={require(`${path}here-1.png`)} className={styles.hereimg} alt="noimg"></img>
        <img src={require(`${path}here-2.png`)} className={styles.hereimg} alt="noimg"></img>
        <img src={require(`${path}here-3.png`)} className={styles.hereimg} alt="noimg"></img>


        <div className={styles.subtitle}>이번 달 우리 동네 이야기 왜안돼</div>
        <img src={require(`${path}story.png`)} className={styles.storyimg} alt="noimg"></img>

        <hr></hr>
    </>
  )
}

export default Story;
