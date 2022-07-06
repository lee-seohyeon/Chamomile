import styles from "./css/Quizpages.module.css";
import { useState } from "react";
import q from "./contents/Question";
import Questionbox from "./Questionbox";
import Selections from "./Selections";
import Result from "./Result";
import Navbar from "../nav/Navbar";
function Quizpages() {
  const [page, setpage] = useState(1);
  const [mbti, setmbti] = useState([0, 0, 0, 0]);
  const leftnum = (234.11 / 12) * page;
  function changepage() {
    setpage(page + 1);
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {page <= 12 ? (
          <>
            <div className={styles.header}>
              <div
                className={styles.flower}
                style={{
                  left: `${leftnum}px`,
                }}
              >
                <img
                  src={require(`./img/flower.png`)}
                  alt="flower"
                  width="35px"
                ></img>
              </div>
              <progress value={page} max="12"></progress>
            </div>
            <Questionbox question={q[page - 1].question}></Questionbox>
          </>
        ) : (
          <Result mbti={mbti}></Result>
        )}
        {page <= 12
          ? q[page - 1].select.map((s, i) => (
              <Selections
                key={i}
                selections={s}
                click={changepage}
                index={i}
                mbti={mbti}
                mbtichanger={setmbti}
                pagenum={page}
              ></Selections>
            ))
          : ""}
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default Quizpages;
