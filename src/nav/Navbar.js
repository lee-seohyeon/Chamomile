import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
function Navbar(){
    const path='./img/';
    return(
        <div className={styles.nav}>
            <div className={styles.navitem}>
                <Link to="/" className={styles.link}>
                    <img src={require(`${path}home.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.home}>홈</div>
                </Link>
                <Link to="/location" className={styles.link}>
                    <img src={require(`${path}near.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.location}>내주변</div>
                </Link>

                <Link to="/search" className={styles.link}>
                    <img src={require(`${path}search.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.search}>검색</div>
                </Link>

                <Link to="/heart" className={styles.link}>
                    <img src={require(`${path}heart.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.heart}>찜</div>
                </Link>

                <Link to= "/login" className={styles.link}>
                    <img src={require(`${path}mypage.png`)} className={styles.img} alt="홈"></img>
                    <div className={styles.mypage}>마이페이지</div>
                </Link>
            </div>

        </div>

);
}
export default Navbar;