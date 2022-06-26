import styles from './css/Mypage.module.css';
import Navbar from "../home/Navbar";
import Login from './Login';
import Mypagemenu from './Mypagemenu';
import {Link} from 'react-router-dom';

function Mypage(){
    return (
        <div className={styles.container}>
        {/* 여기 안에만 넣자 */}

            <div>
                <header>
                    <div className={styles.title}>마이페이지다</div>
                </header>
                <hr></hr>
                <Link to= "/login" className={styles.link}><div className={styles.mypage}>로그인</div></Link>
                <hr></hr>
                <Navbar></Navbar>
                <Mypagemenu></Mypagemenu>
            </div>

        {/* 여기 안에만 넣자 */}
        </div> 
    );
}

export default Mypage;