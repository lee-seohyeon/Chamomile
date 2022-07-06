import styles from "./css/Home.module.css";
import Navbar from "../nav/Navbar";
import Footer from "./Footer";
import Search from "./Search";
import Category from "./Category";
import Test from "./Test";
function Home() {
  const getproducts = async () => {
    const response = await fetch(
      `http://api-chamomile.kro.kr/products/?name=티라미수`
    );
    const json = await response.json();
    console.log(json.data);
  };
  getproducts();
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
          <img
            className={styles.logo}
            src={require("./img/main.png")}
            alt="logo"
          />
          <div className={styles.titletext}>카모마일</div>
        </div>
      </header>
      <Search></Search>
      <Category></Category>
      <Test></Test>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}
export default Home;
