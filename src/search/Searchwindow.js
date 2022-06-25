import Searchbar from "./Searchbar";
import styles from "./css/searchwindow.module.css";
function Searchwindow(){
    return (
        <div className={styles.searchwindow}>
            <Searchbar place=""></Searchbar>
        </div>
    );
};
export default Searchwindow;