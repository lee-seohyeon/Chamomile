import React from "react";
import Back from "../back/Back";
import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.back}>
					<Back></Back>
				</div>
				<div className={styles.title}>{props.headerName}</div>
				<div className={styles.fake}></div>
			</div>

            {/* <div className={styles.titletest}>가운데</div> */}
		</>
	);
};

export default Header;
