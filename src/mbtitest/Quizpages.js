import styles from "./css/Quizpages.module.css";
import { useState } from "react";
import q from "./contents/Question";
import Questionbox from "./Questionbox";
import Selections from "./Selections";
function Realtest() {
  const [page, setpage] = useState(1);
  const [mbti, setmbti] = useState([0, 0, 0, 0]);
  function changepage() {
    setpage(page + 1);
  }
  console.log(mbti);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <progress value={page} max="12"></progress>
        <Questionbox question={q[page - 1].question}></Questionbox>
        {q[page - 1].select.map((s, i) => (
          <Selections
            key={i}
            selections={s}
            click={changepage}
            index={i}
            mbtichanger={setmbti}
            pagenum={page}
          ></Selections>
        ))}
      </div>
    </div>
  );
}

export default Realtest;
