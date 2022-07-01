import styles from "./css/header.module.css";
import { Link } from "react-router-dom";
import Back from "../back/Back";
function Header() {
  return (
    <div className={styles.container}>
      <header>
        <Back className={styles.back}></Back>
        <div className={styles.title}>찜한목록</div>
        <div className={styles.fake}></div>
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
      여기에~~~ 찜한 상품 목록이 드도록 합시다 여기에~~~ 찜한 상품 목록이 드도록
      합시다여기에~~~ 찜한 상품 목록이 드도록 합시다
    </div>
  );
}
export default Header;
