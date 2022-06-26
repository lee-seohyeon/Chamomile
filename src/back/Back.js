import styles from "./back.module.css"
function Back(){
    const back=()=>{
        window.history.back();
    }
    return(
    <button className={styles.back} onClick={back}>&#60;</button>
    );
}
export default Back;