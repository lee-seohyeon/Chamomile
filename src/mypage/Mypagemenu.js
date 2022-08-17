import styles from "./css/Mypagemenu.module.css";
import { Link } from "react-router-dom";

function Mypagemenu(props) {
	const path = "./img/";
	return (
		<>
			<div className={styles.container}>
				<div className={styles.menu}>
					<div className={styles.content}>{props.title}</div>
					<div className={styles.postgo}> &gt; </div>
				</div>
				<hr className={styles.line}></hr>
			</div>
		</>
	);
}

export default Mypagemenu;
