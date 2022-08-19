import React from "react";
import styles from "./css/Mypageprof.module.css";

const Mypageprof = () => {
	const path = "./img/";
	return (
		<>
			<div className={styles.loginimg}>
				<img
					src={require(`${path}prof.png`)}
					className={styles.profimg}
					alt="noimg"
				></img>
				<div className={styles.logintext}>
					<div className={styles.name}>김마일</div>
					<div className={styles.email}>camomile@naver.com</div>
				</div>
			</div>

			<hr />

			<div className={styles.bar}>
				<div className={styles.bardom}>
					<img
						src={require(`${path}recent.png`)}
						className={styles.img}
						alt="noimg"
					></img>
					<div className={styles.barname}>최근 본 상품</div>
				</div>

				<div className={styles.bardom}>
					<img
						src={require(`${path}review.png`)}
						className={styles.img}
						alt="noimg"
					></img>
					<div className={styles.barname}>MY 리뷰</div>
				</div>
				<div className={styles.bardom}>
					<img
						src={require(`${path}scrap.png`)}
						className={styles.img}
						alt="noimg"
					></img>
					<div className={styles.barname}>스크랩</div>
				</div>
			</div>

            <hr/>
		</>
	);
};

export default Mypageprof;
