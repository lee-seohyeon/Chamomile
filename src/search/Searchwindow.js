import Searchbar from "./Searchbar";
import styles from "./css/searchwindow.module.css";
function Searchwindow(){
    const back=()=>{
        window.history.back();
    }
    return (
        <div>
        <button className={styles.x}
            onClick={back}>X</button>
        <div className={styles.searchwindow}>
            
            <Searchbar place=""></Searchbar>
        </div>
        </div>
    );
};
export default Searchwindow;