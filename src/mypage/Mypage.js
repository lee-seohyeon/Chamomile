import styles from "./css/Mypage.module.css";
import Navbar from "../nav/Navbar";
import Mypagemenu from "./Mypagemenu";
import Header from "../header/Header";
import Mypageprof from "./Mypageprof";
import { Link } from "react-router-dom";

function Mypage() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<Header headerName="마이페이지" />
				<Navbar />

				<Mypageprof />

				<Mypagemenu title="이벤트" />

				<Link to="/Service">
					<Mypagemenu title="자주 묻는 질문" />
					<Mypagemenu title="1:1 문의" />
				</Link>

				<Link to="/Announce">
					<Mypagemenu title="공지사항" />
				</Link>

				<Link to="/login">
					<Mypagemenu title="로그아웃" />
				</Link>

				<Link to="/Boss">
					<Mypagemenu title="내 가게 관리" />
				</Link>
                
			</div>
		</div>
	);
}

export default Mypage;
