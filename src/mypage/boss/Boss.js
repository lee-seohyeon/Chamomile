import styles from "./css/Boss.module.css";
import Navbar from "../../nav/Navbar";
import Header from "../../header/Header";
import Sales from "./Sales";
import { useState } from "react";
import Menu from "./Menu";

function Boss() {
	const [Clicked, setClicked] = useState(true);

	return (
		<>
			<Navbar></Navbar>
			<div className={styles.background}>
				<div className={styles.container}>
					<Header headerName="내 가게 관리" />

					{/* topnav */}
					<div className={styles.dom}>
						<div className={styles.navdom}>
							<div className={styles.text} onClick={() => setClicked(true)}>
								영업 관리
							</div>
							<hr />
						</div>

						<div className={styles.navdom}>
							<div className={styles.text} onClick={() => setClicked(false)}>
								메뉴 관리
							</div>
							<hr />
						</div>
					</div>

					{Clicked ? <Sales /> : null}
					{!Clicked ? <Menu /> : null}
				</div>
			</div>
		</>
	);
}

export default Boss;
