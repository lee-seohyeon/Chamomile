import React from "react";
import styles from "./css/Sales.module.css"

const Sales = () => {
	return (
		<>
			<div>Sales</div>
			<div className={styles.floor}>
				<div className={styles.subtext}>가게 이름</div>
				<div className={styles.info}>카모마일</div>
			</div>

			<div className={styles.floor}>
				<div className={styles.subtext}>전화번호</div>
				<div className={styles.info}>02-123-4567</div>
			</div>

			<div className={styles.floor}>
				<div className={styles.subtext2}>주소</div>
				<div className={styles.info}>서울시 동작구 흑석동 123-45</div>
			</div>

			<div className={styles.floor}>
				<div className={styles.subtext}>영업일</div>
				<div className={styles.info2}>
					월~금 11:00 ~ 22:00 <br></br>토 11:00 ~ 22:00 <br></br>
					일요일 휴무
				</div>
			</div>
		</>
	);
};

export default Sales;
