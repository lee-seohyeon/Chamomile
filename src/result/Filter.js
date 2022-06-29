import styles from "./css/Filter.module.css";
function Filter(){
    return (
        <div className={styles.filter}><img src={require(`./img/filter.png`)} alt="alt"></img></div>
    );
}
export default Filter;