import Header from "./Header";
import Navbar from "../nav/Navbar";
import styles from "./css/Heart.module.css";
// import Product from "../result/Product";

function Heart() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <Header></Header>
            <Navbar></Navbar>
        </div>
    </div>
  );
}
export default Heart;
