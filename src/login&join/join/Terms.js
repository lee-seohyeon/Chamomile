import React from "react";
import styles from "./css/Terms.module.css"

const Terms = () => {
	return (
		<>
			<div className={styles.flexdom}>
				<input type="checkbox" id="emailcheck"></input>
				<div className={styles.terms}>아래 약관에 모두 동의합니다.</div>
			</div>
			<hr />
			<div className={styles.flexdom}>
				<input type="checkbox"></input>
				<div className={styles.terms}>(필수) 이용약관</div>
			</div>
			<div className={styles.flexdom}>
				<input type="checkbox" id="emailcheck"></input>
				<div className={styles.terms}>(필수) 개인정보 수집 및 이용 안내</div>
			</div>
			<div className={styles.flexdom}>
				<input type="checkbox" id="emailcheck"></input>
				<div className={styles.terms}>(선택) 마케팅 정보 수신 동의</div>
			</div>
		</>
	);
};

export default Terms;
