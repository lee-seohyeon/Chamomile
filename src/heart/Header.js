import styles from "./css/header.module.css";
import {Link} from "react-router-dom";
function Header(){
    const back=()=>{
        window.history.back();
    }
    return (
        <div>
            <header>
                <div className={styles.back}
                onClick={back}>⇦</div>
                <div className={styles.title}>찜한목록</div>
                <Link to="/" className={styles.link}><div className={styles.home}>🏠</div></Link>
            </header>
            <section>
                <div className={styles.information}>찜한 상품 n개</div>
                <select>
                    <option>담은순</option>
                    <option>가격순</option>
                </select>
            </section>
        </div>
    );
}
export default Header;