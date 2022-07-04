import styles from "./css/Search.module.css";
import { Link } from "react-router-dom";
function Search() {
  return (
    <div className={styles.searchbar}>
      <Link to="/search" className={styles.link}>
        <div className={styles.search}>
          <div className={styles.text}> 지금 먹고싶은 디저트는? </div>
          <div className={styles.emo}>
            <img src={require(`./img/search.png`)} alt="s"></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Search;
