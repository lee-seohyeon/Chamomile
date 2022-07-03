import styles from "./css/Sort.module.css";
function Sort({ setSort }) {
  const SET = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className={styles.container}>
      <img src={require(`./img/sort.png`)} alt="img"></img>
      <select onChange={SET}>
        <option value="1">가까운 순 </option>
        <option value="2">리뷰 많은 순</option>
        <option value="3">찜 많은 순</option>
        <option value="4">가격 낮은 순</option>
      </select>
    </div>
  );
}
export default Sort;
