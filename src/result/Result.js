import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Sort from "./Sort";
import Navbar from "../nav/Navbar";
import styles from "./css/Result.module.css";
function Result(){
    const {text}=useParams();
    console.log({text});
    return (
        <div className={styles.container}>
            <Searchbar place={text}></Searchbar>
            <Navbar></Navbar>
            <Sort></Sort>
        </div>
    );
}
export default Result;