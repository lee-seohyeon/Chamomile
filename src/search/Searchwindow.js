import Searchbar from "./Searchbar";
import styles from "./css/searchwindow.module.css";
function Searchwindow(){
    return (
        <div clasName={styles.searchwindow}>
            <center><Searchbar></Searchbar></center>
        </div>
    );
};
export default Searchwindow;