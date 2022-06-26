import styles from './css/Home.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
import Category from './Category';
import Test from './Test'
function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
        <img src={require("./img/main.png")} alt="카모"/>
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