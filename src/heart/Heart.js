import Header from "./Header";
import Navbar from "../home/Navbar";
import styles from "./css/Heart.module.css"
function Heart(){
    return(
        <div className={styles.container}>
            <Header></Header>
            <Navbar></Navbar>
        </div>
    );
}
export default Heart;