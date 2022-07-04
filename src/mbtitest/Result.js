import React from "react";

const Result = ({ mbti }) => {
  let result = "";
  mbti[0] > 0 ? add("e") : add("i");
  mbti[1] > 0 ? add("s") : add("n");
  mbti[2] > 0 ? add("t") : add("f");
  mbti[3] > 0 ? add("p") : add("j");
  function add(string) {
    result = result + string;
  }
  return <div>{result}</div>;
};

export default Result;
