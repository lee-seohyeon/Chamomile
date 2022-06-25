import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Sort from "./Sort";
import Navbar from "../home/Navbar";
function Result(){
    const {text}=useParams();
    console.log({text});
    return (
        <div>
            <Searchbar place={text}></Searchbar>
            <Sort></Sort>
            <Navbar></Navbar>
        </div>
    );
}
export default Result;