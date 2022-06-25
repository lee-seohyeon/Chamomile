import { useParams } from "react-router-dom";
import Searchbar from "../search/Searchbar";
import Sort from "./Sort";
function Result(){
    const {text}=useParams();
    console.log({text});
    return (
        <div>
            <Searchbar place={text}></Searchbar>
            <Sort></Sort>
        </div>
    );
}
export default Result;