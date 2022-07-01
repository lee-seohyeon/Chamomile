import styles from "./css/Test.module.css";
import { Link } from "react-router-dom";
function Test(){
    return (
<div className={styles.test}>
        <Link to="/mbtitest/Mbtitest" className={styles.mbtitest}>
            <div>나와 가장 어울리는 디저트는 ?</div>
        </Link>
        <div className={styles.random}>돌려 돌려 디저트 룰렛 ~ 😋 </div>
      </div>
    );
}
export default Test;