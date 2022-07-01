import Searchbar from "./Searchbar";
import styles from "./css/searchwindow.module.css";
import Navbar from "../nav/Navbar";
function Searchwindow(){
    const back=()=>{
        window.history.back();
    }
    return (
        <div className={styles.container}>
        <button className={styles.x}
            onClick={back}>X</button>
        <div className={styles.searchwindow}>
            
            <Searchbar place=""></Searchbar>
            <Navbar></Navbar>
        </div>
        
        </div>
    );
};
export default Searchwindow;