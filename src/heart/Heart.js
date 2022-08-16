import Header from "../header/Header";
import Navbar from "../nav/Navbar";
import styles from "./css/Heart.module.css";

function Heart() {
    const path = "./img/";
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <Header headerName="찜한 상품"/>
            <Navbar></Navbar>

            <div className={styles.imgcontainer}>
                <img src={require(`${path}heart1.png`)} className={styles.heartimg} alt="noimg"></img>
                <img src={require(`${path}heart2.png`)} className={styles.heartimg} alt="noimg"></img>
                <img src={require(`${path}heart3.png`)} className={styles.heartimg3} alt="noimg"></img>
            </div>

        </div>
    </div>
  );
}
export default Heart;
