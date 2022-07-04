import styles from "./css/Test.module.css";
import { Link } from "react-router-dom";
function Test() {
  return (
    <div className={styles.test}>
      <Link to="/mbtitest" className={styles.mbtitest}>
        <div className={styles.title}>디저트 테스트</div>
        <div className={styles.text}>
          <p>나를 표현한다면</p> <p>어떤 디저트일까?</p>
        </div>
        <img src={require(`./img/thinking.png`)} alt="d" />
      </Link>
      <Link to="/roulette" className={styles.random}>
        <div className={styles.title}>디저트 룰렛</div>
        <div className={styles.text}>
          <p>뭐 먹을지 고민되면,</p>
          <p>돌려돌려~</p>
        </div>
        <img src={require(`./img/bet.png`)} alt="d" />
      </Link>
    </div>
  );
}
export default Test;
