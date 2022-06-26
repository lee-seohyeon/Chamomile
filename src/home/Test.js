import styles from "./css/Test.module.css";
function Test(){
    return (
<div className={styles.test}>
        <div className={styles.mbtitest}>나와 가장 어울리는 디저트는 ?</div>
        <div className={styles.random}>돌려 돌려 디저트 룰렛 ~ 😋</div>
      </div>
    );
}
export default Test;