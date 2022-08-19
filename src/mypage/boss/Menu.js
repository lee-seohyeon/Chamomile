import React from "react";
import styles from "./css/Menu.module.css"

const Menu = () => {
    const path = "./img/";
	return (
		<>
			<div className={styles.subtitlebox}>
				<div className={styles.subtitle}>메뉴 등록/수정</div>
				<div className={styles.addbox}>
					<img
						src={require(`${path}addicon.png`)}
						className={styles.addiconimg}
						alt="noimg"
					></img>
					<div className={styles.add}>추가하기</div>
				</div>
			</div>

			<div className={styles.imgbox}>
				<img
					src={require(`${path}boss1.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
				<img
					src={require(`${path}boss2.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
				<img
					src={require(`${path}boss3.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
				<img
					src={require(`${path}boss4.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
				<img
					src={require(`${path}boss5.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
				<img
					src={require(`${path}boss6.png`)}
					className={styles.bossimg}
					alt="noimg"
				></img>
			</div>
		</>
	);
};

export default Menu;
