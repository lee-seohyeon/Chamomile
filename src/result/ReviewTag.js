import styles from "./css/ReviewTag.module.css";
function ReviewTag({ tag }) {
  let tagcolor;
  if (tag === "꾸덕") {
    tagcolor = "#A37B4B";
  } else if (tag === "촉촉") {
    tagcolor = "#9BB2D4";
  } else if (tag === "비건") {
    tagcolor = "#7D9248";
  } else if (tag === "하동") {
    tagcolor = "#4FAD5B";
  } else if (tag === "유기농") {
    tagcolor = "#9FCE63";
  } else if (tag === "수제") {
    tagcolor = "#EDBF96";
  } else if (tag === "다크") {
    tagcolor = "#2A1A08";
  } else if (tag === "피칸") {
    tagcolor = "#643D13";
  } else if (tag === "부드러움") {
    tagcolor = "#F2E056";
  } else if (tag === "겉바속촉") {
    tagcolor = "#E46C0A";
  } else if (tag === "가성비") {
    tagcolor = "#31859C";
  } else if (tag === "겉바속촉") {
    tagcolor = "#E46C0A";
  } else if (tag === "안달아요") {
    tagcolor = "#FF7E79";
  } else if (tag === "토핑맛집") {
    tagcolor = "#8052A2";
  } else if (tag === "탱글") {
    tagcolor = "#F79646";
  } else if (tag === "바삭") {
    tagcolor = "#D99694";
  } else if (tag === "견과류") {
    tagcolor = "#6A3B04";
  } else if (tag === "수제") {
    tagcolor = "#FAC090";
  } else if (tag === "비쥬얼") {
    tagcolor = "#236F9E";
  } else if (tag === "고급짐") {
    tagcolor = "#A6F9D4";
  } else if (tag === "말랑") {
    tagcolor = "#F2C0C1";
  } else if (tag === "살살녹음") {
    tagcolor = "#5990D5";
  } else {
    tagcolor = "#A7A7A7";
  }
  return (
    <div className={styles.tag} style={{ backgroundColor: `${tagcolor}` }}>
      #{tag}
    </div>
  );
}

export default ReviewTag;
