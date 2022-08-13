import styles from "./css/Test.module.css";
import { Link } from "react-router-dom";
function Test() {
	return (
		<>
			<hr className={styles.line}></hr>
			<div className={styles.titletext}>즐거움을 한층 더 UP!</div>
			<div className={styles.test}>
				<Link to="/mbtitest" className={styles.mbtitest}>
					<div className={styles.flexcon}>
						<img src={require(`./img/thinking.png`)} alt="d" />
						<div className={styles.subflexcon}>
							<div className={styles.title}>디저트 테스트</div>
							<div className={styles.text}>
								<p>나를 표현한다면 어떤 디저트일까?</p>
							</div>
						</div>
					</div>
				</Link>
				<Link to="/roulette" className={styles.random}>
					<div className={styles.flexcon}>
						<img src={require(`./img/bet.png`)} alt="d" />
						<div className={styles.subflexcon}>
							<div className={styles.title}>디저트 룰렛</div>
							<div className={styles.text}>
								<p>뭐 먹을지 고민되면, 돌려돌려~</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
export default Test;
