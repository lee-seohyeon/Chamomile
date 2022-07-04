import styles from "./css/header.module.css";
// import { Link } from "react-router-dom";
import Back from "../back/Back";
function Header() {
  const path = "./img/";
  return (
    <div className={styles.container}>
      <header>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>찜한 메뉴</div>
          <img src={require(`${path}menu.png`)} className={styles.menuimg} alt="noimg"></img>
      </header>

      <img src={require(`${path}category.png`)} className={styles.categoryimg} alt="noimg"></img>
      <img src={require(`${path}folder.png`)} className={styles.folderimg} alt="noimg"></img>

      {/* <section>
        <select>
          <option>리뷰많은순</option>
          <option>거리순</option>
          <option>낮은가격순</option>
          <option>높은가격순</option>
        </select>
      </section> */}

    </div>
  );
}
export default Header;
