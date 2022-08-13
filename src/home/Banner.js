import React from "react";
import styles from "./css/Banner.module.css";
const Banner = () => {
	return (
		<>
			<img
				className={styles.bannerimg}
				src={require("./img/bannerimg-1.png")}
				alt="logo"
			/>
		</>
	);
};

export default Banner;
