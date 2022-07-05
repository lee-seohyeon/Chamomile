import styles from "./css/Quizpages.module.css";
import { useState } from "react";
import q from "./contents/Question";
import Questionbox from "./Questionbox";
import Selections from "./Selections";
import Result from "./Result";
import Navbar from "../nav/Navbar"
function Quizpages() {
  const [page, setpage] = useState(1);
  const [mbti, setmbti] = useState([0, 0, 0, 0]);
  function changepage() {
    setpage(page + 1);
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {page <= 12 ? (
          <>
            <progress value={page} max="12"></progress>
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
