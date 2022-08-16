import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "../RecoilAtoms/Atoms";
function Navbar() {
  const nav = useRecoilValue(navState);
  const setNav = useSetRecoilState(navState);
  const path = "./img/";
  console.log(nav);
  return (
    <div className={styles.nav}>
      <div className={styles.navitem}>
        <Link
          to="/"
          className={styles.link}
          onClick={() => {
            setNav("home");
          }}
        >
          {nav === "home" ? (
            <img
              src={require(`${path}pressedhome.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          ) : (
            <img
              src={require(`${path}home.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          )}
          <div className={styles.home}>홈</div>
        </Link>
        <Link
          to="/location"
          className={styles.link}
          onClick={() => {
            setNav("location");
          }}
        >
          {nav === "location" ? (
            <img
              src={require(`${path}pressednear.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          ) : (
            <img
              src={require(`${path}near.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          )}
          <div className={styles.location}>내주변</div>
        </Link>

        <Link
          to="/search"
          className={styles.link}
          onClick={() => {
            setNav("search");
          }}
        >
          <img
            src={require(`${path}search.png`)}
            className={styles.img}
            alt="홈"
          ></img>
          <div className={styles.search}>검색</div>
        </Link>

        <Link
          to="/heart"
          className={styles.link}
          onClick={() => {
            setNav("heart");
          }}
        >
          {nav === "heart" ? (
            <img
              src={require(`${path}pressedheart.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          ) : (
            <img
              src={require(`${path}heart.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          )}
          <div className={styles.heart}>찜</div>
        </Link>

        <Link
          to="/login"
          className={styles.link}
          onClick={() => {
            setNav("mypage");
          }}
        >
          {nav === "mypage" ? (
            <img
              src={require(`${path}pressedmypage.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          ) : (
            <img
              src={require(`${path}mypage.png`)}
              className={styles.img}
              alt="홈"
            ></img>
          )}
          <div className={styles.mypage}>마이페이지</div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
