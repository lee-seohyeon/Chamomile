import Navbar from "../../nav/Navbar";
import styles from "./css/Announce.module.css";
import Back from "../../back/Back";
import data from "./announce.json";
import Post from "./Post";
function Announce() {
  console.log(data);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back className={styles.fake}></Back>
          <div className={styles.title}>공지사항</div>
          <div className={styles.fake}></div>
        </div>
        <hr></hr>
        {data.map((d, i) => (
          <Post title={d.title} date={d.date} key={i}></Post>
        ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
export default Announce;
