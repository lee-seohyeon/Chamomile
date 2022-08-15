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
				<hr className={styles.subline}></hr>
				<Link to="/roulette" className={styles.random}>
					<div className={styles.flexcon}>
						<img className={styles.storeimg} src={require(`./img/bet.png`)} alt="d" />
						<div className={styles.subflexcon}>
							<div className={styles.title}>디저트 룰렛</div>
							<div className={styles.text}>
								<p>뭐 먹을지 고민되면, 돌려돌려~</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
			<hr className={styles.line}></hr>

			<div className={styles.titletext}>사장님이세요?</div>

			<div onClick={() => window.open("https://forms.gle/AVm6kxDwUcvHRP8x8", "_blank")}>
				<div className={styles.flexcon2}>
					<img src={require(`./img/store.png`)} alt="d" />
					<div className={styles.subflexcon}>
						<div className={styles.title}>내 가게 등록하기</div>
						<div className={styles.text}>
							<p>카모마일과 새로운 시작을 함께해요!</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Test;
