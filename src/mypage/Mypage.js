import styles from './css/Mypage.module.css';
import Navbar from "../nav/Navbar";
import Mypagemenu from './Mypagemenu';
import {Link} from 'react-router-dom';

function Mypage(){
    return (
        <div className={styles.container}>
        {/* 여기 안에만 넣자 */}
                <div className={styles.title}>마이페이지다</div>
                <Link to= "/login" className={styles.link}><div className={styles.login}>로그인/회원가입</div></Link>
                <Navbar></Navbar>
                <Mypagemenu></Mypagemenu>
        {/* 여기 안에만 넣자 */}
        </div> 
    );
}

export default Mypage;