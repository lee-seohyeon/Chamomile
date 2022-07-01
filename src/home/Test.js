import styles from "./css/Test.module.css";
import { Link } from "react-router-dom";
function Test() {
  return (
    <div className={styles.test}>
      <div className={styles.mbtitest}>나와 가장 어울리는 디저트는 ?</div>
      <Link to="/roulette" className={styles.random}>
        돌려 돌려 디저트 룰렛 ~ 😋
      </Link>
    </div>
  );
}
export default Test;
