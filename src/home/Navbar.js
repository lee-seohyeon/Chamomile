import styles from './css/Navbar.module.css';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div className={styles.nav}>
        <Link to="/" className={styles.link}><div className={styles.home}>홈</div></Link>
        <Link to="/" className={styles.link}><div className={styles.location}>내주변</div></Link>
        <Link to="/search" className={styles.link}><div className={styles.search}>검색</div></Link>
        <Link to="/heart" className={styles.link}><div className={styles.heart}>찜</div></Link>
        <Link to= "/mypage" className={styles.link}><div className={styles.mypage}>마이페이지</div></Link>
        </div>
);
}
export default Navbar;