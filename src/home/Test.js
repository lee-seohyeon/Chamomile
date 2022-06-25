import styles from "./css/Test.module.css";
function Test(){
    return (
<div className={styles.test}>
        <div className={styles.mbtitest}>성격테스트</div>
        <div className={styles.random}>룰렛</div>
      </div>
    );
}
export default Test;