import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import styles from "./css/Roulette.module.css";
import Navbar from "../nav/Navbar";
import Back from "../back/Back";
function Roulette() {
  const data = [
    { id: 1, option: "빵" },
    { id: 2, option: "빙수" },
    { id: 3, option: "마카롱" },
    { id: 4, option: "케이크" },
    { id: 5, option: "아이스크림" },
    { id: 6, option: "쿠키" },
    { id: 7, option: "스콘" },
    { id: 8, option: "당고" },
    { id: 9, option: "떡" },
    { id: 10, option: "파르페" },
    { id: 11, option: "에그타르트" },
    { id: 12, option: "와플/크로플" },
  ];
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.header}>
                <Back className={styles.fake}></Back>
                <div className={styles.title}>룰렛 게임</div>
                <div className={styles.fake}></div>
            </div>
        </div>
        <hr />
        <div className={styles.roulette}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={["#f2f2f2"]}
            outerBorderWidth={[2]}
            innerBorderColor={["#f2f2f2"]}
            radiusLineColor={["#dedede"]}
            radiusLineWidth={[0]}
            textColors={["#000000"]}
            fontSize={[12]}
            perpendicularText={[true]}
            backgroundColors={[
              "rgb(255,199,0)",
              "rgb(253,218,51)",
              "rgb(255,239,105)",
              "rgb(253,218,51)",
            ]}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        </div>
        <button className={styles.button} onClick={handleSpinClick}>
          SPIN
        </button>
        <br />
        <div className={styles.result}>
          {!mustSpin ? data[prizeNumber].option : ""}
        </div>
        <Navbar></Navbar>
      </div>
    </div>
  );
}
export default Roulette;
