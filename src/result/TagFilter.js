import React from "react";
import Tag from "./Tag";
import styles from "./css/TagFilter.module.css";
const TagFilter = ({ tags, tagset, now }) => {
  const 태그정하기 = (tag) => {
    if (tag === now) {
      tagset("");
    } else {
      tagset(tag);
    }
  };
  return (
    <div className={styles.tagcontainer}>
      {tags.map((tag) => (
        <div
          className={styles.tagone}
          onClick={() => {
            태그정하기(tag);
          }}
        >
          <Tag tag={tag} className={styles.tagone}></Tag>
        </div>
      ))}
    </div>
  );
};

export default TagFilter;
