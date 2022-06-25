import styles from './css/App.module.css';
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
        카모마일
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