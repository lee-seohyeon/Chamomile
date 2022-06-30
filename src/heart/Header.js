import styles from "./css/header.module.css";
import {Link} from "react-router-dom";
import Back from "../back/Back";
function Header(){
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.back}><Back></Back></div>
                <div className={styles.title}>찜한목록</div>
                <Link to="/" className={styles.link}><div className={styles.home}>🏠</div></Link>
            </header>
            <section>
                <div className={styles.information}>찜한 상품 n개</div>
                <select>
                    <option>리뷰많은순</option>
                    <option>거리순</option>
                    <option>낮은가격순</option>
                    <option>높은가격순</option>
                </select>
            </section>
            <hr></hr>
        </div>
    );
}
export default Header;