import Searchbar from "./Searchbar";
import styles from "./css/searchwindow.module.css";
import Navbar from "../nav/Navbar";
import Back from "../back/Back";
function Searchwindow() {
  const back = () => {
    window.history.back();
  };
  return (
    <div className={styles.container}>
      <Back></Back>
      <Searchbar place=""></Searchbar>
      <Navbar></Navbar>
    </div>
  );
}
export default Searchwindow;
